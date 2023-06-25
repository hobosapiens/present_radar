<template>
  <div class="final">
    <img src="@/assets/images/gif/final.gif" class="final__img">
    <span class="final__text">
      FINAL
    </span>
  </div>
</template>

<script>
export default {
  name: 'Final',
  components: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.final {
  display: flex;
  flex-direction: column;
  padding: 20px;

  &__img {
    width: 100%;
    margin-bottom: 20px;
    border: 2px solid white !important;
  }
}
</style>
