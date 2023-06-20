<template>
  <div class="hello">
      <div>
        {{ getLog }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'HomePage',
  props: {
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
