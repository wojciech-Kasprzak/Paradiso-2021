<template>
  <transition name="slide">
    <div class="subpage">
      <PageText>
        <template v-slot:title>{{ $route.meta.title }}</template>
        <template v-slot:subtitle v-if="$route.meta.subtitle">{{ $route.meta.subtitle }}</template>
        <template v-slot:text>
          <p class="page-text__text">
            W tym roku zapraszamy Was na jednodniowe Paradiso, które odbędzie się 2 lipca na Świętej Górze w Gostyniu. Niech
            ten jeden dzień będzie dla nas okazją do wspólnego świętowania!
          </p>
          <p class="page-text__text">
            <strong>Plan wydarzenia:</strong><br />
            <strong>9.00</strong> – rejestracja<br />
            <strong>10.00</strong> – wprowadzenie i modlitwa w ciągu dnia<br />
            <strong>10.30</strong> – owocowy poranek<br />
            <strong>11.00</strong> – godzina świadectw<br />
            <strong>13.00</strong> – włoska fiesta<br />
            <strong>14.15</strong> – gra świętych<br />
            <strong>16.00</strong> – popołudniowe cappuccino<br />
            <strong>16.30</strong> – nabożeństwo pokutne, spowiedź, adoracja<br />
            <strong>18.00</strong> – tea time<br />
            <strong>18.30</strong> – różaniec<br />
            <strong>19:00</strong> – Eucharystia<br />
            <strong>20.30</strong> – Wielbienie przed Najświętszym Sakramentem<br />
            <strong>23.00</strong> – Nocny festiwal smaków
          </p>
          <p class="page-text__text">
            Niech małą „cegiełką” tego spotkania będzie 30 zł od każdego uczestnika zbierane po przyjeździe do Gostynia lub
            przekazane przelewem (dane do przelewu dostępne po rejestracji).
          </p>
          <p class="page-text__text">Nie czekaj, zarejestruj się!</p>
          <p class="page-text__text">Do zobaczenia!</p>
          <div class="page-text__btn page-text__btn--left" v-if="$func.compareDate()">
            <router-link to="/rejestracja" class="page-text__btn page-text__btn--left" v-if="$func.compareDate()">
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
};
</script>
<style lang="scss" scoped>
</style>
