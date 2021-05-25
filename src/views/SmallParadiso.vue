<template>
  <transition name="slide">
    <div class="subpage">
      <PageText>
        <template v-slot:title>{{ $route.meta.title }}</template>
        <template v-slot:subtitle v-if="$route.meta.subtitle">{{
          $route.meta.subtitle
        }}</template>
        <template v-slot:text>
          <p class="page-text__text">
            Dzień skupienia na Świętej Górze będzie dla nas okazją do spędzenia
            wspólnie czasu, przeżycia dobrej spowiedzi wielkopostnej i modlitwy.
            Miło będzie Was zobaczyć! Plan spotkania:
          </p>
          <p class="page-text__text">
            13.00 - rozpoczęcie, świadectwo i konferencja <br />
            14.30 - obiad <br />
            15.30 - nabożeństwo pokutne, spowiedź, adoracja <br />
            17.30 - spotkanie w ogrodach klasztornych<br />
            18.30 - różaniec <br />
            19:00 - Eucharystia
          </p>
          <p class="page-text__text">
            Nie czekajcie, rejestrujcie się, ponieważ miejsca są ograniczone.
          </p>
          <p class="page-text__text">
            Niech małą „cegiełką” tego spotkania będzie symboliczne 10 zł od
            każdego uczestnika zbierane po przyjeździe do Gostynia.
          </p>
          <p class="page-text__text">Do zobaczenia 27 marca!</p>
          <div
            class="page-text__btn page-text__btn--left"
            v-if="$func.compareDate()"
          >
            <router-link
              to="/rejestracja"
              class="page-text__btn page-text__btn--left"
              v-if="$func.compareDate()"
            >
              <Btn text="Zarejestruj się" />
            </router-link>
          </div>
        </template>
      </PageText>
    </div>
  </transition>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
