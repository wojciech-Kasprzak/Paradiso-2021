<template>
  <transition name="slide">
    <div class="subpage">
      <PageText>
        <template v-slot:title>{{ $route.meta.title }}</template>
        <template v-slot:subtitle v-if="$route.meta.subtitle">{{
          $route.meta.subtitle
        }}</template>
        <template v-slot:text>
          <div class="patrons">
            <div class="patrons__item">
              <img src="@/assets/patrons/Chiara_z_napisami.jpg" alt="" />
            </div>
            <div class="patrons__item">
              <img src="@/assets/patrons/Jose_z_napisem.jpg" alt="" />
            </div>
            <div class="patrons__item">
              <img src="@/assets/patrons/MB_z_napisami.jpg" alt="" />
            </div>
            <div class="patrons__item">
              <img src="@/assets/patrons/Neri_z_napisem.jpg" alt="" />
            </div>
            <div class="patrons__item">
              <img src="@/assets/patrons/Newman_z_napisami.jpg" alt="" />
            </div>
          </div>
        </template>
      </PageText>
    </div>
  </transition>
</template>

<script>
export default {
  components: {},
};
</script>
<style lang="scss" scoped>
.patrons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  &__item {
      width: 100%;
      margin-right: 0;
      text-align: center;
      @media (min-width: 900px) {
      margin-right: 2rem;
      width: calc(100% / 3 - 2rem);
}
  }
}
</style>