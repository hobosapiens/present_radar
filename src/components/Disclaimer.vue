<template>
  <div class="disclaimer">
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
    <Button @click="$emit('click')">ПОЕХАЛИ!!!</Button>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Compass',
  components: {
    Banner,
    Button
  }
}
</script>

<style scoped lang="scss">
.disclaimer {
  display: flex;
  flex-direction: column;
  align-content: center;
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
