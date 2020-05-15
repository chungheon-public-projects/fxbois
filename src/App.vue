<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h2>FXBOIS</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn text>
        Press me!
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
      <v-bottom-navigation
        v-model="bottomNav"
      >
    <v-btn value="recent" @click="goToBorrow()">
        <span>Borrow</span>
        <v-icon>mdi-charity</v-icon>

    </v-btn>
    <v-btn value="favorites">
      <span>Lend</span>
      <v-icon>mdi-currency-usd-circle</v-icon>
    </v-btn>

    <v-btn value="nearby">
      <span>Borrow Requests</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>
    <v-btn value="nearby">
      <span>Portfolio</span>
      <v-icon>mdi-diamond-stone</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </v-app>
</template>
<script>
import db from '@/firebase/init'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {
    goToBorrow() {
      this.$router.push({name: 'Borrow'})
    }
  }
};
</script>
