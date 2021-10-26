<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2 rounded-lg"
          contain
          src="./assets/megaminds4.jpg"
          transition="scale-transition"
          width="40"
        />
        <label class="font-weight-bold hidden-sm-and-down">megaminds</label>
        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>

      <v-btn
        outlined
        rounded
        href="#register"
      >
        <span class="mr-2">Register</span>
      </v-btn>
        <v-btn icon>
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <!-- <v-btn icon>
          <v-icon>mdi-instagram</v-icon>
        </v-btn> -->
        <v-btn icon>
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main><v-footer
    dark
    padless
  >
    <v-card
      class="flex text-center"
      flat
      tile
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>MegaMinds Inc.</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-linkedin',
      'mdi-instagram'
    ]
    //
  })
}
</script>
