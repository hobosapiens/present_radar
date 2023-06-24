<template>
  <div class="borsh">
    <img class="borsh__img" src="@/assets/images/borshevskiy.png">
    <img class="borsh__mouth" src="@/assets/images/gif/mouth.gif">
    <span class="borsh__text">
      {{ text }}
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Borsh',
  props: {
    text: {
      type: String,
      default: 'Загрузка...'
    }
  }
};
</script>

<style scoped lang="scss">
.borsh {
  display: flex;
  justify-content: flex-start;
  position: relative;
  margin-top: auto;

  &__img {
    position: absolute;
    right: -40px;
    top: 0;
    height: 245px;
    z-index: 1;
  }

  &__mouth {
    position: absolute;
    right: 48px;
    top: 82px;
    width: 42px;
    z-index: 2;
    transform: rotate(-3deg);
    filter: grayscale(0.2) sepia(0.1);
  }

  &__text {
    position: relative;
    width: 60%;
    min-height: 245px;
    background: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 20px;
    z-index: 3;
    color: black;
    text-shadow: 1px 1px 2px #81C4D1;

    &::after {
      content: " ";
      left: calc(100% - 1px);
      top: 80px;
      border: solid transparent;
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    &::after {
      border-color: rgba(136, 183, 213, 0);
      border-left-color: #FFFFFF;
      border-width: 25px;
      border-top-width: 0px;
      margin-top: 0px;
    }
  }
}
</style>
