<template>
  <v-row>
    <v-col cols="12">
      <h1 class="mb-4">{{ headerText }}</h1>
      <v-btn large color="yellow darken-4" dark @click="getBeer" :loading='beerIsLoading'
        ><v-icon left class="mr-2"> mdi-emoticon-confused-outline </v-icon>Wanna
        another?
      </v-btn>
    </v-col>

    <v-col cols="12">
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot
        >
          <v-card :color="item.color" dark>
            <v-card-title class="text-h6"> {{ item.title }} </v-card-title>
            <v-card-text class="white text--primary pt-5">
              <h3 class="d-flex justify-start">{{ item.value }}</h3>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script>
import { beerApi } from '../api'
export default {
  name: 'BeerChoice',

  async created() {
    await this.getBeer()
  },

  data: () => ({
    currentBeer: null,
    beerIsLoading: false,
    items: [
      {
        color: 'red lighten-2',
        icon: 'mdi-star',
        title: 'alcohol',
        value: '',
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-beer',
        title: 'blg',
        value: '',
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-airballoon',
        title: 'brand',
        value: '',
      },
      {
        color: 'indigo',
        icon: 'mdi-party-popper',
        title: 'hop',
        value: '',
      },
      {
        color: 'amber',
        icon: 'mdi-food-apple',
        title: 'ibu',
        value: '',
      },
      {
        color: 'lime',
        icon: 'mdi-beer-outline',
        title: 'malts',
        value: '',
      },
      {
        color: 'brown',
        icon: 'mdi-glass-mug-variant',
        title: 'name',
        value: '',
      },
      {
        color: 'light-green darken-3',
        icon: 'mdi-balloon',
        title: 'style',
        value: '',
      },
      {
        color: 'red darken-1',
        icon: 'mdi-snail',
        title: 'yeast',
        value: '',
      },
    ],
  }),

  computed: {
    headerText() {
      return this.currentBeer
        ? `Your today's beer is ${this.currentBeer.name} :o)`
        : `Can't choose beer? :)`
    },
  },

  methods: {
    async getBeer() {
      try {
        this.beerIsLoading = true
        this.currentBeer = await beerApi.getBeer()
        this.items.forEach((item) => {
          item.value = this.currentBeer[item.title]
        })
      } catch (e) {
        this.$toastr('error', 'beer is unavailable :(')
      } finally {
        this.beerIsLoading = false
      }
    },
  },
}
</script>

<style scoped></style>
