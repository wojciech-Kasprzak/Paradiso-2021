<template>
  <div class="agreement">
    <p class="agreement__title">Zgody i informacje</p>
    <div class="agreement__item">
      <p class="agreement__text">Zgoda na uczestnictwo w wydarzeniu</p>
      <img src="@/assets/download.svg" alt="" class="agreement__img" />
    </div>
    <a class="agreement__item">
      <p class="agreement__text">Zgoda na Udostępnianie wizerunku</p>
      <img src="@/assets/download.svg" alt="" class="agreement__img" />
    </a>
    <a class="agreement__item">
      <p class="agreement__text">
        Informacja na temat przetwarzania danych osobowych
      </p>
      <img src="@/assets/download.svg" alt="" class="agreement__img" />
    </a>
    <!-- <div class="agreement__btn">
      <Btn text="Pobierz kod QR" />
    </div> -->
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
.agreement {
  margin-top: 2rem;
  @media (min-width: 900px) {
    margin-top: 0;
  }
  &__title {
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1rem;
    @media (min-width: 900px) {
      justify-content: flex-start;
    }
  }
  &__img {
    margin-left: 1rem;
    max-width: 25px;
  }
  &__btn {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
