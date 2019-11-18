<template>
  <div class="row">
    <Sidebar></Sidebar>
    <Main></Main>
  </div>
</template>

<script>
import Sidebar from "../Layouts/Sidebar.vue";
import Main from "../Layouts/Main";

export default {
  components: {
    Sidebar,
    Main
  },
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
