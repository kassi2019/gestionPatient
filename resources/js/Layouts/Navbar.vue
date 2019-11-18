<template>
  <div class="main-navbar sticky-top bg-white">
    <!-- Main Navbar -->
    <nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
      <navbarimput></navbarimput>
      <ul class="navbar-nav border-left flex-row">
        <navbarnotification></navbarnotification>
        <navbarphoto></navbarphoto>
      </ul>
      <nav class="nav">
        <a
          href="#"
          class="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left"
          data-toggle="collapse"
          data-target=".header-navbar"
          aria-expanded="false"
          aria-controls="header-navbar"
        >
          <i class="material-icons">&#xE5D2;</i>
        </a>
      </nav>
    </nav>
    <!-- / .main-navbar -->
  </div>
</template>

<script>
import navbarimput from "./navbar_imput";
import navbarnotification from "./navbar_notification";
import navbarphoto from "./navbar_photo";
export default {
  components: {
    navbarimput,
    navbarnotification,
    navbarphoto
  },
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
