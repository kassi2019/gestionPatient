<template>
  <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
    <Navbar></Navbar>
    <div>
      <router-view></router-view>
    </div>
    <Nfooter></Nfooter>
  </main>
</template>

<script>
import Navbar from "./Navbar";
import Milieu from "./Milieu";
import Nfooter from "./Nfooter";

export default {
  components: {
    Navbar,
    Milieu,
    Nfooter
  },
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
