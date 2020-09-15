<template>
  <v-app>
    <v-card>
      <v-card-title>
        <h1 class="display-1">
          The Ground Truth Report
        </h1>
      </v-card-title>
      <v-card-body>
        {{ response }}
      </v-card-body>
      <v-card-actions>
        <v-btn @click="snak">
          Run Detail Report
        </v-btn>
        <v-spacer />
        <v-btn>Approve Project and Promote</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>
<script>
import axios from 'axios'
export default {
  layout: 'project',
  data() {
    return {
      response: 'some xhr data that happens at pageload'
    }
  },
  async mounted() {
    // some xhr that happens on pageload
  },
  methods: {
    snak: async(event) => {
      // const url = 'http://solveadmindev.rtp.raleigh.ibm.com/solverest/service/solvecsp/testget?sample=try%20it&enchaladas=delicious'
      const url = 'http://stingray.swg.usma.ibm.com:9000/api?verbose=true'
      const config = {
        method: 'get',
        auth: {
          username: 'apikey-19e76917c8294b4b8a1ce457129cce2b',
          password: 'b65ad88b956a089528a76691fc0efbc0e9d9a9b3'
        }
      }
      const { data } = await axios.request(url, config)
      alert(`Response from ${url}\n${JSON.stringify(data, null, 4)}`)
    }
  }
}
</script>
