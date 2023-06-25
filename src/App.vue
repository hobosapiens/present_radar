<template>
  <router-view />
</template>

<script>
import { mapActions, mapState } from "vuex";
import calculateBearing from '@/utils/calculateBearing.js'
import distanceInMeters from '@/utils/distanceInMeters.js'

export default {
  name: 'App',
  data() {
    return {
      location: {
        lat: 0,
        lng: 0,
      },
      heading: 0,
      bearing: 0,
      distance: 0,
      error: '',
    }
  },
  created() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        position => {
          const { latitude, longitude, heading } = position.coords;
          this.location.lat = latitude;
          this.location.lng = longitude;
          this.heading = heading;

          this.SET_LOG({
            heading: position.coords.heading,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
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
    ...mapState(['current_level', 'levels']),
    destination() {
      if(this.current_level === 0) return this.levels[0].location;

      return this.levels[this.current_level - 1].location;
    }
  },
  methods: {
    ...mapActions(['SET_GEO', 'SET_LOG']),
  },
  watch: {
    location: {
      handler() {
        this.distance = distanceInMeters(
          this.location.lat,
          this.location.lng,
          this.destination.lat,
          this.destination.lng
        )

        this.bearing = calculateBearing(
          this.location.lat,
          this.location.lng,
          this.destination.lat,
          this.destination.lng
        )

        this.SET_GEO({
          location: this.location,
          heading: this.heading,
          bearing: this.bearing,
          distance: this.distance,
        })
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
