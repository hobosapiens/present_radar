<template>
  <div class="loader">
    <img class="loader__img" src="@/assets/images/gif/owl-zoom.gif">
    <span class="loader__text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    text: {
      type: String,
      default: 'Загрузка...'
    }
  }
};
</script>

<style scoped lang="scss">
.loader {
  position: relative;
  height: 200px;
  overflow: hidden;
  border-bottom: 2px solid white;

  &__img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    animation: zoom 2s infinite;
  }

  &__text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 64px;
    line-height: 64px;
  }
}

@keyframes zoom {
  0% {
    transform: scale(1, 2);
  }
  50% {
    transform: scale(1.5, 1.5);
  }
  100% {
    transform: scale(1, 2);
  }
}
</style>
