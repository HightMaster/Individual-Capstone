<script setup>
  //
  import * as DBHandler from '../database/db_util'
  
  let response = await DBHandler.getAllSeries()
  let seriesData = response['data']
  let navItems = [
    {
      route: "/",
      icon: "mdi-home",
      text: "Home"
    },
    {
      route: "/about",
      icon: "mdi-pencil",
      text: "About"
    }
  ]
</script>

<template>

  <NavBar :navItems="navItems"></NavBar>
  <Suspense>
    <v-container>
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


