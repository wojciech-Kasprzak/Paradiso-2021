<template>
  <div>
    <div class="checkbox__row">
      <input
        v-bind:id="number"
        class="checkbox"
        type="checkbox"
        v-model="content"
      />
      <label v-bind:for="number" :class="{'checkbox__disable' : enable}">
        <span></span>
        {{ text }}
      </label>
      <a class="checkbox__download" :href="download" download v-on:click="enable = false, content = true">Pobierz</a>
    </div>
    <p class="checkbox__error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enable: true,
      active: false,
      content: "",
    };
  },
  props: {
    number: String,
    download: String,
    text: String,
    error: String,
  },
  methods: {
    close() {
      if (this.content == "") {
        this.active = !this.active;
      }
    },
  },
  watch: {
    content(val) {
      this.$emit("return", val);
    },
  },
};
</script>
<style scoped lang="scss">
.checkbox {
  height: 0;
  width: 0;
  opacity: 0;
  &__row {
    display: flex;
    align-items: center;
  }
  &__download {
    margin-left: 1rem;
    color: #000;
  }
  &__disable {
  opacity: .5;
  pointer-events: none;
  }

  + label {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0.6em 0;
    align-items: center;
    cursor: pointer;
    color: #9e9e9e;
    transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1);

    > {
      //   ins {
      //     position: absolute;
      //     display: block;
      //     bottom: 0;
      //     left: 2em;
      //     height: 0;
      //     width: 100%;
      //     overflow: hidden;
      //     text-decoration: none;
      //     transition: height 300ms cubic-bezier(0.4, 0, 0.23, 1);

      //     // > i {
      //     //   position: absolute;
      //     //   bottom: 0;
      //     //   font-style: normal;
      //     //   color: #4fc3f7;
      //     // }
      //   }

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1em;
        width: 20px;
        height: 20px;
        background: transparent;
        border: 2px solid #9e9e9e;
        border-radius: 2px;
        cursor: pointer;
        transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
      }
    }

    &:hover {
      color: #000;
      + label {
        color: #000;
      }
    }
  }

  &:focus {
    // + label {
    //     color: #000;
    // }

    + label > span {
      //   background: rgba(255, 255, 255, 0.1);
    }
  }

  + label:hover > span {
    // background: rgba(255, 255, 255, 0.1);
  }

  &:checked + label > {
    ins {
      height: 100%;
    }

    span {
      border: 0.5em solid $red;
      background: $red;
      animation: shrink-bounce 200ms cubic-bezier(0.4, 0, 0.23, 1);

      //   &:before {
      //     content: "";
      //     position: absolute;
      //     top: 0.6em;
      //     left: 0.2em;
      //     border-right: 3px solid transparent;
      //     border-bottom: 3px solid transparent;
      //     transform: rotate(45deg);
      //     transform-origin: 0% 100%;
      //     animation: checkbox-check 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards;
      //   }
    }
  }
  &__error {
    color: $red;
  }
}

// input[type="checkbox"] {
//   height: 0;
//   width: 0;

//   + label {
//     position: relative;
//     display: flex;
//     align-items: center;
//     margin: 0.6em 0;
//     align-items: center;
//     cursor: pointer;
//     color: #9e9e9e;
//     transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1);

//     > {
//       //   ins {
//       //     position: absolute;
//       //     display: block;
//       //     bottom: 0;
//       //     left: 2em;
//       //     height: 0;
//       //     width: 100%;
//       //     overflow: hidden;
//       //     text-decoration: none;
//       //     transition: height 300ms cubic-bezier(0.4, 0, 0.23, 1);

//       //     // > i {
//       //     //   position: absolute;
//       //     //   bottom: 0;
//       //     //   font-style: normal;
//       //     //   color: #4fc3f7;
//       //     // }
//       //   }

//       span {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         margin-right: 1em;
//         width: 20px;
//         height: 20px;
//         background: transparent;
//         border: 2px solid #9e9e9e;
//         border-radius: 2px;
//         cursor: pointer;
//         transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
//       }
//     }

//     &:hover {
//       color: #000;
//       + label {
//         color: #000;
//       }
//     }
//   }

//   &:focus {
//     // + label {
//     //     color: #000;
//     // }

//     + label > span {
//       //   background: rgba(255, 255, 255, 0.1);
//     }
//   }

//   + label:hover > span {
//     // background: rgba(255, 255, 255, 0.1);
//   }

//   &:checked + label > {
//     ins {
//       height: 100%;
//     }

//     span {
//       border: 0.5em solid $red;
//       background: $red;
//       animation: shrink-bounce 200ms cubic-bezier(0.4, 0, 0.23, 1);

//       //   &:before {
//       //     content: "";
//       //     position: absolute;
//       //     top: 0.6em;
//       //     left: 0.2em;
//       //     border-right: 3px solid transparent;
//       //     border-bottom: 3px solid transparent;
//       //     transform: rotate(45deg);
//       //     transform-origin: 0% 100%;
//       //     animation: checkbox-check 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards;
//       //   }
//     }
//   }
// }

@keyframes shrink-bounce {
  0% {
    transform: scale(1);
  }

  33% {
    transform: scale(0.85);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes checkbox-check {
  0% {
    width: 0;
    height: 0;
    border-color: #212121;
    transform: translate3d(0, 0, 0) rotate(45deg);
  }

  33% {
    width: 0.2em;
    height: 0;
    transform: translate3d(0, 0, 0) rotate(45deg);
  }

  100% {
    width: 0.2em;
    height: 0.5em;
    border-color: #212121;
    transform: translate3d(0, -0.5em, 0) rotate(45deg);
  }
}
</style>
