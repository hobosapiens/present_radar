<template>
  <div v-if="videoPath">
    <video controls class="video">
      <source :src="videoPath" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <Error v-else />
</template>

<script>
import Error from '@/components/Error.vue';

export default {
  name: 'VideoPage',
  components: {
    Error
  },
  data() {
    return {
      videoPath: require(`@/assets/video/${this.$route.params.id}.mp4`), 
    }
  }
}
</script>

<style scoped>
.video {
  max-width: 100%;
  width: 100%;
  border-bottom: 2px solid white;
  background-color: white;
}
</style>
