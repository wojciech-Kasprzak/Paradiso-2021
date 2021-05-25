<template>
  <div class="menu">
    <div class="menu__toolbar">
      <router-link to="/" class="menu__logo">
        <img class="" src="@/assets/logo.svg" alt="" />
      </router-link>
      <div class="menu__btn">
        <div
          class="menu__btn-text"
          :class="{ 'menu__btn-text--active': hideBtnText }"
          v-on:click="close()"
          v-html="$func.hoverWord('MENU')"
        ></div>
        <img
          class="menu__btn-img"
          :class="{ 'menu__btn-img--active': hideBtnText }"
          v-on:click="close()"
          src="@/assets/cancel.svg"
          alt=""
        />
      </div>
      <div class="menu__logo">
        <!-- <img class="" src="@/assets/logo.svg" alt="" /> -->
      </div>
    </div>

    <div class="menu__nav" :class="{ 'menu__nav--active': hideBtnText }">
      <MenuItem @close="close()" to="/" text="Home" />
      <!-- <MenuItem @close="close()" to="/male-paradiso" text="Małe Paradiso" /> -->
      <MenuItem @close="close()" to="/co-to" text="Co to?" />
      <MenuItem @close="close()" to="/informacje" text="Informacje" />
      <MenuItem @close="close()" to="/plan" text="Plan" />
      <MenuItem @close="close()" to="/FAQ" text="FAQ" />
      <MenuItem @close="close()" to="/koszulki" text="Koszulki" />
      <MenuItem @close="close()" to="/patroni" text="Patroni" />
      <MenuItem @close="close()" to="/galeria" text="Galeria" />
      <MenuItem @close="close()" to="/rejestracja" text="Rejestracja" v-if="$func.compareDate()"/>
      <MenuItem @close="close()" to="/kontakt" text="Kontakt" />
      <!-- <MenuItem @close="close()" to="/zaloguj" text="Zaloguj" /> -->
    </div>
  </div>
</template>

<script>
import MenuItem from "@/components/menu/Item.vue";

export default {
  components: {
    MenuItem,
  },
  data() {
    return {
      hideBtnText: false,
    };
  },
  methods: {
    close() {
      this.hideBtnText = !this.hideBtnText;
    },
  },
  mounted() {
  },
};
</script>
<style scoped lang="scss">
.menu {
  &__toolbar {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #fff;
    z-index: 99999999;
    height: 70px;
    width: 100%;
    @media (min-width: 900px) {
      width: 6%;
      height: 100vh;
      flex-direction: column;
    }
  }
  &__logo {
    width: 100%;
    img {
      width: 30%;
      @media (min-width: 500px) {
        width: 20%;
      }
      @media (min-width: 768px) {
        width: 15%;
      }
      @media (min-width: 900px) {
        width: 30%;
      }
      @media (min-width: 1280px) {
        width: 100%;
      }
      @media (min-width: 1920px) {
      }
    }
  }
  &__btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    transform: unset;
    @media (min-width: 900px) {
      transform: rotate(-90deg);
    }
  }
  &__btn-text {
    font-size: 1.2rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    &--active {
      transform: translateY(-300%);
    }
    p {
      transition: all 0.5s;
    }
    &:hover {
      p {
        &:nth-child(odd) {
          transform: translateY(15%);
        }
        &:nth-child(even) {
          transform: translateY(-15%);
        }
      }
    }
  }
  &__btn-img {
    position: absolute;
    cursor: pointer;
    transition: all 0.5s;
    transform: translateY(-300%);
    &--active {
      transform: translateY(0%);
    }
  }
  &__nav {
    z-index: 9999999;
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    box-shadow: unset;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    @media (min-width: 900px) {
      left: -44%;
      width: 50%;
      box-shadow: -15px 0px 20px 12px rgba(0, 0, 0, 0.6);
    }
    &--active {
      left: 0%;
    }
  }
  /deep/ &__item {
    margin: 0.8rem 0;
    text-transform: uppercase;
    color: #000;
    font-size: 1.4rem;
    position: relative;
    &--active {
      &::after {
        position: absolute;
        content: "";
        bottom: -5px;
        left: 0;
        height: 3px;
        width: 70%;
        background: $red;
      }
    }
    @media (min-width: 900px) {
      margin: 1.5rem 0;
    }
  }
}

.router-link-active {
  // &::after {
  //   position: absolute;
  //   content: "";
  //   bottom: -5px;
  //   left: 0;
  //   height: 3px;
  //   width: 70%;
  //   background: $red;
  // }
}
</style>
