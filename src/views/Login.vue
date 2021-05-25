<template>
  <transition name="slide">
    <div class="subpage">
      <PageText>
        <template v-slot:title>{{$route.meta.title}}</template>
        <template v-slot:subtitle v-if="$route.meta.subtitle">{{$route.meta.subtitle}}</template>
        <template v-slot:text>
          <div class="login">
            <div class="login__item">
              <Input
                class="form__row--col-2"
                placeholder="E-mail"
                @return="inputs.name = $event"
              />
            </div>
            <div class="login__item">
              <Input
                class="form__row--col-2"
                placeholder="Hasło"
                @return="inputs.pesel = $event"
              />
            </div>
            <div class="login__btn">
              <Btn text="Zaloguj się" v-on:click.native="send()" />
            </div>
          </div>
        </template>
      </PageText>
    </div>
  </transition>
</template>

<script>
import Input from "@/components/form/Input.vue";

export default {
  components: {
    Input,
  },
  data() {
    return {
      inputs: {
        name: "",
        pesel: "",
      },
    };
  },
  methods: {
    send() {
      this.$router.push("/konto");
    },
  },
};
</script>
<style lang="scss" scoped>
/* Accordion styles */
$midnight: #2c3e50;
$clouds: #ecf0f1;
.login {
  width: 60%;
  &__item {
    margin-bottom: 2rem;
  }
  &__btn {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
