<template>
  <transition name="slide">
    <div class="subpage">
      <PageText>
        <template v-slot:title>{{ $route.meta.title }}</template>
        <template v-slot:subtitle v-if="$route.meta.subtitle">{{ $route.meta.subtitle }}</template>
        <template v-slot:text>
          <p class="page-text__text">
            <strong>Dla kogo?</strong><br />
            Młodzież od 15 do 30 roku życia, kapłani, klerycy, katecheci, siostry zakonne, zakonnicy.
          </p>
          <p class="page-text__text">
            <strong>Gdzie?</strong><br />
            Na Świętej Górze w Gostyniu.
          </p>
          <p class="page-text__text">
            <strong>Kiedy?</strong><br />
            2 lipca 2021 r.
          </p>
          <p class="page-text__text">
            <strong>Zakwaterowanie</strong><br />
            W tym roku spotkanie Paradiso jest jednodniowe.
          </p>
          <p class="page-text__text">
            <strong>Jedzenie</strong><br />
            Jak zawsze czekać będzie na Was pyszne jedzonko. Zapraszamy!
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
