<template>
  <div class="level-page">
    <Disclaimer v-if="this.currentLevel === 0" @click="nextLevel" />
    <Compass v-else-if="distance > 15" :distance="distance" />
    <Answer 
      v-else
      :describe-text="levelData.describe_text"
      :success-text="levelData.success_text" 
      :answers="levelData.answers"
      :is-last-answer="isLastAnswer"
      @click="nextLevel"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Disclaimer from '@/components/Disclaimer.vue';
import Compass from '@/components/Compass.vue';
import Answer from '@/components/Answer.vue';

export default {
  name: 'LevelPage',
  components: {
    Disclaimer,
    Compass,
    Answer
  },
  data: () => ({
  }),
  computed: {
    ...mapState(['GEO', 'currentLevel', 'levels', 'log']),
    levelData() {
      return this.levels?.find(level => level.id === this.currentLevel);
    },
    distance() {
      return Number(this.GEO?.distance);
    },
    isLastAnswer() {
      return this.levels.length === this.currentLevel
    }
  },
  methods: {
    ...mapActions(['SET_CURRENT_LEVEL']),
    nextLevel() {
      if(this.isLastAnswer) return

      this.SET_CURRENT_LEVEL(this.currentLevel + 1)
    }
  }
}
</script>

<style scoped lang="scss">
.level-page {
  height: 100%;
}
</style>
