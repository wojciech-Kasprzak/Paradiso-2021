<template>
  <div class="userData">
    <div class="userData__row">
      <div class="userData__item">
        <p class="userData__label">Imię</p>
        <p class="userData__content">Test</p>
      </div>
      <div class="userData__item">
        <p class="userData__label">Nzwisko</p>
        <p class="userData__content">Testowski</p>
      </div>
      <div class="userData__item">
        <p class="userData__label">PESEL</p>
        <p class="userData__content">12345678912</p>
      </div>
      <div class="userData__item">
        <p class="userData__label">Opiekun</p>
        <p class="userData__content">Lyyn Testowska</p>
      </div>
    </div>
    <div class="userData__row">
      <div class="userData__item">
        <p class="userData__label">Warsztat</p>
        <p class="userData__content">Fajny</p>
      </div>
      <div class="userData__item">
        <p class="userData__label">Rozmiar koszulki</p>
        <p class="userData__content">L</p>
      </div>
      <div class="userData__item">
        <p class="userData__label">Grupa "Księga"</p>
        <p class="userData__content">5</p>
      </div>
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
.userData {
  &__row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }
  &__item {
    width: 48%;
    margin-bottom: 1rem;
  }
  &__label {
    font-weight: 700;
  }
  &__content {
    font-size: 1.2rem;
  }
}
</style>
