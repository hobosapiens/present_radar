<template>
  <div v-if="allowed" class="level-page">
    <Disclaimer @click="nextStage(1)" v-if="this.currentLevel === 0" />
      <Compass :distance="GEO.distance" v-else-if="GEO.distance > 10" />
      <Answer :text="log" :answers="levelData.answers" v-else />
  </div>
  <loader v-else text="Разреши использование геолокации!!!" />
</template>

<script>
import { mapActions, mapState } from "vuex";
import Disclaimer from '@/components/Disclaimer.vue';
import Compass from '@/components/Compass.vue';
import Answer from '@/components/Answer.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'LevelPage',
  components: {
    Disclaimer,
    Compass,
    Answer,
    Loader
  },
  data: () => ({
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
</style>
