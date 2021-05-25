<template>
  <transition name="slide">
    <div class="subpage">
      <PageText>
        <template v-slot:title>{{ $route.meta.title }}</template>
        <template v-slot:subtitle>Paradiso {{ year }}</template>
        <template v-slot:text>
          <div class="gallery">
            <div class="gallery__pagination">
              <div class="gallery__pagination-title">Wybierz rok</div>
              <div class="gallery__pagination-years">
                <p
                  class="gallery__pagination-item"
                  :class="{ 'gallery__pagination-item--active': year == 2017 }"
                  v-on:click="year = 2017"
                >
                  Paradiso 2017
                </p>
                <p
                  class="gallery__pagination-item"
                  :class="{ 'gallery__pagination-item--active': year == 2018 }"
                  v-on:click="year = 2018"
                >
                  Paradiso 2018
                </p>
                <p
                  class="gallery__pagination-item"
                  :class="{ 'gallery__pagination-item--active': year == 2019 }"
                  v-on:click="year = 2019"
                >
                  Paradiso 2019
                </p>
              </div>
            </div>
            <transition name="fade" mode="out-in">
              <Images
                :limit="12"
                :year="year"
                v-bind:key="1"
                v-if="year == 2017"
              />
              <Images
                :limit="12"
                :year="year"
                v-bind:key="2"
                v-if="year == 2018"
              />
              <Images
                :limit="20"
                :year="year"
                v-bind:key="3"
                v-if="year == 2019"
              />
            </transition>
          </div>
        </template>
      </PageText>
    </div>
  </transition>
</template>

<script>
import Images from "@/components/gallery/Images.vue";

export default {
  name: "Gallery",
  components: {
    Images,
  },
  data() {
    return {
      year: 2019,
    };
  },
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.gallery {
  /deep/ &__images {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }
  /deep/ &__item {
    height: auto;
    width: 100%;
    margin-bottom: 0.5rem;
    @media (min-width: 900px) {
      width: calc(100% / 3 - 1rem);
      margin: 0.5rem;
    }
  }
  &__images {
  }
  &__item {
  }
  &__pagination {
  }
  &__pagination-title {
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  &__pagination-years {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 0;
    @media (min-width: 900px) {
      margin-bottom: 2rem;
    }
  }
  &__pagination-item {
    margin-right: 2rem;
    position: relative;
    text-transform: uppercase;
    cursor: pointer;
    margin-bottom: 1rem;
    width: 100%;
    @media (min-width: 900px) {
      width: unset;
      margin-bottom: 0;
    }
    &--active {
      &::after {
        width: 70% !important;
      }
    }
    &::after {
      position: absolute;
      content: "";
      bottom: -5px;
      left: 0;
      width: 0;
      transition: all 0.5s;
      height: 3px;
      background: $red;
    }
    &:hover {
      &::after {
        width: 70%;
      }
    }
  }
}
// /deep/ .gallery__images {
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: flex-start;
//   flex-wrap: wrap;
//   width: 100%;
// }
</style>
