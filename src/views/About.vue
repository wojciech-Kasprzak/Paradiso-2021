<template>
  <transition name="slide">
    <div class="p-main-page">
      <PhotoText class="p-main-page__section" to="/">
        <template v-slot:img>
          <img
            class="phototext__photo"
            src="@/assets/main/rejestracja.png"
            alt=""
          />
        </template>
        <template v-slot:text>
          POTRZEBNY TEKST O REJESTRACJI<br /><br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </template>
      </PhotoText>
    </div>
  </transition>
</template>

<script>
import PhotoText from "@/components/elements/PhotoText.vue";

export default {
  name: "MainPage",
  components: {
    PhotoText,
  },
};
</script>
<style lang="scss" scoped>
.p-main-page {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  &__section {
    height: 100vh;
    scroll-snap-align: center;
  }
}
</style>
