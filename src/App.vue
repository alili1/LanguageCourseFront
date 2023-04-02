<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <TestDownloader 
      v-for="msg in messages"
      v-bind:key="msg.id"
      v-bind:title="msg.title"
    />
  </div>
</template>

<script>
import TestDownloader from './components/TestDownloader.vue'
export default {
  name: 'App',
  data () {
    return {
      messages: [
        {id: 1, title: 'Trying to prevent XSS attack'}
      ]
    }
  },
  components: {
    TestDownloader
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
