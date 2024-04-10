<script setup>
    import * as DBHandler from '../../database/db_util'
    import { useRoute } from 'vue-router'
  
    const route = useRoute()
    let series_data = (await DBHandler.getSingleSeriesByID({id: route.params.id})).data
    let sections_data = (await DBHandler.getSectionsBySeriesTitle({series_title: series_data.title})).data
</script>
<template>
    <AppBar></AppBar>
    <NavBar :navItems="navItems"></NavBar>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <h1>Testing Series details page {{ series_data.title }}</h1>
    </v-main>
    
</template>
