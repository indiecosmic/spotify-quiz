<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a href="#" @click="start">Play</a>
  </div>
</template>
<script>
import Api from '@/services'
export default {
  methods: {
    start(e) {
      e.preventDefault();
      Api.player.play('spotify:track:7xGfFoTpQ2E7fRF5lN10tr');
      setTimeout(()=>{
        Api.player.play('spotify:track:2Paii6qKa1C0AKWLFnruFy')
      },5000);
    }
  }
}
</script>
