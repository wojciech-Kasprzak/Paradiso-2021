<template>
  <component id="app" :is="this.$route.meta.layout || 'div'">
    <router-view />
  </component>
</template>


<script>
// import { mapGetters } from "vuex";
export default {
  name: "App",
  // computed: {
  //   ...mapGetters({
  //     loggedUser: "user/getUser",
  //   }),
  // },
};
</script>

