<template>
  <div>
    <Compass />
    <div class="log">
      {{ getLog }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Compass from '@/components/Compass.vue';

export default {
  name: 'HomePage',
  components: {
    Compass
  },
  computed: {
    ...mapGetters(['getLog'])
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
