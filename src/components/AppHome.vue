<template>
  <v-container>
    <v-row no-gutters>
      <v-col md="6" offset-md="3">
        <v-card class="pa-2" outlined tile>
          <WebCam id="camVideo" autoplay selectFirstDevice playsinline></WebCam>
          <v-card-title>
            Martin Brain v0.1
          </v-card-title>
          <v-card-subtitle>
            A visualization of what is happening
          </v-card-subtitle>
          <v-card-text>
            <v-text-field
              v-model="textInput"
              label="What would you like to tell me?"
              outlined
              clearable
              ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn v-on:click="greet">Say something</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { WebCam } from "vue-web-cam";
require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const cocoSsd = require('@tensorflow-models/coco-ssd');

export default {
  name: 'AppHome',
  data: () => {
    return {
      model: undefined,
      textInput: ''
    }
  },
  components: {
    WebCam
  },
  created: () => {
    (async () => {
      const videoFeed = document.getElementById('camVideo');
      // Load the model.
      const model = await cocoSsd.load().then(function (loadedModel){
        // Classify the image.
        const predictions = loadedModel.detect(videoFeed);
        console.log('Predictions: ');
        console.log(predictions);
      });
    })();
  },
  methods: {
    greet() {
      let utterance = new SpeechSynthesisUtterance(this.textInput);
      utterance.lang = 'nl';
      utterance.speed = 0.6;
      speechSynthesis.speak(utterance);
    }
  }
};
</script>

<style scoped>
</style>