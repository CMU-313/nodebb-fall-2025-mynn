import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  // single simple scenario:
  // 10 virtual users for 30s, small load/ simple for k6 usage
  vus: 10,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<1500'],
    http_req_failed: ['rate<0.1'],
  },
};

const BASE = __ENV.BASE_URL || 'http://0.0.0.0:4567';

export default function () {
  const res = http.get(`${BASE}/`);
  check(res, {
    'homepage status is 200': (r) => r.status === 200,
  });

  const apiRes = http.get(`${BASE}/api/config`);
  check(apiRes, {
    'api/config status is 200': (r) => r.status === 200,
  });
}