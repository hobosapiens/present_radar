<template>
  <div v-if="isGotAllData" class="level-page">
    <template v-if="!is_finale">
      <Disclaimer v-if="this.current_level === 0" @click="nextLevel" />
      <template v-if="isCompasShown">
        <TopMenu :current-level="current_level" />
        <Compass :distance="distance" :bearing="GEO.bearing" />
        <div class="clue">
          <span class="clue__text">{{ levelData.clue_text }}</span>
        </div>
      </template>
      <Answer 
        v-else-if="distance || is_early_response"
        :describe-text="levelData.describe_text"
        :success-text="levelData.success_text" 
        :answers="levelData.answers"
        :is-last-answer="isLastAnswer"
        @click="nextLevel"
      />
    </template>
    <Final v-else />
    <div v-if="isBackButtonShown" class="back-to-search">
      <button @click="SET_IS_EARLY_RESPONSE(false)" class="back-to-search__button">Назад к поиску</button>
    </div>
  </div>
  <loader v-else />
</template>

<script>
import { mapActions, mapState } from "vuex";
import Disclaimer from '@/components/Disclaimer.vue';
import Compass from '@/components/Compass.vue';
import TopMenu from '@/components/TopMenu.vue';
import Answer from '@/components/Answer.vue';
import Final from '@/components/Final.vue';
import Loader from '@/components/Loader.vue';
import { setCookie } from '@/utils/cookies';
import { setLocalStorage } from '@/utils/storage';

export default {
  name: 'LevelPage',
  components: {
    Disclaimer,
    Compass,
    TopMenu,
    Answer,
    Final,
    Loader
  },
  data: () => ({

  }),
  computed: {
    ...mapState(['GEO', 'current_level', 'levels', 'is_early_response', 'is_finale', 'log']),
    levelData() {
      if(this.current_level === 0) return {};
      
      return this.levels[this.current_level - 1];
    },
    distance() {
      return Number(this.GEO?.distance);
    },
    isLastAnswer() {
      return this.levels.length === this.current_level
    },
    isGotAllData() {
      return !!this.GEO && !!this.distance
    },
    isCompasShown() {
      return this.distance > 25 && !this.is_early_response;
    },
    isAnswerShown() {
      return this.distance <= 25 || this.is_early_response;
    },
    isBackButtonShown() {
      return !this.distance <= 25 && this.is_early_response;
    }
  },
  methods: {
    ...mapActions(['SET_CURRENT_LEVEL', 'SET_IS_FINALE', 'SET_IS_EARLY_RESPONSE']),
    nextLevel() {
      if(this.isLastAnswer) {
        setLocalStorage('is_finale', true);
        this.SET_IS_FINALE(true);
        return;
      }
      setLocalStorage('current_level', this.current_level + 1);
      this.SET_CURRENT_LEVEL(this.current_level + 1)
    }
  },
  created() {
    setCookie('entry_allowed', true, 30)
  }
}
</script>

<style scoped lang="scss">
.level-page {
  height: 100%;
}

.back-to-search {
  position: absolute;
  top: 10px;
  left: 10px;

  &__button {
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
    background: #FFA12B;
    box-shadow: inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
    font-family: "Amatic SC", cursive;
    font-size: 20px;
    color: white;
  }
}

.clue {
  padding: 20px;
  text-align: center;
}
</style>
