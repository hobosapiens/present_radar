<template>
  <div class="level-page">
    <Disclaimer @click="nextStage(1)" v-if="this.currentLevel === 0" />
    <Compass :distance="distance" v-else-if="distance > 10" />
    <Answer 
      v-else
      :describe-text="levelData.describe_text"
      :success-text="levelData.success_text" 
      :answers="levelData.answers" 
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
.level-page {
  height: 100%;
}
</style>
