<template>
    <div class="abacus" :class="{ abacusDisabled : this.$store.state.disableAbacus }">
      <div class="col" v-for="(val, idx) in this.$store.state.abacusArr" :key="idx"
      :class="`col-${val}`">
        <div class="deck deck-upper">
          <div class="bead" v-for="upperBead in 2" :key="upperBead"></div>
        </div>
        <div class="deck deck-lower">
          <div class="bead" v-for="lowerBead in 5" :key="lowerBead"></div>
        </div>
      </div>
    </div>
</template>

<script>
// import { store } from '@/store/store'

export default {
  name: 'TheAbacus',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

@use "sass:math";

$abacus-frame-color: saddlebrown;
$abacus-bead-color: saddlebrown;
$abacus-bg-color: lightyellow;
$abacus-dark-bg-color: goldenrod;

$bead-height: 15px;
$bead-gap: 20px;

$upper-deck: "upper";
$lower-deck: "lower";

@mixin activate-deck-beads($n, $deck){
    @if ($n > 0) {
        @for $i from 1 through $n {
            @if $deck == $upper-deck {
                .deck-upper > .bead:nth-child(#{3-$i}) {
                    transform: translateY($bead-gap);
                }
            } @else if $deck == $lower-deck {
                .deck-lower >.bead:nth-child(#{$i}) {
                    transform: translateY(0);
                }
            }
        }
    }
}

@mixin generate-col-beads-classes(){
    @for $n from 1 through 9 {
        .col-#{$n} {
            $upper-value: math.floor(math.div($n, 5));
            $lower-value: $n % 5;
            @include activate-deck-beads($upper-value, $upper-deck);
            @include activate-deck-beads($lower-value, $lower-deck);
        }
    }
}

.abacus {
  display: grid;
  grid-template-columns: repeat(9,1fr);
  grid-auto-rows: minmax(50px,auto);
  font-size: 40px;
  border: 4px solid $abacus-frame-color;
  border-radius: 3px;
  box-shadow: 1px 2px 15px 2px $abacus-dark-bg-color;

  @include generate-col-beads-classes();

  .deck {
    padding: 1px 4px;
    border: 4px solid $abacus-frame-color;
    // background-color: $abacus-bg-color;
    background-image: linear-gradient(
        to right, 
        $abacus-dark-bg-color 0,
        $abacus-bg-color 25%, 
        $abacus-bg-color 42%, 
        gray 42%, 
        dimgray 58%, 
        $abacus-dark-bg-color 58%,
        $abacus-bg-color 100%
    );
    &-upper {
      height: $bead-height * 2 + $bead-gap;
    }
    &-lower {
      height: $bead-height * 5 + $bead-gap;
      .bead {
        transform: translateY($bead-gap);
      }
    }
  }
  
  .bead {
    background-color: $abacus-bead-color;
    border-radius: $bead-height;
    height: $bead-height;
    box-shadow: inset -3px 0 5px 3px #333;
  }
}

.abacusDisabled {
    opacity: 0.5;
}
</style>
