<template>
  <div>
    <Disclaimer
    @click="nextStage('started')"
     v-if="this.getCurrentStage === 'disclaimer'"
    />
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
import Disclaimer from '@/components/Disclaimer.vue';
import Compass from '@/components/Compass.vue';

export default {
  name: 'HomePage',
  components: {
    Disclaimer,
    Compass
  },
  computed: {
    ...mapGetters(['getCurrentStage', 'getLog'])
  },
  methods: {
    ...mapActions(['SET_CURRENT_STAGE']),
    nextStage(stage) {
      console.log('asd');
      this.SET_CURRENT_STAGE(stage)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
