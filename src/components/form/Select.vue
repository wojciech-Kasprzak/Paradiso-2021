<template>
  <div class="select__wrapper">
    <label for="" class="select__name" :class="{'select__name--active': selected.length > 0}" @click="open = !open">{{
      label
    }}</label>
    <div class="select" @blur="open = false">
      <div class="select__selected" :class="{'select__selected--open': open}" @click="open = !open">
        <slot name="display" :selectedElementstoDisplay="selected"></slot>
        <svg
          class="select__arrow"
          :class="{'select__arrow--rotate': open}"
          alt="Rozwiń"
          v-if="selected == this.default"
          xmlns="http://www.w3.org/2000/svg"
          width="14.875"
          height="9"
          viewBox="0 0 14.875 9"
        >
          <path id="arrow" d="M13.281,0,7.438,5.844,1.594,0,0,1.594,7.438,9,9,7.438l5.875-5.844Z" fill="#e1393c" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="input__clear"
          alt="Wyczyść"
          v-if="selected != this.default"
          @click.stop="clear()"
          width="14.875"
          height="14.844"
          viewBox="0 0 14.875 14.844"
        >
          <path
            id="close-X"
            d="M14.875,1.594,13.281,0,7.437,5.844,1.594,0,0,1.594,5.844,7.437,0,13.25l1.594,1.594L7.437,9l5.844,5.844,1.594-1.594L9.031,7.406Z"
            fill="#e1393c"
          />
        </svg>
      </div>
      <div class="select__items" :class="{'select__items--hide': !open}">
        <slot name="option" :choose="choose" :activateSelected="activateSelected"></slot>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: "Select",
  computed: {},
  data() {
    return {
      selected: [],
      open: false,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    multiple: {
      type: Boolean,
      required: true,
      default: false,
    },
    getSelected: [Array, String, Number],
    fieldToChoose: String,
  },
  methods: {
    clear() {
      this.selected = this.default;
      this.open = false;
      this.$emit("input", null);
    },
    activateSelected(value) {
      if (Array.isArray(this.selected)) {
        return this.selected.includes(value);
      }
    },
    choose(option) {
      this.open = !this.open
      const index = this.selected.indexOf(option);
      if (this.selected.indexOf(option) > -1) {
        this.selected.splice(index, 1);

        if (this.selected.length > 0) {
          this.$emit("input", this.selected);
        } else {
          this.selected = this.default;
          this.$emit("input", this.default);
        }
      } else {
        if (!Array.isArray(this.selected)) {
          this.selected = [];
        }

        if (this.multiple) {
          this.selected.push(parseInt(option));
          this.$emit("input", this.selected);
        } else {
          this.selected = [parseInt(option)];
          this.$emit("input", this.selected);
        }
      }
    },
  },
  watch: {
    getSelected: function (val) {
      if (val == null || val == undefined || val.length == 0) {
        this.selected = this.default;
      } else {
        this.selected = val;
      }
    },
  },
  mounted() {
    if (this.getSelected == null || this.getSelected == undefined) {
      this.selected = this.default;
    } else {
      // this.getSelected.toString()
      // if (typeof this.getSelected === "string") {

      //   this.getSelected = [this.getSelected];
      // } else {
        this.selected = this.getSelected;
      // }
    }
  },
};
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  //   height: 30px;
  //   line-height: 30px;
  margin-bottom: 1.5rem;
  &__wrapper {
    position: relative;
  }
  &__name {
    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;
    transition: all 0.3s;
    cursor: pointer;
    z-index: 1;
    &--active {
      top: -1.1rem;
      font-size: 0.8rem;
      cursor: default;
      pointer-events: none;
    }
  }

  &__display {
    display: flex;
    div {
      margin-right: 0.5rem;
      width: 100%;
      font-weight: 300;
      font-size: 1rem;
    }
  }
  &__selected {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    color: gray;
    height: 30px;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s;
    border-bottom: 1px solid $red;
    &::after {
      position: absolute;
      content: "";
      top: 22px;
      right: 1em;
      width: 0;
      height: 0;
    }
    &--open {
      color: gray;
      border-bottom: 1px solid $red;
    }
  }
  &__items {
    overflow-y: auto;
    border-bottom: 1px solid $red;
    position: absolute;
    background-color: #fafafa;
    left: 0;
    right: 0;
    z-index: 1;
    transition: all 0.5s;
    max-height: 190px;
    // height: 190px;
    &--hide {
      // display: none;
      border-bottom: 0px;
      min-height: 0;
      height: 0;
    }
  }
  &__item {
    color: gray;
    padding: 0.3rem 1rem;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s;
    &--active {
      background-color: $red;
      color: #fff;
    }
    &:hover {
      background-color: $red;
      color: #fff;
    }
  }
  &__arrow {
    transition: all 0.5s;
    &--rotate {
      transform: rotate(180deg);
    }
  }
}

.selectHide {
  display: none;
}
</style>


