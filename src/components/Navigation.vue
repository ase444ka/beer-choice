<template>
  <v-container>
    <v-navigation-drawer v-model="drawer" width="400" app>
      <v-card flat v-if="currentUser">
        <v-btn
          class="navigation-control"
          fab
          dark
          large
          color="yellow darken-4"
          @click="drawer = false"
        >
          <v-icon dark> mdi-arrow-left-bold </v-icon>
        </v-btn>
        <AvatarComponent
          class="ma-5"
          v-if="avatarIsAvailable"
          :src="currentUser.avatar"
          ref="avatar"
        />
        <v-img
          class="ma-5"
          v-else
          :src="require('@/assets/chudik.png')"
          ref="avatar1"
        />
        <v-card-title
          class="deep-purple-darken-4--text px-1 d-flex justify-center"
        >
          <div class="text-h4 full-name">
            {{ userFullName }}
          </div>
        </v-card-title>
        <v-list three-line class="user-info">
          <v-list-item>
            <v-list-item-icon class="user-icon">
              <v-icon color="yellow darken-4"> mdi-phone </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ userPhone }}</v-list-item-title>
              <v-list-item-subtitle>Phone</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="yellow darken-4"> mdi-email </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ userEmail }}</v-list-item-title>
              <v-list-item-subtitle>Email</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="yellow darken-4"> mdi-map-marker </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ userFirstAddress }}t</v-list-item-title>
              <v-list-item-subtitle>{{
                userSecondAddress
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="yellow darken-4"> mdi-human-male </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ userEmployment }}t</v-list-item-title>
              <v-list-item-subtitle>{{ userSkills }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </v-list>
      </v-card>
      <v-skeleton-loader
        v-else
        v-bind="attrs"
        type="image, heading, list-item-three-line, divider, list-item-three-line, divider, list-item-three-line, divider, dlist-item-three-line, divider"
      ></v-skeleton-loader>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="mr-6">{{ greetingText }}</v-toolbar-title>
      <img alt="beer" :src="require('@/assets/beer.png')" class="first-beer" />
      <img alt="beer" :src="require('@/assets/beer.png')" class="second-beer" />
      <v-spacer></v-spacer>
    </v-app-bar>
  </v-container>
</template>

<script>
import Vue from 'vue'
import { userApi } from '@/api'

export default {
  name: 'Navigation',

  components: {
    AvatarComponent: Vue.component('AvatarComponent', {
      render: function (h) {
        let img
        img = h('img', {
          attrs: {
            src: this.src,
            width: 400,
          },
        })
        return img
      },
      props: {
        src: {
          type: String,
          required: true,
        },
      },
    }),
  },

  async created() {
    await this.getUser()
  },

  updated() {
    if (!this.$refs.avatar?.$el.clientHeight) {
      this.avatarIsAvailable = false
    }
  },

  data() {
    return {
      currentUser: null,
      drawer: false,
      avatarIsAvailable: true,
    }
  },

  computed: {
    greetingText() {
      return this.currentUser
        ? `hello, ${this.currentUser.first_name}!`
        : `hello you...`
    },
    userFullName() {
      return this.currentUser
        ? `${this.currentUser.first_name} ${this.currentUser.last_name}`
        : 'Anonymous'
    },
    userPhone() {
      return this.currentUser?.phone_number || `(xxx)-xxx-xx-xx`
    },
    userEmail() {
      return this.currentUser?.email || `xxx@xxx.xx`
    },
    userFirstAddress() {
      return this.currentUser
        ? `${this.currentUser.address.street_address}, ${this.currentUser.address.street_name}`
        : 'someStreet someAddress'
    },
    userSecondAddress() {
      return this.currentUser
        ? `${this.currentUser.address.country}, ${this.currentUser.address.city}, ${this.currentUser.address.state}, ${this.currentUser.address.zip_code}`
        : 'someStreet someAddress'
    },
    userEmployment() {
      return this.currentUser?.employment?.title || `some employment`
    },
    userSkills() {
      return this.currentUser?.employment?.key_skill || `some skills`
    },
  },

  methods: {
    async getUser() {
      this.currentUser = await userApi.getUser()
    },
  },
}
</script>

<style scoped>
.navigation-control {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1000;
}
.full-name {
  word-break: normal;
}
.user-info * {
  word-break: normal;
}
.v-list >>> .v-list-item__icon {
  margin-right: 10px !important;
}
.v-list-item__content >>> .v-list-item__title,
.v-list-item__content >>> .v-list-item__subtitle {
  display: flex !important;
  justify-content: flex-start !important;
  text-align: start;
}
.first-beer {
  transform: rotate(35deg);
}
.second-beer {
  margin-left: 10px;
  transform: rotate(-30deg);
}

@media screen and (min-width: 1264px) {
  .navigation-control {
    display: none;
  }
}
</style>
