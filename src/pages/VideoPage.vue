<template>
  <div v-if="videoPath">
    <video controls class="video" :poster="posterPath">
      <source :src="videoPath" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <Error v-else />
</template>

<script>
import Error from '@/components/Error.vue';
import { getCookie } from '@/utils/cookies';

export default {
  name: 'VideoPage',
  components: {
    Error
  },
  data() {
    return {
      videoPath: require(`@/assets/video/${this.$route.params.id}.mp4`), 
      posterPath: require(`@/assets/images/preview/${this.$route.params.id}.png`), 
    }
  },
  created() {
    if(getCookie('entry_allowed')) {
      return;
    } else {
      const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
      location.replace(url)
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
