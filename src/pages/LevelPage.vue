<template>
  <div v-if="allowed" class="level-page">
    <Disclaimer @click="nextStage('started')" v-if="this.currentStage === 'disclaimer'" />
    <div v-else class="level-page__container">
      <Compass :distance="GEO.distance" v-if="GEO.distance > 10" />
      <Answer :text="log" v-else>
        <TextInput v-model="answer" placeholder="Введи ответ" class="answer-input" />
      </Answer>
    </div>
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
    answer: ''
  }),
  computed: {
    ...mapState(['allowed', 'GEO', 'currentStage', 'log'])
  },
  methods: {
    ...mapActions(['SET_CURRENT_STAGE']),
    nextStage(stage) {
      this.SET_CURRENT_STAGE(stage)
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
