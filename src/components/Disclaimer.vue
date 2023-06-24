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
        <ul class="disclaimer__list">
          <span>Прежде чем отправиться в путь:</span>
          <li>- подкрепись</li>
          <li>- сходи в туалет</li>
          <li>- заряди свой мобильник!</li>
        </ul>
        <p class="disclaimer__text">
          И помни! Тебе никто не поможет!<br />
          Но в крайнем случае обратись в службу поддержки!
        </p>
        <p class="disclaimer__text">Запомни... Север - это север, <br />а свовы - то чем кажутся! Ауф!<br />
          Жми на кнопку, когда будешь готова!
        </p>
      </div>
    </template>  
    <Button @click="handleClick">{{ buttonText }}</Button>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Button from '@/components/Button.vue';
import { mapState, mapActions } from 'vuex';
import { setLocalStorage } from '@/utils/storage';

export default {
  name: 'Compass',
  components: {
    Banner,
    Button
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
</style>
