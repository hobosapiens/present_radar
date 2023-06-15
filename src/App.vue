<template>
  <div id="app">
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
        latitude: 59.264805,  
        longitude: 18.034346,
      },
      bearing: 0,
      error: '',
      dest_lat: 59.264805,
      dest_lng: 18.034346,
      log: []
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

          const bearing = this.calculateBearing(latitude, longitude, this.destination.latitude, this.destination.longitude);
          this.bearing = bearing;

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
    calculateBearing(lat1, lon1, lat2, lon2) {
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const y = Math.sin(dLon) * Math.cos(lat2 * Math.PI / 180);
      const x = Math.cos(lat1 * Math.PI / 180) * Math.sin(lat2 * Math.PI / 180) - Math.sin(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.cos(dLon);
      let bearing = Math.atan2(y, x) * 180 / Math.PI;
      bearing = (bearing + 360) % 360; // Normalize to 0-360 degrees
      return bearing;
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
