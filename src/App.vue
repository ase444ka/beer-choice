<template>
  <v-app :style="{ background: $vuetify.theme.themes['light'].background }">

      <Navigation />
    <v-container>
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  name: 'App',
  components: { Navigation },
}
</script>

<style>
.container {
  max-width: 900px !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
