<template>
  <div class="answer__container">
    <img v-if="isAnswersValid" src="@/assets/images/gif/firework.gif" class="answer__fireworks" />
    <div class="answer">
      <img class="answer__img" src="@/assets/images/borshevskiy.png">
      <img class="answer__mouth" src="@/assets/images/gif/mouth.gif">
      <div class="answer__text">
        <span v-if="isAnswersValid">{{ successText }}</span>
        <span v-else>{{ describeText }}</span>
        <input
          v-for="(_, index) in answers" 
          v-model="inputValues[index]"
          :key="index" 
          class="answer__input"
          type="text"
          :disabled="isAnswersValid"
        />
        <button v-if="isAnswersValid" @click="$emit('click')" class="answer__button">
          Вперед!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from '@/components/TextInput.vue';


export default {
  name: 'Answer',
  comments: {
    TextInput
  },
  props: {
    answers: {
      type: Array,
      required: true
    },
    describeText: {
      type: String,
      default: ''
    },
    successText: {
      type: String,
      default: ''
    },
    isLastAnswer: {
      type: Boolean,
      required: true
    },
  },
  data: () => ({
    inputValues: [''],
    isAnswersValid: false
  }),
  methods: {
    validateInputs() {
      let allValid = [];
      for (let i = 0; i < this.answers.length; i++) {
        if (this.answers[i].includes(this.inputValues[i]?.toLocaleLowerCase())) {
          allValid.push(true);
        } else {
          return false;
        }
      }
      return allValid.every(value => value);
    }
  },
  watch: {
    inputValues: {
      handler() {
        if (this.validateInputs()) {
          this.isAnswersValid = true
        }
      },
    },
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
  padding-bottom: 100px;

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
    height: 100%;
  }

  &__fireworks {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
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
    filter: grayscale(0.3) sepia(0.3);
  }

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

  &__input {
    display: block;
    width: 100%;
    padding: 5px 10px;
    font-size: 20px;
    font-family: 'Amatic SC', cursive;
    margin-top: 10px;

    &:last-of-type {
      margin-bottom: 10px;
    }

    &::-webkit-input-placeholder {
      font-family: 'Amatic SC', cursive;
      font-size: 20px;
    }

    &:-moz-placeholder {
      font-family: 'Amatic SC', cursive;
      font-size: 20px;
    }
  }

  &__button {
    width: 100%;
    padding: 14px 8px;
    margin-bottom: 10px;
    border-radius: 5px;
    background: #FFA12B;
    box-shadow: inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
    font-family: 'Amatic SC', cursive;
    font-size: 24px;
    color: white;
  }
}
</style>
