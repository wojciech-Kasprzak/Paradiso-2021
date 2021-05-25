<template>
  <transition name="slide">
    <div class="subpage">
      <PageText>
        <template v-slot:title>{{ $route.meta.title }}</template>
        <template v-slot:subtitle v-if="$route.meta.subtitle">{{
          $route.meta.subtitle
        }}</template>
        <template v-slot:text>
          <div class="account">
            <div class="account__row">
              <div class="account__column">
                <UserData />
              </div>
              <div class="account__column">
                <QrCode />
              </div>
            </div>
            <Agreement />
          </div>
        </template>
      </PageText>
    </div>
  </transition>
</template>

<script>
import UserData from "@/components/account/UserData.vue";
import QrCode from "@/components/account/QrCode.vue";
import Agreement from "@/components/account/Agreement.vue";

export default {
  components: {
    UserData,
    QrCode,
    Agreement,
  },
};
</script>
<style lang="scss" scoped>
.account {
  &__row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  &__column {
    width: 100%;
    @media (min-width: 900px) {
      width: 50%;
    }
  }
}
</style>
