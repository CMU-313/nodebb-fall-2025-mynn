# Complexity report, 10/23/2025

* Mean per-function logical LOC: 7.026785714285715
* Mean per-function parameter count: 0.6959325396825397
* Mean per-function cyclomatic complexity: 2.099702380952381
* Mean per-function Halstead effort: 2673.3629912256333
* Mean per-module maintainability index: 122.90076331849156
* First-order density: 0%
* Change cost: 8.333333333333332%
* Core size: 0%

## ./src/als.js

* Physical LOC: 7
* Logical LOC: 4
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 25%
* Maintainability index: 131.10290804631353
* Dependency count: 1

## ./src/cache.js

* Physical LOC: 9
* Logical LOC: 6
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 16.666666666666664%
* Maintainability index: 122.14705443395005
* Dependency count: 1

## ./src/cacheCreate.js

* Physical LOC: 3
* Logical LOC: 2
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 50%
* Maintainability index: 147.515380905409
* Dependency count: 1

## ./src/constants.js

* Physical LOC: 26
* Logical LOC: 21
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 4.761904761904762%
* Maintainability index: 93.02080429572953
* Dependency count: 1

## ./src/coverPhoto.js

* Physical LOC: 40
* Logical LOC: 24
* Mean parameter count: 1.3333333333333333
* Cyclomatic complexity: 6
* Cyclomatic complexity density: 25%
* Maintainability index: 116.56247384261391
* Dependency count: 2
* Function: **coverPhoto.getDefaultGroupCover**
    * Line No.: 11
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.3333333333333333
    * Halstead volume: 13.931568569324174
    * Halstead effort: 18.575424759098897
* Function: **coverPhoto.getDefaultProfileCover**
    * Line No.: 15
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.2
    * Halstead volume: 25.26619429851844
    * Halstead effort: 30.319433158222125
* Function: **getCover**
    * Line No.: 19
    * Physical LOC: 22
    * Logical LOC: 14
    * Parameter count: 2
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 17.763157894736842
    * Halstead volume: 462.9591185537809
    * Halstead effort: 8223.615921679004

## ./src/logger.js

* Physical LOC: 217
* Logical LOC: 97
* Mean parameter count: 1.5
* Cyclomatic complexity: 22
* Cyclomatic complexity density: 22.68041237113402%
* Maintainability index: 121.64911097985727
* Dependency count: 7
* Function: **Logger.init**
    * Line No.: 34
    * Physical LOC: 5
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.0999999999999996
    * Halstead volume: 36
    * Halstead effort: 75.6
* Function: **Logger.setup**
    * Line No.: 40
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 30
    * Halstead effort: 30
* Function: **Logger.setup_one**
    * Line No.: 44
    * Physical LOC: 10
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 3
    * Halstead volume: 49.82892142331044
    * Halstead effort: 149.4867642699313
* Function: **Logger.setup_one_log**
    * Line No.: 55
    * Physical LOC: 16
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 7.25
    * Halstead volume: 256.7579000403848
    * Halstead effort: 1861.4947752927899
* Function: **Logger.open**
    * Line No.: 72
    * Physical LOC: 27
    * Logical LOC: 19
    * Parameter count: 1
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 31.57894736842105%
    * Halstead difficulty: 11.842105263157894
    * Halstead volume: 408.0704035907161
    * Halstead effort: 4832.412674100586
* Function: **Logger.close**
    * Line No.: 100
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 6
    * Halstead volume: 78.86917501586544
    * Halstead effort: 473.2150500951926
* Function: **Logger.monitorConfig**
    * Line No.: 107
    * Physical LOC: 8
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1.75
    * Halstead volume: 73.08241808752197
    * Halstead effort: 127.89423165316344
* Function: **Logger.express_open**
    * Line No.: 116
    * Physical LOC: 10
    * Logical LOC: 5
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 5.46875
    * Halstead volume: 208.0838499786226
    * Halstead effort: 1137.9585545705922
* Function: **Logger.expressLogger**
    * Line No.: 127
    * Physical LOC: 11
    * Logical LOC: 3
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 3.5
    * Halstead volume: 93.76537429460444
    * Halstead effort: 328.1788100311155
* Function: **Logger.prepare_io_string**
    * Line No.: 139
    * Physical LOC: 13
    * Logical LOC: 5
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 2.25
    * Halstead volume: 50.18947501009619
    * Halstead effort: 112.92631877271643
* Function: **Logger.io_close**
    * Line No.: 153
    * Physical LOC: 20
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 166.66666666666669%
    * Halstead difficulty: 14
    * Halstead volume: 124.53953827094271
    * Halstead effort: 1743.553535793198
* Function: **Logger.io**
    * Line No.: 174
    * Physical LOC: 14
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 166.66666666666669%
    * Halstead difficulty: 14
    * Halstead volume: 124.53953827094271
    * Halstead effort: 1743.553535793198
* Function: **Logger.io_one**
    * Line No.: 189
    * Physical LOC: 29
    * Logical LOC: 8
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 8
    * Halstead volume: 252.17293753966362
    * Halstead effort: 2017.383500317309
* Function: **override**
    * Line No.: 193
    * Physical LOC: 13
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 8
    * Halstead effort: 4

## ./src/prestart.js

* Physical LOC: 129
* Logical LOC: 80
* Mean parameter count: 0.3333333333333333
* Cyclomatic complexity: 18
* Cyclomatic complexity density: 22.5%
* Maintainability index: 86.70813936526659
* Dependency count: 8
* Function: **setupWinston**
    * Line No.: 12
    * Physical LOC: 34
    * Logical LOC: 18
    * Parameter count: 0
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 19.06060606060606
    * Halstead volume: 835.2907160866592
    * Halstead effort: 15921.147285409352
* Function: **loadConfig**
    * Line No.: 47
    * Physical LOC: 67
    * Logical LOC: 41
    * Parameter count: 1
    * Cyclomatic complexity: 12
    * Cyclomatic complexity density: 29.268292682926827%
    * Halstead difficulty: 17.89873417721519
    * Halstead volume: 2327.9405367544596
    * Halstead effort: 41667.18884773172
* Function: **versionCheck**
    * Line No.: 115
    * Physical LOC: 11
    * Logical LOC: 7
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 4.3125
    * Halstead volume: 200.67442283867837
    * Halstead effort: 865.4084484918004

## ./src/promisify.js

* Physical LOC: 61
* Logical LOC: 29
* Mean parameter count: 1.375
* Cyclomatic complexity: 6
* Cyclomatic complexity density: 20.689655172413794%
* Maintainability index: 131.49141921603774
* Dependency count: 1
* Function: **module.exports**
    * Line No.: 5
    * Physical LOC: 57
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 3.75
    * Halstead volume: 77.70923408096293
    * Halstead effort: 291.409627803611
* Function: **isCallbackedFunction**
    * Line No.: 7
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.2
    * Halstead volume: 112.58797503894243
    * Halstead effort: 585.4574702025006
* Function: **isAsyncFunction**
    * Line No.: 15
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4
    * Halstead volume: 45
    * Halstead effort: 180
* Function: **promisifyRecursive**
    * Line No.: 19
    * Physical LOC: 19
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 7
    * Halstead volume: 58.81033751683406
    * Halstead effort: 411.6723626178384
* Function: **wrapCallback**
    * Line No.: 39
    * Physical LOC: 10
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 11.60964047443681
    * Halstead effort: 11.60964047443681
* Function: **wrapperCallback**
    * Line No.: 40
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 7.777777777777778
    * Halstead volume: 135.93368043019473
    * Halstead effort: 1057.2619589015146
* Function: **wrapPromise**
    * Line No.: 50
    * Physical LOC: 9
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 11.60964047443681
    * Halstead effort: 11.60964047443681
* Function: **wrapperPromise**
    * Line No.: 51
    * Physical LOC: 7
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 6
    * Halstead volume: 79.95445336320968
    * Halstead effort: 479.7267201792581

## ./src/pubsub.js

* Physical LOC: 71
* Logical LOC: 49
* Mean parameter count: 1.1666666666666667
* Cyclomatic complexity: 8
* Cyclomatic complexity density: 16.3265306122449%
* Maintainability index: 116.75349884609224
* Dependency count: 3
* Function: **get**
    * Line No.: 10
    * Physical LOC: 47
    * Logical LOC: 29
    * Parameter count: 0
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 27.586206896551722%
    * Halstead difficulty: 14
    * Halstead volume: 549.8389590100714
    * Halstead effort: 7697.745426141
* Function: **singleHost.publish**
    * Line No.: 34
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 3.142857142857143
    * Halstead volume: 58.81033751683406
    * Halstead effort: 184.83248933862134
* Function: **publish**
    * Line No.: 59
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.5
    * Halstead volume: 23.264662506490403
    * Halstead effort: 34.89699375973561
* Function: **on**
    * Line No.: 62
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.5
    * Halstead volume: 23.264662506490403
    * Halstead effort: 34.89699375973561
* Function: **removeAllListeners**
    * Line No.: 65
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.3333333333333333
    * Halstead volume: 16.253496664211536
    * Halstead effort: 21.67132888561538
* Function: **reset**
    * Line No.: 68
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734

## ./src/settings.js

* Physical LOC: 240
* Logical LOC: 102
* Mean parameter count: 1.6428571428571428
* Cyclomatic complexity: 23
* Cyclomatic complexity density: 22.54901960784314%
* Maintainability index: 116.23340173775621
* Dependency count: 2
* Function: **expandObjBy**
    * Line No.: 6
    * Physical LOC: 19
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 6
    * Halstead volume: 53.1508495181978
    * Halstead effort: 318.90509710918684
* Function: **trim**
    * Line No.: 26
    * Physical LOC: 9
    * Logical LOC: 0
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: Infinity%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **mergeSettings**
    * Line No.: 36
    * Physical LOC: 11
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 12
    * Halstead volume: 125.64271242790092
    * Halstead effort: 1507.712549134811
* Function: **Settings**
    * Line No.: 59
    * Physical LOC: 19
    * Logical LOC: 9
    * Parameter count: 6
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 9.333333333333334
    * Halstead volume: 203.13062045970605
    * Halstead effort: 1895.8857909572566
* Function: **&lt;anonymous>**
    * Line No.: 68
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 15.509775004326936
    * Halstead effort: 15.509775004326936
* Function: **&lt;anonymous>.sync**
    * Line No.: 88
    * Physical LOC: 19
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.2857142857142856
    * Halstead volume: 48.43204266092217
    * Halstead effort: 110.70181179639353
* Function: **&lt;anonymous>.persist**
    * Line No.: 112
    * Physical LOC: 13
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 7.5
    * Halstead volume: 210.90827503317323
    * Halstead effort: 1581.8120627487992
* Function: **&lt;anonymous>.get**
    * Line No.: 132
    * Physical LOC: 24
    * Logical LOC: 18
    * Parameter count: 2
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 44.44444444444444%
    * Halstead difficulty: 19.52631578947368
    * Halstead volume: 489.30622957776995
    * Halstead effort: 9554.347956492244
* Function: **&lt;anonymous>.getWrapper**
    * Line No.: 161
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8
* Function: **&lt;anonymous>.createWrapper**
    * Line No.: 169
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.0999999999999996
    * Halstead volume: 33
    * Halstead effort: 69.29999999999998
* Function: **&lt;anonymous>.createDefaultWrapper**
    * Line No.: 180
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.25
    * Halstead volume: 30.880904142633646
    * Halstead effort: 69.4820343209257
* Function: **&lt;anonymous>.set**
    * Line No.: 189
    * Physical LOC: 23
    * Logical LOC: 19
    * Parameter count: 2
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 36.84210526315789%
    * Halstead difficulty: 21
    * Halstead volume: 533.4454337622765
    * Halstead effort: 11202.354109007807
* Function: **&lt;anonymous>.reset**
    * Line No.: 217
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.4000000000000004
    * Halstead volume: 42
    * Halstead effort: 100.80000000000001
* Function: **&lt;anonymous>.checkStructure**
    * Line No.: 227
    * Physical LOC: 12
    * Logical LOC: 8
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 12.5
    * Halstead volume: 203.13062045970605
    * Halstead effort: 2539.1327557463255

## ./src/slugify.js

* Physical LOC: 3
* Logical LOC: 2
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 50%
* Maintainability index: 147.515380905409
* Dependency count: 1

## ./src/translator.js

* Physical LOC: 14
* Logical LOC: 6
* Mean parameter count: 1
* Cyclomatic complexity: 2
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 144.1095872474636
* Dependency count: 3
* Function: **warn**
    * Line No.: 5
    * Physical LOC: 5
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.3333333333333335
    * Halstead volume: 39.863137138648355
    * Halstead effort: 93.01398665684617

