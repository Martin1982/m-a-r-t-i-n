<template>
  <v-container>
    <v-row no-gutters>
      <v-col md="6" offset-md="3">
        <v-card class="pa-2" outlined tile v-on:click="greet">
          Good morning....
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AppHome',
  methods: {
    greet() {
      let utterance = new SpeechSynthesisUtterance("This is just some jibberish");
      speechSynthesis.speak(utterance);
    }
  }
};
</script>

<style scoped>
</style>