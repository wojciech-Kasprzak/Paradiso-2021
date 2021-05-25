<template>
  <transition name="slide">
    <div class="subpage">
      <PageText>
        <template v-slot:title>{{ $route.meta.title }}</template>
        <template v-slot:subtitle v-if="$route.meta.subtitle">{{
          $route.meta.subtitle
        }}</template>
        <template v-slot:text>
          <p class="page-text__text">Paradiso - to znaczy „raj”!</p>

          <p class="page-text__text">
            Zainspirowani takimi wydarzeniami jak Światowe Dni Młodzieży, gdzie obserwować można radość płynącą ze spotkania młodych ludzi ze sobą i z Panem Bogiem chcemy zaproponować podobne spotkanie dla młodych z całej Polski.
          </p>
          <p class="page-text__text">
            Rok 2020 był pełen wyzwań, cały czas brakuje nam rozmów, integracji i okazji do spędzenia czasu we wspólnocie, tym bardziej zatem potrzebujemy spotkania z Bogiem i drugim człowiekiem.
          </p>
          <p class="page-text__text">
            Święty Filip Neri, patron księży Filipinów, współorganizatorów wydarzenia, mawiał "Preferisco il paradiso", co oznacza "Wolę niebo, wolę raj". Naszym założeniem było stworzenie miasteczka młodych, gdzie będą oni mogli dobrze rozpocząć czas wakacji i jednocześnie zbliżać się do Pana Boga, do nieba.
          </p>
          <p class="page-text__text">
            Paradiso to wakacyjna propozycja dla młodzieży z Archidiecezji Poznańskiej i nie tylko, organizowana przez Księży Filipinów oraz Archidiecezjalne Duszpasterstwo Młodzieży Jordan, na Świętej Górze w Gostyniu. Jest to wyjątkowa okazja do spędzenia czasu z Bogiem i drugim człowiekiem. Do udziału w wydarzeniu zapraszamy osoby w wieku 15-30 lat, ich opiekunów, kleryków, księży, siostry zakonne, zakonników, wolontariuszy, oraz wszystkie osoby pozytywnie zakręcone, chcące doświadczyć wspólnoty i Bożej radości.
          </p>
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
