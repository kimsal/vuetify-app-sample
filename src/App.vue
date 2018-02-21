<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="menuItem in menuItems" :to="menuItem.url">{{menuItem.title}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
      <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      menuItems:[
        {icon:"",title:"Home", url:"/"},
        {icon:"",title:"About Us", url:"/about-us"},
        {icon:"",title:"Contact", url:"/contact"},
      ]
    }
  },
  name: 'App'
}
</script>
