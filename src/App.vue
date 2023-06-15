<template>
  <div id="app">
      <div>{{ coordinates }}</div>
      <div>{{ destination.latitude }},{{ destination.longitude }}</div>
      <div class="arrow" ref="arrow">⬆️</div>
      <div>{{ orientation }}</div>
  </div>
</template>

<script>
// import { useGeolocation } from '@vueuse/core'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
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
      orientation: null
    }
  },
  created() {
    navigator.geolocation.watchPosition(position => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      this.coordinates.latitude = latitude;
      this.coordinates.longitude = longitude;

      const bearing = this.calculateBearing(latitude, longitude, this.destination.latitude, this.destination.longitude);
      this.bearing = bearing;

      const compassIndicator = this.$refs.arrow;
      compassIndicator.style.transform = `rotate(${bearing}deg)`;
    });

    window.addEventListener('deviceorientation', (event) => { 
      this.orientation = event;
      console.log(event);
    });
  },
  computed: {
    // coords() {
    //   return { coords, locatedAt, error, resume, pause } = useGeolocation()
    // }
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
    test() {
      console.log('test');
    } 
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
