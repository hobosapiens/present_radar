<template>
  <div v-if="allowed" class="level-page">
    <Disclaimer @click="nextStage(2)" v-if="this.currentLevel === 0" />
      <Compass :distance="GEO.distance" v-else-if="GEO.distance > 10" />
      <Answer :text="log" v-else>
        <TextInput v-model="answer" placeholder="Введи ответ" class="answer-input" />
      </Answer>
  </div>
  <loader v-else text="Разреши использование геолокации!!!" />
</template>

<script>
import { mapActions, mapState } from "vuex";
import Disclaimer from '@/components/Disclaimer.vue';
import Compass from '@/components/Compass.vue';
import Answer from '@/components/Answer.vue';
import TextInput from '@/components/TextInput.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'LevelPage',
  components: {
    Disclaimer,
    Compass,
    TextInput,
    Answer,
    Loader
  },
  data: () => ({
    answer: '',
  }),
  computed: {
    ...mapState(['allowed', 'GEO', 'currentLevel', 'levels', 'log']),
    levelData() {
      return this.levels?.find(level => level.id === this.currentLevel);
    },
    isAnswerCorrect() {
      return this.answer.toLocaleLowerCase()
    },
    isBlitz() {
      return this.levelData.isBlitz
    }
  },
  methods: {
    ...mapActions(['SET_CURRENT_LEVEL']),
    nextStage(stage) {
      this.SET_CURRENT_LEVEL(stage)
    }
  }
}
</script>

<style scoped lang="scss">
.answer-input {
  display: block;
  width: 100%;
  margin-top: 20px;
  padding: 5px 10px;
  font-size: 20px;
  font-family: 'Amatic SC', cursive;

  &::-webkit-input-placeholder {
    font-family: 'Amatic SC', cursive;
    font-size: 20px;
  }

  &:-moz-placeholder {
    font-family: 'Amatic SC', cursive;
    font-size: 20px;
  }
}
</style>
