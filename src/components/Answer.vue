<template>
  <div class="answer__container">
    <div class="answer">
      <img class="answer__img" src="@/assets/images/borshevskiy.png">
      <img class="answer__mouth" src="@/assets/images/gif/mouth.gif">
      <div class="answer__text">
        {{ text }}
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Answer',
  props: {
    text: {
      type: String,
      default: 'Загрузка...'
    }
  }
};
</script>

<style scoped lang="scss">
.answer {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  position: relative;
  margin-top: auto;
  padding-bottom: 60px;

  &::after {
    content: '';
    display: block;
    background: white;
    position: absolute;
    top: 245px;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &__container {
    display: flex;
    height: 100vh;
  }

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
    left: 1px;
    top: 20px;
    width: 60%;
    min-height: 245px;
    background: white;
    border: 1px solid #81C4D1;
    border-radius: 15px;
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
      border-color: rgba(136, 183, 213, 0);
      border-left-color: #FFFFFF;
      border-width: 25px;
      border-top-width: 0px;
      margin-top: 0px;
    }
  }
}
</style>
