<template>
  <div v-if="getGEO.distance" class="compass">
    <div class="distance">
      {{ this.getGEO?.distance }}
    </div>
    <div
      :class="{pulse: showPulsation}" 
      class="compass__wrapper"
    >
      <ArrowIcon :rotate="this.getGEO?.bearing" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ArrowIcon from '@/components/ArrowIcon.vue';

export default {
  name: 'Compass',
  components: {
    ArrowIcon
  },
  computed: {
    ...mapGetters(['getGEO']),
    showPulsation() {
      return this.getGEO?.distance < 30;
    }
  }
}
</script>

<style scoped>
.compass {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 40px 0;
}

.compass__wrapper {
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: 10px solid black;
}

.compass__wrapper::after {
  content: 'N';
  position: absolute;
  left: 50%;
  top: -40px;
  transform: translateX(-50%);
  padding: 10px;
  background: white;
  font-size: 44px;
  font-weight: bold;
  color: black;
}

.pulse {
  animation: pulse 2s infinite;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(44, 204, 121, 0.4);
  }
  70% {
      -webkit-box-shadow: 0 0 0 30px rgba(44, 204, 121, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(44, 204, 121, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(44, 204, 121, 0.4);
    box-shadow: 0 0 0 0 rgba(44, 204, 121, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 30px rgba(44, 204, 121, 0);
      box-shadow: 0 0 0 30px rgba(44, 204, 121, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(44, 204, 121, 0);
      box-shadow: 0 0 0 0 rgba(44, 204, 121, 0);
  }
}
</style>
