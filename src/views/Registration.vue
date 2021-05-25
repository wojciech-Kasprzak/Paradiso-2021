<template>
  <transition name="slide">
    <div class="subpage">
      <PageText>
        <template v-slot:title>{{ $route.meta.title }}</template>
        <template v-slot:subtitle v-if="$route.meta.subtitle">{{ $route.meta.subtitle }}</template>
        <template v-slot:text>
          <p class="form__success" v-if="success">Dziękujemy za rejestrację<br />Do zobaczenia!</p>
          <p class="form__success" v-if="limitPeople">
            Przepraszamy! <br />
            Limit osób został osiągnięty
          </p>
          <div class="form" v-if="success == false">
            <div v-if="errors.length > 0">
              <h2 class="form__header">Błędy podczas wypełnienia formularza</h2>
              <p class="form__error">{{ errors.join(", ") }}</p>
            </div>
            <h2 class="form__header">Dane personalne</h2>
            <div class="form__row">
              <Input
                class="form__row--col-2"
                placeholder="Imię"
                :value="inputs.name"
                :error="validation.firstError('inputs.name')"
                @return="inputs.name = $event"
              />
              <Input
                class="form__row--col-2"
                placeholder="Nazwisko"
                :value="inputs.surname"
                :error="validation.firstError('inputs.surname')"
                @return="inputs.surname = $event"
              />
              <Input
                class="form__row--col-2"
                placeholder="PESEL"
                :value="inputs.pesel"
                :error="validation.firstError('inputs.pesel')"
                @return="(inputs.pesel = $event), getInfoFromPesel($event)"
              />
            </div>
            <h2 class="form__header">Dane kontaktowe</h2>
            <div class="form__row">
              <Input
                class="form__row--col-2"
                placeholder="E-mail"
                :value="inputs.mail"
                :error="validation.firstError('inputs.mail')"
                @return="inputs.mail = $event"
              />
              <Input
                class="form__row--col-2"
                placeholder="Telefon"
                :value="inputs.phone"
                :error="validation.firstError('inputs.phone')"
                @return="inputs.phone = $event"
              />
            </div>
            <h2 class="form__header">Przydatne informacje</h2>
            <div class="form__row">
              <Select
                class="form__row--col-2"
                v-if="getInfoAboutEvent && getInfoAboutEvent.diets"
                label="Diety"
                :options="getInfoAboutEvent.diets"
                default=""
                :getSelected="inputs.diet_id"
                :multiple="false"
                @input="inputs.diet_id = $event"
              >
                <template v-slot:display="{selectedElementstoDisplay}">
                  <div class="select__display" v-if="Array.isArray(selectedElementstoDisplay)">
                    <div v-for="item in selectedElementstoDisplay" :key="item.id">
                      {{ getInfoAboutEvent.diets.find((e) => e.id == item).value }},
                    </div>
                  </div>
                  <div class="select__display" v-else></div>
                </template>
                <template v-slot:option="{choose, activateSelected}">
                  <div
                    class="select__item"
                    :class="{
                      'select__item--active': activateSelected(parseInt(option.id)),
                    }"
                    v-for="(option, i) of getInfoAboutEvent.diets"
                    :key="i"
                  >
                    <div @click="choose(option.id)" v-if="option">
                      {{ option.value }}
                    </div>
                  </div>
                </template>
              </Select>
            </div>

            <div v-if="getInfoAboutEvent != null && person.age != null && person.age < getInfoAboutEvent.parent_permit_age">
              <h2 class="form__header">Informacje dotyczące opiekuna</h2>
              <div class="form__row">
                <Input
                  class="form__row--col-2"
                  placeholder="Telefon opiekuna prawnego"
                  :value="guardian.guardian_phone"
                  :error="validation.firstError('guardian.guardian_phone')"
                  @return="guardian.guardian_phone = $event"
                />
                <Input
                  class="form__row--col-2"
                  placeholder="Imię i nazwisko opiekuna prawnego"
                  :value="guardian.guardian_name"
                  :error="validation.firstError('guardian.guardian_name')"
                  @return="guardian.guardian_name = $event"
                />
                <Input
                  v-if="person.age < getInfoAboutEvent.guardian_presence_age"
                  class="form__row--col-2"
                  placeholder="Numer ID opiekuna"
                  subtext="ID opiekuna uzyskasz od zarejestrowanej osoby pełnoletniej"
                  :value="guardian.guardian_id"
                  :error="validation.firstError('guardian.guardian_id')"
                  @return="guardian.guardian_id = $event"
                />
              </div>
            </div>

            <h2 class="form__header">Pobierz dokumenty by akceptować zgody</h2>
            <Checkbox
              number="3"
              text="Ogólne warunki uczestnictwa"
              :error="validation.firstError('accepts.terms')"
              download="/pdf/Ogolne-warunki-uczestnictwa.pdf"
              @return="accepts.terms = $event"
            />
            <Checkbox
              number="3"
              text="Akceptuję regulamin wydarzenia"
              :error="validation.firstError('accepts.statute')"
              download="/pdf/regulamin.pdf"
              @return="accepts.statute = $event"
            />
            <!-- v-if="errors.length == 0" -->
            <div class="form__btn">
              <p>Koszt uczestnictwa: 30 PLN</p>
              <Btn v-on:click.native="submit()" text="Zarejestruj się" />
            </div>
          </div>

          <Loading v-if="loadingFlag" />
        </template>
      </PageText>
    </div>
  </transition>
</template>

<script>
// import axios from "axios";
import {mapGetters, mapActions} from "vuex";
import {Validator} from "simple-vue-validator";

import Input from "@/components/form/Input.vue";
import Select from "@/components/form/Select.vue";
import Checkbox from "@/components/form/Checkbox.vue";
import Loading from "@/components/elements/Loading.vue";

export default {
  name: "Registration",
  components: {
    Input,
    Select,
    Checkbox,
    Loading,
  },
  computed: {
    ...mapGetters({
      getInfoAboutEvent: "Registration/getInfoAboutEvent",
      getSafeFormResponse: "Registration/getSafeFormResponse",
    }),
  },
  data() {
    return {
      // getInfoAboutEvent: null,
      loadingFlag: false,
      success: false,
      limitPeople: false,
      message: "",
      errors: [],
      person: {
        age: null,
      },
      inputs: {
        name: "",
        surname: "",
        pesel: "",
        mail: "",
        phone: "",
        diet_id: [],
      },
      accepts: {
        terms: "",
        statute: "",
      },
      guardian: {
        guardian_phone: "",
        guardian_name: "",
        guardian_id: "",
      },
    };
  },
  methods: {
    ...mapActions({
      fetchInfoAboutEvent: "Registration/fetchInfoAboutEvent",
      saveForm: "Registration/saveForm",
    }),

    getInfoFromPesel(pesel) {
      if (pesel.length == 11) {
        let year = pesel.substr(0, 2);
        let month = pesel.substr(2, 2);
        let day = pesel.substr(4, 2);

        let age = this.getAge(this.getDateOfBirth(day, month, year));
        this.person.age = age;
        if (age < this.getInfoAboutEvent.age_limit) {
          this.errors.push(
            `Paradiso jest od ${this.getInfoAboutEvent.age_limit} roku życia, jeżeli chiał/a byś dołaczyć wyśli mail na adres info@paradiso.org.pl`
          );
        } else {
          this.errors = [];
        }
      }
    },

    getAge(dateOfBirth) {
      var eventDate = new Date(this.getInfoAboutEvent.event_date);
      dateOfBirth = new Date(dateOfBirth);
      var age = eventDate.getFullYear() - dateOfBirth.getFullYear();
      var m = eventDate.getMonth() - dateOfBirth.getMonth();
      if (m < 0 || (m === 0 && eventDate.getDate() < dateOfBirth.getDate())) {
        age--;
      }
      return age;
    },

    getDateOfBirth(day, month, year) {
      let arr = [
        {century: 0, yearsPrefix: 19},
        {century: 20, yearsPrefix: 20},
        {century: 40, yearsPrefix: 21},
        {century: 60, yearsPrefix: 22},
        {century: 80, yearsPrefix: 18},
      ];
      let flag = true;
      arr.forEach((elem) => {
        if (flag) {
          let tmp = month - elem.century;
          if (tmp >= 1 && tmp <= 12) {
            month = tmp;
            year = `${elem.yearsPrefix}${year}`;
            flag = false;
          }
        }
      });
      return `${year}-${month}-${day}`;
    },
    submit() {
      this.$validate().then(async (success) => {
        if (success) {
          this.loadingFlag = true;
          const response = await this.saveForm({...this.inputs, ...this.guardian, ...this.person});
          if (response.data.errors) {
            this.errors = response.data.errors;
            this.loadingFlag = false;
          }
          if (response.data.success) {
            this.loadingFlag = false;
            this.success = true;
          }
        }
      });
    },
  },
  watch: {
    inputs: {
      deep: true,
      handler() {
        this.message = "";
      },
    },
  },
  mounted() {
    this.fetchInfoAboutEvent();
  },
  validators: {
    "inputs.name": function (value) {
      return Validator.value(value).required("Pole wymagane").minLength(3, "Wprowadź minimum 3 znaki");
    },
    "inputs.surname": function (value) {
      return Validator.value(value).required("Pole wymagane").minLength(3, "Wprowadź minimum 3 znaki");
    },
    "inputs.pesel": function (value) {
      return Validator.value(value)
        .required("Pole wymagane")
        .digit("Wprawadź tylko cyfry")
        .length(11, "PESEL musi mieć 11 znaków");
    },
    "inputs.mail": function (value) {
      return Validator.value(value).required("Pole wymagane").email("Wprowadź prawidłowy adres E-mail");
    },
    "inputs.phone": function (value) {
      return Validator.value(value)
        .required("Pole wymagane")
        .digit("Wprawadź tylko cyfry")
        .length(9, "Numer musi mieć 9 znaków");
    },
    "guardian.guardian_phone": function (value) {
      if (this.person.age < this.getInfoAboutEvent.parent_permit_age) {
        return Validator.value(value)
          .required("Pole wymagane")
          .digit("Wprawadź tylko cyfry")
          .length(9, "Numer musi mieć 9 znaków");
      }
    },
    "guardian.guardian_name": function (value) {
      if (this.person.age < this.getInfoAboutEvent.parent_permit_age) {
        return Validator.value(value).required("Pole wymagane").minLength(3, "Wprowadź minimum 3 znaki");
      }
    },
    "guardian.guardian_id": function (value) {
      if (this.person.age < this.getInfoAboutEvent.guardian_presence_age) {
        return Validator.value(value).required("Pole wymagane").digit("Wprawadź tylko cyfry");
      }
    },
    "accepts.terms": function (value) {
      return Validator.value(value).required("Pole wymagane");
    },
    "accepts.statute": function (value) {
      return Validator.value(value).required("Pole wymagane");
    },
  },
};
</script>
<style lang="scss" scoped>
.form {
  &__row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    &--col-2 {
      width: 100%;
      @media (min-width: 900px) {
        width: 48%;
      }
    }
  }
  &__header {
    text-transform: uppercase;
    margin-bottom: 1rem;
    &--red {
      color: $red;
    }
  }
  &__item {
    position: relative;
  }
  &__btn {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
  &__success {
    font-size: 2rem;
    line-height: 2.5rem;
  }
  &__error {
    color: $red;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
}
</style>
