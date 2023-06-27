<template>
  <div :class="{ 'rotated': is_map_shown }" class="compass__wrapper">
    <div :class="{ 'rotated': is_map_shown }" class="compass__container">
      <div class="compass__north">
        <span>N</span>
      </div>
      <div :class="{ 'pulse': showPulsation }" class="compass">
        <div class="compass-inner">
          <div :style="`transform: rotate(${bearing}deg)`" class="main-arrow">
            <div class="arrow-up"></div>
            <div class="arrow-down"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Compass',
  props: {
    distance: {
      type: Number,
      required: true,
    },
    bearing: {
      type: String,
      required: true,
    }
  },
  computed: {
    ...mapState(['is_map_shown']),
    showPulsation() {
      return this.distance < 30;
    }
  }
}
</script>

<style scoped lang="scss">
.compass {
  width: 400px;
  height: 400px;
  background-color: #F3F3F3;
  border-radius: 100%;
  background-image: -webkit-linear-gradient(top, #F7F7F7, #ECECEC);
  position: relative;
  margin: 0 auto;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 50%;
    box-shadow: 0 0 3px 1px #000000;
  }

  &__wrapper {
    &.rotated {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }


  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 30px;

    &.rotated {
      transform: rotate(90deg);
    }
  }

  &__north {
    margin-bottom: 20px;

    span {
      font-size: 64px;
    }
  }
}

.compass-inner {
  width: 340px;
  height: 340px;
  box-sizing: content-box;
  background-color: #3D3D3D;
  border-radius: 100%;
  position: relative;
  left: 27.5px;
  top: 27.5px;
  border: 3px solid #C5C5C5;
  box-shadow: 0 0 3px 3px #1e1e1eba inset;
}

.main-arrow {
  height: 100%;
  width: 30px;
  left: 155px;
  position: relative;
  padding-top: 5px;
  box-sizing: border-box;
}

.arrow-up {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 165px solid #EF5052;
  position: relative;
}

.arrow-down {
  -webkit-transform: rotate(180deg);
  width: 0;
  transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 165px solid #F3F3F3;
  position: relative;
}

@media (max-width: 600px) {
  .compass {
    width: 200px;
    height: 200px;
    text-align: center;
  }

  .compass-inner {
    width: 170px;
    height: 170px;
    left: 13px;
    top: 13px;
  }

  .main-arrow {
    width: 30px;
    left: 78px;
    width: 15px;
    padding-top: 3px;
  }

  .arrow-up {
    border-bottom: 82.5px solid #EF5052;
    border-left: 7.5px solid transparent;
    border-right: 7.5px solid transparent;
  }

  .arrow-down {
    border-bottom: 82.5px solid #F3F3F3;
    border-left: 7.5px solid transparent;
    border-right: 7.5px solid transparent;
  }
}

.pulse {
  animation: pulse 2s infinite;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(44, 204, 121, 0.4);
  }

  70% {
    -webkit-box-shadow: 0 0 0 30px rgba(44, 204, 121, 0);
  }

  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(44, 204, 121, 0);
  }
}

@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgb(20 141 183 / 67%);
    box-shadow: 0 0 0 0 rgb(20 141 183 / 67%);
  }

  70% {
    -moz-box-shadow: 0 0 0 30px rgba(44, 204, 121, 0);
    box-shadow: 0 0 0 30px rgba(44, 204, 121, 0);
  }

  100% {
    -moz-box-shadow: 0 0 0 0 rgba(44, 204, 121, 0);
    box-shadow: 0 0 0 0 rgba(44, 204, 121, 0);
  }
}
</style>
