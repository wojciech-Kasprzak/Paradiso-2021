<template>
  <div class="page-text">
    <div class="page-text__title"><slot name="title"> </slot></div>
    <div class="page-text__content">
      <p class="page-text__subtitle"><slot name="subtitle"> </slot></p>
      <div class="page-text__line"></div>
      <slot name="text"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    to: String,
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.page-text {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  &__line {
    width: 40%;
    height: 4px;
    background: $red;
    margin-bottom: 1rem;
    @media (min-width: 900px) {
      width: 20%;
    }
  }
  &__title {
    font-weight: 700;
    font-size: 1.5rem;
    text-transform: uppercase;
    position: unset;
    background: none;
    top: 0;
    left: -3%;
    transform: unset;
    transform-origin: 0px 0px;
    width: 100%;

    @media (min-width: 900px) {
      transform: rotate(270deg) translateX(-100%);
      position: absolute;
      font-size: 3rem;
      left: 8%;
      width: unset;
    }

    @media (min-width: 1280px) {
      left: 13%;
    }

    @media (min-width: 1920px) {
      left: 15%;
    }
    // @media (min-width: 900px) {
    //   transform: rotate(270deg) translateX(-100%);
    //   position: absolute;
    //   font-size: 3rem;
    //   left: 15%;
    //   width: unset;
    // }
  }
  &__subtitle {
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    @media (min-width: 900px) {
      font-size: 2rem;
    }
  }
  &__text {
    margin-bottom: 1rem;
    a {
      color: #000;
    }
  }
  &__content {
    width: 100%;
    @media (min-width: 900px) {
      width: 60%;
    }
  }
  &__btn {
    display: flex;
    justify-content: flex-end;
    &--left {
      justify-content: flex-start
    }
  }
}
</style>
