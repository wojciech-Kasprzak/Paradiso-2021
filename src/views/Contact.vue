<template>
  <transition name="slide">
    <div class="subpage">
      <PageText>
        <template v-slot:title>{{ $route.meta.title }}</template>
        <template v-slot:subtitle v-if="$route.meta.subtitle">{{
          $route.meta.subtitle
        }}</template>
        <template v-slot:text>
          <p class="page-text__text">
            Informacje<br />
            <a href="mailto:info@paradiso.org.pl">info@paradiso.org.pl</a>
          </p>
          <p class="page-text__text">
            Rzecznik prasowy<br />
            <a href="mailto:rzecznik-prasowy@paradiso.org.pl"
              >rzecznik-prasowy@paradiso.org.pl</a
            >
          </p>
          <p class="page-text__text">
            Media<br />
            <a href="mailto:media@paradiso.org.pl">media@paradiso.org.pl</a>
          </p>
          <p class="page-text__text">
            Rejestracja - administrator<br />
            <a href="mailto:administrator@paradiso.org.pl"
              >administrator@paradiso.org.pl</a
            >
          </p>
        </template>
      </PageText>
    </div>
  </transition>
</template>

<script>

export default {
  components: {
  },
};
</script>
<style lang="scss" scoped>
</style>
