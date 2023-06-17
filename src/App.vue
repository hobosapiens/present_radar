<template>
  <div id="app">
    <Stage_1 />
    <div v-show="started">
      <div>
        Distance is {{ distance }}
      </div>
      <div>{{ coordinates }}</div>
      <input type="text" v-model="destination.latitude">
      <input type="text" v-model="destination.longitude">
      <DestinationCompass :bearing="bearing" :distance="distance" />
      <div v-if="error" class="error">
        <hr>
        {{ error }}
      </div>
      <hr>
      <div v-if="log" class="log">
        <ul v-for="(item, index) in log" :key="index">
          <li>{{ item }}</li>
        </ul>
      </div>
    </div>
    <div v-show="!started">
      <button @click="started = true">Start</button>
    </div>
  </div>
</template>

<script>
import DestinationCompass from "./components/DestinationCompass.vue";
import Stage_1 from "./components/Stage-1.vue";
import distanceInMeters from "@/assets/utils/distanceInMeters";
import calculateBearing from "@/assets/utils/calculateBearing";

export default {
  name: 'App',
  components: {
    DestinationCompass,
    Stage_1
  },
  data() {
    return {
      started: false,
      coordinates: {
        latitude: 0,
        longitude: 0
      },
      destination: {
        latitude: 59.262034, 
        longitude: 18.038672,
      },
      activeStage: 1,
      distance: null,
      bearing: null,
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
          this.bearing = bearing;
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

  },
  watch: {
    coordinates: {
      handler() {
        console.log('distance: ',
          distanceInMeters(
            this.coordinates.latitude,
            this.coordinates.longitude,
            this.destination.latitude,
            this.coordinates.longitude
          )
        );
        let distance = distanceInMeters(
          this.coordinates.latitude,
          this.coordinates.longitude,
          this.destination.latitude,
          this.coordinates.longitude
        )

        this.distance = distance;
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
