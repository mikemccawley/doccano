<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        black
        lighten-2
        py-4
        text-center
        white--text
        xs12
      >
        &copy; {{ new Date().getFullYear() }} IBM with source powered by <a href="https://github.com/doccano/doccano">doccano</a>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
