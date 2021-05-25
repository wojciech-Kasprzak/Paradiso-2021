<template>
  <div class="qrCode">
    <img class="qrCode__img" src="@/assets/qr.png" alt="" />
    <div class="qrCode__btn">
      <Btn text="Pobierz kod QR" />
    </div>
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
.qrCode {
  &__img {
    display: block;
    margin: 0 auto;
  }
  &__btn {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
