<template>
  <div>
    <img src="@/assets/logo.png">
    <h1>Welcome to Your Vue.js App</h1>
    <ul>
      <li v-for="weatherForcast in weatherForcasts" :key="weatherForcast.dateFormatted">
        <p>dateFormatted: {{weatherForcast.dateFormatted}}</p>
        <p>summary: {{weatherForcast.summary}}</p>
        <p>temperatureC: {{weatherForcast.temperatureC}}</p>
        <p>temperatureF: {{weatherForcast.temperatureF}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Home',
  computed: {
    ...mapState({
      weatherForcasts: state => state.sampleData.weatherForcasts
    })
  },
  methods: {
    ...mapActions({
      loadWeatherForcasts: 'sampleData/loadWeatherForcasts'
    })
  },
  mounted: function() {
    this.loadWeatherForcasts();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>
