<template>
  <transition name="slide">
    <div class="subpage">
      <PageText>
        <template v-slot:title>{{ $route.meta.title }}</template>
        <template v-slot:subtitle v-if="$route.meta.subtitle">{{
          $route.meta.subtitle
        }}</template>
        <template v-slot:text>
          <div class="tabs">
            <div class="tab">
              <input type="radio" id="rd1" name="rd" />
              <label class="tab-label" for="rd1">
                <p>Jak wyglądają warunki sanitarne?</p>
              </label>
              <div class="tab-content">
                Na miejscu znajduje się budynek, w którym są toalety, prysznice
                oraz umywalki. Oprócz tego na czas Paradiso w okolicach
                zapewnione są dodatkowe prysznice oraz przenośne umywalki i
                toalety.
              </div>
            </div>

            <div class="tab">
              <input type="radio" id="rd2" name="rd" />
              <label class="tab-label" for="rd2">
                <p>Czy na miejscu jest pomoc medyczna?</p>
              </label>
              <div class="tab-content">
                Tak. Przez cały czas trwania Paradiso na miejscu jest
                pielęgniarka oraz odpowiednie służby, które są w stanie udzielić
                Ci pomocy medycznej.
              </div>
            </div>

            <div class="tab">
              <input type="radio" id="rd3" name="rd" />
              <label class="tab-label" for="rd3">
                <p>Co to jest opaska uczestnika?</p>
              </label>
              <div class="tab-content">
                Jest to znak rozpoznawczy uczestnika. Taką opaskę rozdajemy
                uczestnikom zarejestrowanym, w dniu rozpoczęcia Paradiso.
                Uprawnia ona zarejestrowanych uczestników wydarzenia do
                odbierania posiłków i wchodzenia na pole namiotowe.
              </div>
            </div>

            <!-- <div class="tab">
              <input type="radio" id="rd4" name="rd" />
              <label class="tab-label" for="rd4">
                <p>
                  Czy jest możliwość otrzymania posiłków bezglutenowych i bez
                  laktozy?
                </p>
              </label>
              <div class="tab-content">
                Tak. Prosimy o zaznaczenie takiej opcji w formularzu
                zgłoszeniowym podczas rejestracji.
              </div>
            </div> -->

            <div class="tab">
              <input type="radio" id="rd5" name="rd" />
              <label class="tab-label" for="rd5">
                <p>Czy trzeba uczestniczyć we wszystkich punktach programu?</p>
              </label>
              <div class="tab-content">
                Paradiso to rekolekcje, każdy punkt programu jest przygotowywany
                z myślą o uczestnikach, dbając o ich rozwój duchowy oraz
                poszerzenie ich zainteresowań. Dlatego gorąco zachęcamy każdego
                uczestnika do uczestniczenia we wszystkich punktach programu.
              </div>
            </div>

            <!-- <div class="tab">
              <input type="radio" id="rd6" name="rd" />
              <label class="tab-label" for="rd6">
                <p>
                  Czy oprócz posiłków będzie można kupić sobie coś do jedzenia i
                  picia?
                </p>
              </label>
              <div class="tab-content">
                Na miejscu, w czasie przerw między punktami programu funkcjonuje
                kawiarenka. Można tam zakupić słodkości i napoje, ale również
                usiąść i miło spędzić czas ze znajomymi.
              </div>
            </div> -->

            <!-- <div class="tab">
              <input type="radio" id="rd7" name="rd" />
              <label class="tab-label" for="rd7">
                <p>
                  Czy mogę przyjechać, jeśli w mojej parafii ksiądz nie
                  organizuje grupy?
                </p>
              </label>
              <div class="tab-content">
                Oczywiście, czekamy na Ciebie z otwartymi ramionami. Przyjedź
                koniecznie!!! Wystarczy, że wypełnisz formularz i pojawisz się w
                Gostyniu w dniu rozpoczęcia.
              </div>
            </div> -->

            <div class="tab">
              <input type="radio" id="rd8" name="rd" />
              <label class="tab-label" for="rd8">
                <p>Czy mógłbym jakoś pomóc?</p>
              </label>
              <div class="tab-content">
                JASNE - każde ręce się przydadzą. Jeśli chcesz pomóc jeszcze
                przed spotkaniem, to prześlemy Ci plakaty, ulotki i inne
                materiały promocyjne, żebyś mógł promować Paradiso w swojej
                okolicy. Jeśli natomiast chcesz pomóc w trakcie trwania
                rekolekcji, to powiemy ci w jaką pracę możesz się zaangażować
                jako wolontariusz. Wystarczy, że napiszesz do nas wiadomość
                mailową.
              </div>
            </div>

            <div class="tab">
              <input type="radio" id="rd9" name="rd" />
              <label class="tab-label" for="rd9">
                <p>W jakim wieku są uczestnicy Paradiso?</p>
              </label>
              <div class="tab-content">
                Paradiso są to rekolekcje dla osób przede wszystkim w wieku od
                15 od 30 lat, ale każdy jest mile widziany.
              </div>
            </div>

            <!-- <div class="tab">
              <input type="radio" id="rd10" name="rd" />
              <label class="tab-label" for="rd10">
                <p>Czy można się zapisać tylko na jeden dzień?</p>
              </label>
              <div class="tab-content">
                Niestety nie. Zarówno warsztaty, jak i konferencje stanowią
                jedną całość, a ze względów organizacyjnych nie jesteśmy w
                stanie podzielić zgłoszeń na poszczególne dni.
              </div>
            </div> -->
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
/* Accordion styles */
$midnight: #2c3e50;
$clouds: #ecf0f1;
.tabs {
  // border-radius: 8px;
  overflow: hidden;
  // box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
}
.tab {
  width: 100%;
  color: white;
  overflow: hidden;
  input {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  &-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    /* background: #2c3e50; */
    font-weight: bold;
    cursor: pointer;
    color: #000;
    border-bottom: 1px solid $red;
    p {
      transition: all 0.35s;
    }
    /* Icon */
    &:hover {
      p {
        transform: translateX(2%);
      }
      // background: darken($midnight, 10%);
    }
    &::after {
      content: "\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all 0.35s;
    }
  }
  &-content {
    max-height: 0;
    padding: 0 1em;
    color: $midnight;
    background: white;
    transition: all 0.35s;
  }
  &-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: $midnight;
    cursor: pointer;
    &:hover {
      background: darken($midnight, 10%);
    }
  }
}

// :checked
input:checked {
  + .tab-label {
    // background: darken($midnight, 10%);
    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
}
</style>
