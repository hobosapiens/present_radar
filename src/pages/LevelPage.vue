<template>
  <div v-if="levelData" class="level-page">
    <template v-if="!is_finale">
      <Disclaimer v-if="this.current_level === 0" @click="nextLevel" />
      <template v-else-if="distance > 15">
        <Compass :distance="distance" :bearing="GEO.bearing" />
        <div class="clue">
          <span class="clue__text">{{ levelData.clue_text }}</span>
        </div>
      </template>
      <Answer 
        v-else
        :describe-text="levelData.describe_text"
        :success-text="levelData.success_text" 
        :answers="levelData.answers"
        :is-last-answer="isLastAnswer"
        @click="nextLevel"
      />
    </template>
    <Final v-else />
  </div>
  <loader v-else />
</template>

<script>
import { mapActions, mapState } from "vuex";
import Disclaimer from '@/components/Disclaimer.vue';
import Compass from '@/components/Compass.vue';
import Answer from '@/components/Answer.vue';
import Final from '@/components/Final.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'LevelPage',
  components: {
    Disclaimer,
    Compass,
    Answer,
    Final,
    Loader
  },
  data: () => ({
  }),
  computed: {
    ...mapState(['GEO', 'current_level', 'levels', 'is_finale', 'log']),
    levelData() {
      if(this.current_level === 0) return {};
      
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
    ...mapActions(['SET_CURRENT_LEVEL', 'SET_IS_FINALE']),
    nextLevel() {
      if(this.isLastAnswer) {
        this.SET_IS_FINALE(true);
        return;
      }

      this.SET_CURRENT_LEVEL(this.current_level + 1)
    }
  }
}
</script>

<style scoped lang="scss">
.level-page {
  height: 100%;
}

.clue {
  padding: 20px;
}
</style>
