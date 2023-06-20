<template>
  <div>
    <div v-if="this.getCurrentStage === 'new'">
      <button  @click="nextStage">Lets go!</button>
    </div>
    <div v-else>
      <Compass />
      <div class="log">
        {{ getLog }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Compass from '@/components/Compass.vue';

export default {
  name: 'HomePage',
  components: {
    Compass
  },
  computed: {
    ...mapGetters(['getCurrentStage', 'getLog'])
  },
  methods: {
    ...mapActions(['SET_CURRENT_STAGE']),
    nextStage() {
      this.SET_CURRENT_STAGE('started')
    }
  }
}
</script>

<style scoped>
</style>
