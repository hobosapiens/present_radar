<template>
  <div class="banner">
    <div class="time">
      <img src="@/assets/images/banner/letter_V.png" :class="{'time__v_wobbling': isLettersWobbling}" class="time__v">
      <img src="@/assets/images/banner/letter_R.png" :class="{'time__r_wobbling': isLettersWobbling}" class="time__r">
      <img src="@/assets/images/banner/letter_E.png" :class="{'time__e_wobbling': isLettersWobbling}" class="time__e">
      <img src="@/assets/images/banner/letter_M.png" :class="{'time__m_wobbling': isLettersWobbling}" class="time__m">
      <img src="@/assets/images/banner/letter_YA.png" :class="{'time__ya_wobbling': isLettersWobbling}" class="time__ya">
      <img src="@/assets/images/banner/sword.png" :class="{'time__sword_in': isSwordIn}" class="time__sword">
    </div>
    <img src="@/assets/images/banner/adventures.png" :class="{'banner__adventures_appeared': isAdventuresAppear}" class="banner__adventures">
    <img src="@/assets/images/banner/with_b.png" :class="{'banner__with-b_appeared': isWithBAppear}" class="banner__with-b">
    <img src="@/assets/images/banner/face.png" :class="{'banner__face_appeared': isFaceAppear}" class="banner__face">
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data(){
    return {
      isLettersWobbling: true,
      isSwordIn: false,
      isAdventuresAppear: false,
      isWithBAppear: false,
      isFaceAppear: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isSwordIn = true;
    }, 1500);
    setTimeout(() => {
      this.isLettersWobbling = false;
    }, 2200);
    setTimeout(() => {
      this.isAdventuresAppear = true;
    }, 2600);
    setTimeout(() => {
      this.isWithBAppear = true;
    }, 3000);
    setTimeout(() => {
      this.isFaceAppear = true;
    }, 3500);
  }
};
</script>

<style scoped lang="scss">
.banner {
  display: flex;
  flex-direction: column;
  position: relative;

  &__adventures {
    align-self: flex-end;
    visibility: hidden;
    transform: translateX(100px);
    transition: transform .5s ease;
    &_appeared {
      transform: translateX(0);
      visibility: visible;
    }
  }
  &__with-b {
    align-self: flex-end;
    visibility: hidden;
    transform: translateX(-300px);
    transition: transform .3s ease;
    &_appeared {
      transform: translateX(0);
      visibility: visible;
    }
  }
  &__face {
    visibility: hidden;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 4;
    &_appeared {
      visibility: visible;
      -webkit-animation: rotate-scale-up 0.65s linear both;
      animation: rotate-scale-up 0.65s linear both;
    }
  }
}
.time {
  display: flex;
  position: relative;
  align-items: center;

  &__v {
    margin-left: auto;
    width: 51px;
    z-index: 3;
    &_wobbling {
      animation: wobble-1 .4s ease infinite;
    }
  }
  &__r {
    width: 36px;
    z-index: 1;
    &_wobbling {
      animation: wobble-2 .4s ease infinite;
    }
  }
  &__e {
    width: 44px;
    margin-right: 2px;
    z-index: 3;
    &_wobbling {
      animation: wobble-1 .4s ease infinite;
    }
  }
  &__m {
    width: 65px;
    z-index: 1;
    &_wobbling {
      animation: wobble-2 .4s ease infinite;
    }
  }
  &__ya {
    width: 52px;
    z-index: 3;
    &_wobbling {
      animation: wobble-1 .4s ease infinite;
    }
  }
  &__sword {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-400px, -50%);
    transition: transform 1s ease;
    z-index: 2;
    &_in {
      transform: translate(0, -50%);
    }
  }
}

@keyframes wobble-1 {
    0%, 100% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }

    15% {
        -webkit-transform: translateX(-5px) rotate(-8deg);
        transform: translateX(-5px) rotate(-8deg);
    }

    30% {
        -webkit-transform: translateX(calc(5px / 2)) rotate(8deg);
        transform: translateX(calc(5px / 2)) rotate(8deg);
    }

    45% {
        -webkit-transform: translateX(calc(-5px / 2)) rotate(calc(-8deg / 1.8));
        transform: translateX(calc(-5px / 2)) rotate(calc(-8deg / 1.8));
    }

    60% {
        -webkit-transform: translateX(calc(5px / 3.3)) rotate(calc(8deg / 3));
        transform: translateX(calc(5px / 3.3)) rotate(calc(8deg / 3));
    }

    75% {
        -webkit-transform: translateX(calc(-5px / 5.5)) rotate(calc(-8deg / 5));
        transform: translateX(calc(-5px / 5.5)) rotate(calc(-8deg / 5));
    }
}

@keyframes wobble-2 {
    0%, 100% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }

    15% {
        -webkit-transform: translateX(-8px) rotate(-10deg);
        transform: translateX(-8px) rotate(-10deg);
    }

    30% {
        -webkit-transform: translateX(calc(8px / 2)) rotate(10deg);
        transform: translateX(calc(8px / 2)) rotate(10deg);
    }

    45% {
        -webkit-transform: translateX(calc(-8px / 2)) rotate(calc(-10deg / 1.8));
        transform: translateX(calc(-8px / 2)) rotate(calc(-10deg / 1.8));
    }

    60% {
        -webkit-transform: translateX(calc(8px / 3.3)) rotate(calc(10deg / 3));
        transform: translateX(calc(8px / 3.3)) rotate(calc(10deg / 3));
    }

    75% {
        -webkit-transform: translateX(calc(-8px / 5.5)) rotate(calc(-10deg / 5));
        transform: translateX(calc(-8px / 5.5)) rotate(calc(-10deg / 5));
    }
}

 @-webkit-keyframes rotate-scale-up {
  0% {
    -webkit-transform: scale(1) rotateZ(0);
            transform: scale(1) rotateZ(0);
  }
  50% {
    -webkit-transform: scale(2) rotateZ(180deg);
            transform: scale(2) rotateZ(180deg);
  }
  100% {
    -webkit-transform: scale(1) rotateZ(360deg);
            transform: scale(1) rotateZ(360deg);
  }
}
@keyframes rotate-scale-up {
  0% {
    -webkit-transform: scale(1) rotateZ(0);
            transform: scale(1) rotateZ(0);
  }
  50% {
    -webkit-transform: scale(2) rotateZ(180deg);
            transform: scale(2) rotateZ(180deg);
  }
  100% {
    -webkit-transform: scale(1) rotateZ(360deg);
            transform: scale(1) rotateZ(360deg);
  }
}
</style>
