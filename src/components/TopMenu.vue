<template>
  <div class="top-menu">
    <div class="minimap">
      <button class="minimap__button" @click="SET_IS_MAP_SHOWN(true)"></button>
    </div>
    <div class="early-response">
      <button @click="SET_IS_EARLY_RESPONSE(true)" class="early-response__button">Досрочный ответ!</button>
    </div> 
    <div class="hotline">
      <a href="https://t.me/anatolypow" class="hotline__link" target="_blank">ГОРЯЧАЯ ЛИНИЯ</a>
    </div>
    <div v-if="is_map_shown" @click.self="SET_IS_MAP_SHOWN(false)" class="map">
      <div class="map__img">
        <div :class="`pin_${currentLevel}`" class="pin"></div>
      </div>
      <button @click="SET_IS_MAP_SHOWN(false)" class="map__close">X</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: 'TopMenu',
  props: {
    currentLevel: {
      type: Number,
      required: true,
    }
  },
  computed: {
    ...mapState(['is_map_shown'])
  },
  methods: {
    ...mapActions(['SET_IS_MAP_SHOWN', 'SET_IS_EARLY_RESPONSE'])
  }
};
</script>

<style scoped lang="scss">
.top-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: white;
}

.minimap {
  &__button {
    display: block;
    width: 80px;
    height: 45px;
    background: url('@/assets/images/minimap.png') no-repeat;
    background-size: contain;
    box-shadow: 0 0 6px 2px #81c4d1 inset;
    border: 1px solid #2bc7e5;
  }
}

.early-response {
  &__button {
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
    background: #FFA12B;
    box-shadow: inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
    font-family: "Amatic SC", cursive;
    font-size: 20px;
    color: white;
  }
}

.hotline {
  padding: 5px;
  border: 1px solid #cd78f2;
  border-radius: 5px;

  &__link {
    text-shadow: 2px 2px 0 #cd78f2;
    color: black;
    text-decoration: underline;
  }
}

.map {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 3;
  opacity: .9;
  background: rgba(0,0,0, .9);

  &__img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 320px;
    height: 570px;
    background-image: url(@/assets/images/map.png);
    background-size: contain;
    z-index: 5;
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    display: block;
    font-size: 30px;
    border: 2px solid white;
    padding: 3px 10px;
    color: white;
  }

  .pin {
    position: absolute;
    width: 12px;
    height: 12px;
    background: #0fb80c;
    opacity: .5;
    border-radius: 50%;

    &_1 {
      top: 160px;
      right: 55px;
    }

    &_2 {
      top: 161px;
      right: 79px;
    }

    &_3 {
      top: 158px;
      right: 135px
    }

    &_4 {
      top: 159px;
      right: 105px;
    }

    &_5 {
      top: 189px;
      right: 103px;
    }

    &_6 {
      top: 188px;
      right: 82px;
    }

    &_7 {
      top: 200px;
      right: 90px;
    }

    &_8 {
      top: 248px;
      right: 113px
    }

    &_9 {
      top: 268px;
      right: 84px;
    }

    &_10 {
      top: 167px;
      right: 57px;
    }
  }
}
</style>
