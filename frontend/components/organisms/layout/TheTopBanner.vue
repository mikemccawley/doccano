<template>
  <section>
    <v-parallax
      src="/images/vbanner.jpg"
      height="400"
      dark
    >
      <v-layout
        wrap
        align-center
        justify-center
        class="white--text"
      >
        <v-flex text-right class="mr-5">
          <img src="~/assets/icon.png" alt="doccano" height="200">
        </v-flex>
        <v-flex>
          <h1 class="mb-2 display-1 text-xs-center">
            Solve Case Text Annotation
          </h1>
          <div class="mt-4">
            <v-btn
              large
              outlined
              color="white"
              href="https://w3.ibm.com/w3publisher/solve/"
            >
              Solve Docs on w3
            </v-btn>
            <v-btn
              class="blue lighten-2 ml-5"
              dark
              large
              href="/auth"
            >
              Login and Get Started
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-parallax>
  </section>
</template>
