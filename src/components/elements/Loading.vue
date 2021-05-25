<template>
  <div class="loading">
    <div class="loading__wrapper">
      <img class="loading__img" src="@/assets/Owca.svg" alt="" />
      <p class="loading__text">Ładowanie<span class="one">.</span><span class="two">.</span><span class="three">.</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.loading {
  background-color: rgba($color: #fff, $alpha: 0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  &__img {
    width: 70%;
  }
  &__text {
    margin-top: 1rem;
    color: $sheep;
    font-size: 2rem;
  }
  &__wrapper {
    width: 65%;
    text-align: center;
    @media (min-width: 900px) {
      width: 15%;
    }
  }
}

.one {
  opacity: 0;
  -webkit-animation: dot 1.3s infinite;
  -webkit-animation-delay: 0s;
  animation: dot 1.3s infinite;
  animation-delay: 0s;
}

.two {
  opacity: 0;
  -webkit-animation: dot 1.3s infinite;
  -webkit-animation-delay: 0.2s;
  animation: dot 1.3s infinite;
  animation-delay: 0.2s;
}

.three {
  opacity: 0;
  -webkit-animation: dot 1.3s infinite;
  -webkit-animation-delay: 0.3s;
  animation: dot 1.3s infinite;
  animation-delay: 0.3s;
}

@-webkit-keyframes dot {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes dot {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
