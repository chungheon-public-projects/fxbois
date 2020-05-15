<template>
  <div>
      <v-card
    style="margin-top:0px;"
    max-width="100%"
    class="mx-auto"
    elevation="0"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title style="font-size: 40px;" class=""><b>Borrow History</b></v-list-item-title>
        <v-list-item-subtitle>View your borrow history and manage repayment</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src="https://therightustorage.blob.core.windows.net/assets/guide/bank-draft.png"
      height="150"
    ></v-img>
  </v-card>
  <div style="padding: 10px;">
    <v-card
    v-for="i in 5"
    :key="i"
    style="margin-top: 10px;"
    color="#385F73"
    dark
    >
    <div class="d-flex flex-no-wrap justify-space-between">
        <div>
            <v-card-title class="headline"><b>$1200</b></v-card-title>

            <v-card-subtitle>
                $1000 at 6% interest
            </v-card-subtitle>
            </div>
            <v-avatar
            class="ma-3"
            size="50"
            tile
            >
            <v-img src="https://image.flaticon.com/icons/svg/2228/2228787.svg"></v-img>
            </v-avatar>
    </div>
    <v-card-actions style="margin-top: -15px;">
        <v-spacer></v-spacer>
        <v-btn text>Repayment</v-btn>
    </v-card-actions>
    </v-card>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>