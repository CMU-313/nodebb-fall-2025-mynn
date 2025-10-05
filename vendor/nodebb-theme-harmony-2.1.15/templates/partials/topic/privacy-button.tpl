{{{ if (privileges.isAdminOrMod && !private) }}}
<a component="topic/toggle-private" href="#" class="d-flex gap-2 align-items-center btn btn-sm btn-ghost fw-semibold" data-tid="{tid}" data-private="{topic.private}">
    <i class="fa fa-fw fa-lock text-primary"></i>
    <span class="d-none d-md-block text-truncate text-nowrap">[[topic:make_private]]</span>
</a>
{{{ end }}}