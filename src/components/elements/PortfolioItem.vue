<template>
  <div class="flexbox__item" @mouseover="hover = true" @mouseleave="hover = false">
    <img :src="img" />
    <p class="flexbox__title" :class="{ 'flexbox__title--active' : hover == true}">{{ text }}</p>
  </div>
</template>    

<script>
export default {
  data() {
    return {
      hover: false
    };
  },
  props: {
    img: String,
    text: String,
  },
  methods: {},
};
</script>
<style lang="scss">
.flexbox {
  &:hover {
    img {
      opacity: 0.28;
    }
  }
  &__item {
    position: relative;
    opacity: 1;
    transition: all 0.8s;
    overflow: hidden;
    &:hover {
      opacity: 1;
    }
  }
  &__title {
    background: #fff;
    width: 40%;
    transition: all 0.8s;
    padding: 0.7rem 1rem;
    position: absolute;
    bottom: 0;
    left: -40%;
    opacity: 1;
    z-index: 99;
    &--active {
      left: 0;
    }
  }
}
// .flexbox {
//   // Each flex item
//   .item {
//     position: relative;
//     // width: 33.33%; // 3 column
//     width: calc(100% / 2);
//     margin: 0 1rem 1rem 0;
//     img {
//       width: 100%;
//       display: block;
//       transition: all 0.8s;
//     }
//     .title {
//       position: absolute;
//       top: 48%;
//       left: 0;
//       width: 100%;
//       padding: 0 3%;
//       font-size: 30px;
//       text-shadow: 0 0 8px rgba(0, 0, 0, 0.42);
//     }
//     &:hover {
//       img {
//         opacity: 1;
//       }
//     }
//   }
// }
</style>
