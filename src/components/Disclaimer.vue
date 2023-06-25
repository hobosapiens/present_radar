<template>
  <div class="disclaimer">
    <template v-if="first_start">
      <div class="first-start">

        <img class="first-start__img" src="@/assets/images/gif/first-start.gif">
        <p class="first-start__text">Разреши отслеживание геолокации! Это важно!</p>
      </div>
    </template>
    <template v-else>
      <Banner />
      <div class="disclaimer__text__wrapper">
        <p class="disclaimer__text">
          <span>Ксюша, тебя ждут захватывающие приключения!</span><br />
          Опасности будут подстерегать тебя на каждом шагу!
        </p>
        <p class="disclaimer__text">
          Прежде чем отправиться в путь:<br />
          подкрепись, сходи в туалет и заряди свой телефон!
        </p>
        <p class="disclaimer__text">
          И помни, тебе никто не поможет!<br />
          Но в крайнем случае обратись по <a href="https://t.me/anatolypow" class="hotline">ГОРЯЧЕЙ ЛИНИИ</a>!
        </p>
        <p class="disclaimer__text">Запомни... Север - это север, <br />а совы - то чем кажутся! Ауф!<br />
          Черный ящик с собой не бери!<br /> Жми на кнопку, когда будешь готова!
        </p>
      </div>
    </template>  
    <BigButton @click="handleClick">{{ buttonText }}</BigButton>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import BigButton from '@/components/BigButton.vue';
import { mapState, mapActions } from 'vuex';
import { setLocalStorage } from '@/utils/storage';

export default {
  name: 'Compass',
  components: {
    Banner,
    BigButton
  },
  computed: {
    ...mapState(['first_start']),
    buttonText() {
      return this.first_start ? 'ВПЕРЕД' : 'ВПЕРЕД!!!'
    }
  },
  methods: {
    ...mapActions(['SET_FIRST_START']),
    handleClick() {
      if(this.first_start) {
        setLocalStorage('first_start', false)
        this.SET_FIRST_START(false);
      } else {
        this.$emit('click');
      }
    }
  }
}
</script>

<style scoped lang="scss">
.first-start {
  flex-grow: 1;
  margin-bottom: auto;

  &__text {
    margin-top: 20px;
    font-size: 44px;
  }
}
.disclaimer {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  height: 100%;
  padding: 20px;

  &__text {
    &__wrapper {
      margin: 20px 0;
    }
  }

  &__img {
    max-width: 100%;
  }
}

.hotline {
  text-shadow: 2px 2px 0 #B70FFF;
  color: black;
}
</style>
