<template>
  <div class="level-page">
    <Disclaimer v-if="this.current_level === 0" @click="nextLevel" />
    <Compass v-else-if="distance > 15" :distance="distance" :bearing="GEO.bearing" />
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
    ...mapState(['GEO', 'current_level', 'levels', 'log']),
    levelData() {
      if(this.current_level) return;
      
      return this.levels[this.current_level - 1];
    },
    distance() {
      return Number(this.GEO?.distance);
    },
    isLastAnswer() {
      return this.levels.length === this.current_level
    }
  },
  methods: {
    ...mapActions(['SET_CURRENT_LEVEL']),
    nextLevel() {
      if(this.isLastAnswer) return

      this.SET_CURRENT_LEVEL(this.current_level + 1)
    }
  }
}
</script>

<style scoped lang="scss">
.level-page {
  height: 100%;
}
</style>
