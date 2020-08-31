<template>
  <v-card>
    <v-card-title>
      Welcome to Solve on CSP!
    </v-card-title>
    <v-stepper
      v-model="e6"
      vertical
      non-linear
    >
      <div
        v-for="(item, index) in items"
        :key="index"
      >
        <v-stepper-step
          :complete="e6 > index + 1"
          :step="index + 1"
          editable
        >
          {{ item.title }}
        </v-stepper-step>
        <v-stepper-content :step="index + 1">
          <v-card
            v-if="e6 === index + 1"
            class="mb-12"
            width="560"
            height="315"
          >
            <youtube
              ref="youtube"
              :video-id="item.videoId"
            />
          </v-card>
          <v-btn
            color="primary mt-5"
            @click="next"
          >
            Continue
          </v-btn>
          <v-btn
            class="mt-5"
            text
            @click="prev"
          >
            Cancel
          </v-btn>
        </v-stepper-content>
      </div>
    </v-stepper>
  </v-card>
</template>

<script>
export default {
  layout: 'project',

  data() {
    return {
      e6: 1,
      items: [
        { title: 'Put your right foot in', videoId: 'dA4ID1DSxCE' },
        { title: 'Put your right foot out', videoId: '1bSML270quU' },
        { title: 'Put your right foot in', videoId: 'NI09dcBz-qA' },
        { title: 'And you shake it all about', videoId: 'AvvX3Xs32nA' },
        { title: 'Do the Hokey Pokey', videoId: 'F3XoSdyiMhA' },
        { title: 'And you turn yourself around', videoId: 'kfRpa0mNQMY' },
        { title: 'That\'s what it\'s all about!', videoId: 'Pfy_QcHEeQ4' }
      ]
    }
  },

  methods: {
    next() {
      this.e6 = Math.max(1, (this.e6 + 1) % (this.items.length + 1))
    },
    prev() {
      this.e6 = Math.max(1, this.e6 - 1)
    }
  },

  validate({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>
