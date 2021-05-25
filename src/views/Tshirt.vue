<template>
  <transition name="slide">
    <div class="subpage">
      <PageText>
        <template v-slot:title>{{ $route.meta.title }}</template>
        <template v-slot:subtitle v-if="$route.meta.subtitle">{{ $route.meta.subtitle }}</template>
        <template v-slot:text>
          <p class="page-text__text">
            Specjalnie na Paradiso przygotowaliśmy dla Was nowe koszulki! Będzie je można nabyć na miejscu w trzech wersjach!
            Koszulka z bazyliką oraz koszulki z naszymi patronami, w wersji męskiej ze św. José i w wersji damskiej z bł.
            Chiarą. Czyż nie są piękne? :)
          </p>
          <p class="page-text__text">Koszt jednej koszulki: <strong>40 PLN</strong></p>
          <div class="thirt">
            <div class="thirt__item">
              <img src="@/assets/tshirt/bazylika_wizualizacja.jpg" alt="" />
            </div>
            <div class="thirt__item">
              <img src="@/assets/tshirt/Chiara_wizualizacja.jpg" alt="" />
            </div>
            <div class="thirt__item">
              <img src="@/assets/tshirt/Jose_wizualizacja.jpg" alt="" />
            </div>
          </div>
        </template>
      </PageText>
    </div>
  </transition>
</template>
<script>
export default {
  components: {},
};
</script>
<style lang="scss" scoped>
.thirt {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  &__item {
  }
}
</style>