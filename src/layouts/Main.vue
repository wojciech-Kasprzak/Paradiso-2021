<template>
  <div class="main">
    <Menu />
    <div class="main__pages">
      <div class="main__view">
        <transition name="slide" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
// import Store from "./store/index";

export default {
  name: "mainLayout",
  components: {Menu},
  data() {
    return {
      show: false,
    };
  },
  methods: {
    checkPath() {
      let path = this.$route.path;
      if (path != "/") {
        document.getElementsByTagName("body")[0].classList.remove("disableScroll");
      } else {
        document.getElementsByTagName("body")[0].classList.add("disableScroll");
      }
    },
  },
  watch: {
    $route() {
      let path = this.$route.path;
      let _this = this;
      if (this.show == true) {
        this.show = false;
      }
      setTimeout(function () {
        if (path != "/") {
          _this.show = true;
        } else {
          _this.show = false;
        }
      }, 1000);
      this.checkPath();
    },
  },
  mounted() {
    this.checkPath();
  },
};
</script>
<style scoped lang="scss">
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}

.main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background: #fff;
  margin-top: 80px;
  @media (min-width: 900px) {
    margin-top: 0;
  }

  &__pages {
    width: 100%;
    padding: 0 1rem;
    // margin-top: 70px;
    @media (min-width: 900px) {
      padding: 0;
      margin-top: 0;
    }
  }
  &__view {
    @media (min-width: 900px) {
      min-height: 70vh;
    }
    // padding: 4rem;
    // display: flex;
    // flex-direction: row;
    // justify-content: center;
    // align-items: center;
    // height: 100vh;
  }
}

$duration: 1s;
.transition {
  overflow: hidden;
}
.router-view,
.router-view-back {
  &-enter-active,
  &-leave-active {
    position: fixed;
    width: 100%;
    background: white;
    min-height: 100vh;
    top: 0;
  }
}
// router view
.router-view-enter-active {
  transition: transform $duration ease-in-out;
  z-index: 2;
  transform: translateX(100%);
}
.router-view-enter-to {
  z-index: 2;
  transform: translateX(0%);
}
.router-view-leave-active {
  z-index: -1;
}
.router-view-leave-to {
  z-index: -1;
}
// router view back

.router-view-back-leave-active {
  transition: transform $duration ease-in-out;
  z-index: 2;
  transform: translateX(0%);
}
.router-view-back-leave-to {
  z-index: 2;
  transform: translateX(100%);
}


</style>

