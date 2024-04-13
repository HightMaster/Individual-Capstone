<script setup>
    import * as DBHandler from '../../database/db_util'
    import { useRoute } from 'vue-router'
    import { ref } from 'vue'
  
    const route = useRoute()
    let series_data = (await DBHandler.getSingleSeriesByID({id: route.params.id})).data
    let sections_data = (await DBHandler.getSectionsBySeriesTitle({series_title: series_data.title})).data
</script>
<template>
    <NavBar :navItems="navItems"></NavBar>
    <!-- <AppBar></AppBar> -->
    <v-main class="d-flex align-center justify-left" style="min-height: 100px;">
      <v-container class="">
        <v-row>
          <v-col>
            <h1>Testing Series details page {{ series_data.title }}</h1>
            <h1>Testing Series details page {{ series_data.title }}</h1>
            <h1>Testing Series details page {{ series_data.title }}</h1>
            <h1>Testing Series details page {{ series_data.title }}</h1>
            <h1>Testing Series details page {{ series_data.title }}</h1>
            <h1>Testing Series details page {{ series_data.title }}</h1>
            <h1>Testing Series details page {{ series_data.title }}</h1>
            <h1>Testing Series details page {{ series_data.title }}</h1>
            <h1>Testing Series details page {{ series_data.title }}</h1>
            <h1>Testing Series details page {{ series_data.title }}</h1>
            <h1>Testing Series details page {{ series_data.title }}</h1>
            <h1>Testing Series details page {{ series_data.title }}</h1>
            <h1>Testing Series details page {{ series_data.title }}</h1>
            <h1>Testing Series details page {{ series_data.title }}</h1>
            <h1>Testing Series details page {{ series_data.title }}</h1>
          </v-col>
          <v-col cols="2" align="center"><v-divider vertical></v-divider></v-col>
          <v-col >
            <h1>Testing Series details page {{ series_data.title }}</h1>
          </v-col>
        </v-row>      
      </v-container>
    </v-main>
    
</template>

<style>
.bg {
    width: 100%;
    height: 100%;
    /* position: absolute; */
    background: url( '../../assets/solid-concrete-wall-textured-backdrop.jpg') center center;
    background-size: cover;
    transform: scale(1.1);
  }
</style>