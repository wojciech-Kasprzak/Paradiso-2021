<template>
  <transition name="slide">
    <div class="p-main-page">
      <ScrollArows />

      <PhotoText class="p-main-page__section" to="/co-to">
        <template v-slot:img>
          <img class="phototext__photo" src="@/assets/main/coto.png" alt="" />
        </template>
        <template v-slot:text>
          Młodzi ludzie w dzisiejszym świecie potrzebują spotkania i świadectwa, dużych wydarzeń wspólnoty Kościoła, gdzie
          widzą, że nie są w swojej wierze sami. Nie tylko młodzi, ale także ich duszpasterze potrzebują tego, aby budować
          świadomość, że razem można więcej.
        </template>
      </PhotoText>
      <PhotoText class="p-main-page__section" to="/informacje">
        <template v-slot:img>
          <img class="phototext__photo" src="@/assets/main/informacje.png" alt="" />
        </template>
        <template v-slot:text>
          Zajrzyj, aby dowiedzieć się dla kogo jest spotkanie Paradiso, gdzie i kiedy się odbywa, a także jak wygląda
          zakwaterowanie i jedzenie.
        </template>
      </PhotoText>
      <PhotoText class="p-main-page__section" to="/FAQ">
        <template v-slot:img>
          <img class="phototext__photo" src="@/assets/main/faq.png" alt="" />
        </template>
        <template v-slot:text>
          Chcesz wiedzieć więcej? Koniecznie sprawdź dział FAQ, gdzie znajdziesz odpowiedzi na najczęściej zadawane pytania.
          W poszukiwaniu dodatkowych informacji odwiedź nasz fanpage na portalu Facebook.
        </template>
      </PhotoText>
      <PhotoText class="p-main-page__section" to="/galeria">
        <template v-slot:img>
          <img class="phototext__photo" src="@/assets/main/galeria.png" alt="" />
        </template>
        <template v-slot:text>
          Może byliście już na Paradiso i rozpoznajecie siebie na zdjęciach? A jeśli nie, koniecznie zobaczcie jak było w
          poprzednich latach i przekonajcie się, że warto! Zapraszamy do galerii zdjęć.
        </template>
      </PhotoText>
      <PhotoText v-if="$func.compareDate()" class="p-main-page__section" to="/rejestracja">
        <template v-slot:img>
          <img class="phototext__photo" src="@/assets/main/rejestracja.png" alt="" />
        </template>
        <template v-slot:text>
          Zapraszamy do rejestracji na Paradiso, które odbędzie się 2 lipca 2021 r. Liczba miejsc ograniczona. Nie czekaj,
          zarejestruj się!<br /><br />
          <span>
          Więcej informacji o planie wydarzenia znajdziesz<router-link to="/plan" v-html="$func.hoverWord('tutaj')"></router-link>.
          </span>
        </template>
      </PhotoText>
    </div>
  </transition>
</template>

<script>
import PhotoText from "@/components/elements/PhotoText.vue";
import ScrollArows from "@/components/elements/ScrollArows.vue";

export default {
  name: "MainPage",
  components: {
    PhotoText,
    ScrollArows,
  },
};
</script>
<style lang="scss" scoped>
.p-main-page {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  &__section {
    height: 100vh;
    scroll-snap-align: center;
  }
}
span {
  display: flex;
  a {
    margin-left: 4px;
  }
}
</style>
