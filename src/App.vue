<template>
  <div id="app">
      <div v-if="distance > 20 && distance < 50">
        Hot!
      </div>
      <div v-if="distance <= 20">
        Distance is {{ distance }}
      </div>
      <div>{{ coordinates }}</div>
      <input type="text" v-model="destination.latitude">
      <input type="text" v-model="destination.longitude">
      <div class="arrow" ref="arrow" style="margin: 20px 0;">⬆️</div>
      <div v-if="error" class="error">
        <hr>
        {{ error }}
      </div>
      <hr>
      <div v-if="log" class="log">
        <ul v-for="(item, index) in log" :key="index">
          <li >{{ item }}</li>
        </ul>
      </div>
  </div>
</template>

<script>
import distanceInMeters from "@/assets/utils/distanceInMeters";
import calculateBearing from "@/assets/utils/calculateBearing";
import audioFile from '@/assets/sound/radar.wav';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      coordinates: {
        latitude: 0,
        longitude: 0
      },
      destination: {
        latitude: 59.262714, 
        longitude: 18.040497,  
      },
      distance: null,
      error: '',
      log: [],
    }
  },
  created() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        position => {
          console.log(position.coords.heading);
          this.log.push({
            heading: position.coords.heading,
            latitude: position.coords.latitude, 
            longitude: position.coords.longitude,
          });
          const { latitude, longitude } = position.coords;
          this.coordinates.latitude = latitude;
          this.coordinates.longitude = longitude;

          const bearing = calculateBearing(latitude, longitude, this.destination.latitude, this.destination.longitude);

          const compassIndicator = this.$refs.arrow;
          compassIndicator.style.transform = `rotate(${bearing}deg)`;
        },
        error => {
          this.error = error;
        }
      )
    } else {
      this.error = "Browser does not support the Geolocation API"
    }
  },
  computed: {

  },
  methods: {
    playAudio() {
      const audio = new Audio(audioFile);
      audio.play();
    },
  },
  watch: {
    coordinates: {
      handler() {
        // console.log('distance: ', 
        //   distanceInMeters(
        //     this.coordinates.latitude, 
        //     this.coordinates.longitude,
        //     this.destination.latitude,
        //     this.coordinates.longitude
        //   )
        // );
        let distance = distanceInMeters(
            this.coordinates.latitude, 
            this.coordinates.longitude,
            this.destination.latitude,
            this.coordinates.longitude
          )

        this.distance = distance;
        // if(distance < 50) {

        //   this.playAudio()
        // }
      },
      deep: true,
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
