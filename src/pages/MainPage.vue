<template>
  <div>
    <!-- РАскомментить! -->
    <!-- <div v-if="allowed"> -->
    <Disclaimer @click="nextStage('started')" v-if="this.currentStage === 'disclaimer'" />
    <div v-else>
      <Compass />
      <Borsh :text="log">
        <TextInput v-model="name" placeholder="Введи ответ" class="answer" />
      </Borsh>
    </div>
  </div>
  <!-- <loader v-else text="Разреши использование геолокации!!!" /> -->
</template>

<script>
import { mapActions, mapState } from "vuex";
import Disclaimer from '@/components/Disclaimer.vue';
import Compass from '@/components/Compass.vue';
import Borsh from '@/components/Borsh.vue';
import TextInput from '@/components/TextInput.vue';
// import Loader from '@/components/Loader.vue';

export default {
  name: 'HomePage',
  components: {
    Disclaimer,
    Compass,
    TextInput,
    Borsh,
    // Loader
  },
  data: () => ({
    name: ''
  }),
  computed: {
    ...mapState(['allowed', 'currentStage', 'log'])
  },
  methods: {
    ...mapActions(['SET_CURRENT_STAGE']),
    nextStage(stage) {
      this.SET_CURRENT_STAGE(stage)
    }
  }
}
</script>

<style scoped lang="scss">
.answer {
  display: block;
  width: 100%;
  margin-top: 20px;
  padding: 5px 10px;
  font-size: 20px;
  font-family: 'Amatic SC', cursive;
}

.answer::-webkit-input-placeholder {
  font-family: 'Amatic SC', cursive;
  font-size: 20px;
}

.answer:-moz-placeholder {
  font-family: 'Amatic SC', cursive;
  font-size: 20px;
}
</style>
