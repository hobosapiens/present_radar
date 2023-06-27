<template>
  <div class="final">
    <img src="@/assets/images/gif/final.gif" class="final__img">
    <span class="final__text">
      Поздравляю! Ты прошла игру и стала магистром!<br />
      Зачем тебе черные ящики когда ты приобрела такое бесценное знание!<br />
      Думаю тебе не помешает осмотреть велосиед перед возращением домой!<br />
      Ты молодец если это читаешь, а я молодец если квест смог быть пройденным.<br />
      С днем рождения и я тебя люблю ❤️
    </span>
  </div>
</template>

<script>
export default {
  name: 'Final',
  components: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.final {
  display: flex;
  flex-direction: column;
  padding: 20px;

  &__img {
    width: 100%;
    margin-bottom: 20px;
    border: 2px solid white !important;
  }
}
</style>
