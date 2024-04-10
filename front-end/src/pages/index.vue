<script setup>
  //
  import * as DBHandler from '../database/db_util'
  import { ref } from 'vue'
  let response = await DBHandler.getAllSeries()
  let seriesData = ref(response['data'])
</script>

<template>
  <AppBar></AppBar>
  <NavBar :navItems="navItems"></NavBar>
  
  <Suspense>
    <v-container>
      <v-row>
      </v-row>
      <v-row >
        <v-col
          v-for="(series, i) in seriesData"
          :key="series.id"
          cols="12"
          sm="8"
          md="4"
          lg="2"
        >
          <SeriesCard :series="seriesData[i]"/>
        </v-col>
      </v-row>
    </v-container>
  </Suspense>
</template>

<style>
</style>


