<template>
  <div class="scrollArows">
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    text: String,
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.scrollArows {
  position: absolute;
  left: 10%;
  bottom: 8%;
  transform: translate(-50%, -50%);
  @media (min-width: 768px) {
    left: 10%;
    bottom: 5%;
  }

  span {
    display: block;
    width: 15px;
    height: 15px;
    border-bottom: 3px solid $red;
    border-right: 3px solid $red;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 3s infinite;

    @media (min-width: 768px) {
      width: 30px;
      height: 30px;
      border-bottom: 5px solid $red;
      border-right: 5px solid $red;
    }

    &:nth-child(2) {
      animation-delay: -0.2s;
    }

    &:nth-child(3) {
      animation-delay: -0.4s;
    }
  }
}

@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}
</style>
