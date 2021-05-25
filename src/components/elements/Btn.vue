<template>
  <div class="btn__module" v-if="text">
    <p class="btn__text">{{text}}</p>
    <div class="btn phototext__text--btn">
      <img class="btn__arrows" src="@/assets/arrows.svg" alt="" />
    </div>
  </div> 
  <div class="btn" v-else>
        <img class="btn__arrows" src="@/assets/arrows.svg" alt="" />
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
.btn {
  background: url("./../../assets/btn.svg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  width: 60px;
  height: 60px;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    .btn__arrows {
      animation: nextarrow 0.7s forwards;
    }
  }
  &__arrows {
    max-width: 40%;
    // transition: all 0.5s;
  }
  &__module {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 145px;
    cursor: pointer;
    &:hover {
      .btn__arrows {
        animation: nextarrow 0.7s forwards;
      }
    }
  }
  &__text {
    text-align: right;
    margin-right: 1rem;
    text-transform: uppercase;
    font-weight: 700;
  }
}
@keyframes nextarrow {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  30% {
    transform: translateX(60px);
    opacity: 0;
  }
  90% {
    transform: translateX(-60px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
