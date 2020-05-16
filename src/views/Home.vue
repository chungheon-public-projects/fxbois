<template>
  <div class="home">
      <v-card
      style="margin-top: 10px;"
      max-width="400"
    class="mx-auto text-center"
    color="blue"
    dark
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">
            ${{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thin">Earnings 24h</div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn block text>Go to Report</v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Home',
  data() {
    return {
      response: 'Nothing',
       value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
    }
  },
  
  methods: {
    test() {
      var test = firebase.functions().httpsCallable('test')
      test('Hello').then(response => {
        console.log(response)
        this.response = response.data
      }) 
    }
  }
}
</script>
