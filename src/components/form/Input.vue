<template>
  <label class="input">
    <p class="input__name" :class="{'input__name--active': active}">
      {{ placeholder }}
      <span class="input__error" v-if="error"> / {{ error }}</span>
    </p>
    <input type="text" class="input__input" v-model="content" @focus="active = true" @blur="animationLabel()" />
    <p class="input__subtext">
      {{ subtext }}
    </p>
  </label>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      content: "",
    };
  },
  props: {
    placeholder: String,
    subtext: String,
    value: {
      type: String,
      default: "",
    },
    error: String,
  },
  methods: {
    animationLabel() {
      if (this.content == "") {
        this.active = false;
      } else {
        this.active = true;
      }
    },
  },
  watch: {
    content(val) {
      this.$emit("return", val);
    },
  },
  mounted() {
    if (this.value != "") {
      this.content = this.value;
      this.animationLabel();
    }
  },
};
</script>
<style scoped lang="scss">
.input {
  position: relative;
  cursor: text;
  width: 100%;
  margin-bottom: 1.5rem;
  &__name {
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s;
    &--active {
      top: -1.1rem;
      font-size: 0.8rem;
    }
  }
  &__subtext {
    font-size: 0.8rem;
  }
  &__input {
    height: 30px;
    width: 100%;
    border: none;
    border-bottom: 1px solid $red;
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-weight: 300;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
  }
  &__error {
    color: $red;
  }
}
</style>
