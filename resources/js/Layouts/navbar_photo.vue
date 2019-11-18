<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle text-nowrap px-3"
      data-toggle="dropdown"
      href="#"
      role="button"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <img
        class="user-avatar rounded-circle mr-2"
        src="/test/images/avatars/0.jpg"
        alt="User Avatar"
      />
      <span class="d-none d-md-inline-block">Sierra Brooks</span>
    </a>
    <d iv class="dropdown-menu dropdown-menu-small">
      <a class="dropdown-item" href="user-profile-lite.html">
        <i class="material-icons">&#xE7FD;</i> Profile
      </a>
      <a class="dropdown-item" href="components-blog-posts.html">
        <i class="material-icons">vertical_split</i> Blog Posts
      </a>
      <a class="dropdown-item" href="add-new-post.html">
        <i class="material-icons">note_add</i> Add New Post
      </a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item text-danger" href="#">
        <i class="material-icons text-danger">&#xE879;</i> Logout
      </a>
    </d>
  </li>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
