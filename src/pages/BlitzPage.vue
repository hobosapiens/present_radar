<template>
  <div class="blitz">
    <video controls class="video" :poster="require(`@/assets/images/preview/${video1}.png`)">
      <source :src="require(`@/assets/video/${video1}.mp4`)" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <video controls class="video" :poster="require(`@/assets/images/preview/${video2}.png`)">
      <source :src="require(`@/assets/video/${video2}.mp4`)" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <video controls class="video" :poster="require(`@/assets/images/preview/${video3}.png`)">
      <source :src="require(`@/assets/video/${video3}.mp4`)" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  name: 'BlitzPage',
  data: () => ({
    video1: '5-1kbja',
    video2: '5-2knkg',
    video3: '5-3obgc',
  }),
}
</script>

<style scoped lang="scss">
.video {
  max-width: 100%;
  width: 100%;
  margin-bottom: 20px;
  background-color: white;
  border-bottom: 2px solid white;

  &:not(:first-of-type) {
    border-top: 2px solid white;
  }
}
</style>
