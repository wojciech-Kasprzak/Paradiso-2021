<template>
  <router-link
    v-on:click.native="$emit('close')"
    v-html="$func.hoverWord(text)"
    :to="to"
    class="menu__item"
    :class="{ 'menu__item--active': subIsActive(to) }"
  ></router-link>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    to: String,
    text: String,
  },
  methods: {
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some((path) => {
        return this.$route.path == path ? true : false;
      });
    },
  },
};
</script>
<style scoped lang="scss">
</style>
