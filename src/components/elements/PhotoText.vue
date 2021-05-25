<template>
  <div class="phototext">
    <slot name="img"> </slot>
    <div class="phototext__text">
      <p class="m__b--1">
        <slot name="text"> </slot>
      </p>
      <!-- <router-link :to="to" class="btn phototext__text--btn">
        <img class="btn__arrows" src="@/assets/arrows.svg" alt="" />
      </router-link> -->
      <router-link :to="to" class="phototext__text--btn">
        <Btn/>
      </router-link>
      <!-- <div class="btn__module">
        <p class="btn__text">Zapisz się</p>
        <div class="btn phototext__text--btn">
          <img class="btn__arrows" src="@/assets/arrows.svg" alt="" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hideBtnText: false,
    };
  },
  props: {
    to: String,
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.phototext {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  @media (min-width: 900px) {
    align-items: center;
  }
  &__photo {
    max-width: 100%;
    @media (min-width: 900px) {
      max-width: 50%;
    }
  }
  &__text {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: -20%;
    @media (min-width: 900px) {
      max-width: 33%;
      margin-top: 0;
    }
    &--btn {
      align-self: flex-end;
    }
  }
}
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
    width: 145px;
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
