<script setup>
  //
  import * as DBHandler from '../database/db_util'
  
  let response = await DBHandler.getSeries()
  let seriesData = response['data']

  let seriesData1 = [
    {
      id: "asdfafsd",
      title:"Avatar The Last Airbender",
      liked: true,
      rating: 8,
      description:"Very Cool animated series",
      img:"https://foreveryoungadult.com/wp-content/uploads/2021/10/Avatar-the-last-Airbender-Cover.jpg"
    },
    {
      id: "asdfafsd11",
      title:"Breaking Bad",
      liked: true,
      rating: 10,
      description: "Epic thriller about a man going down the path of drugs for money",
      img:"https://www.coverwhiz.com/uploads/tv/breaking-bad-season-2.jpg"
    },
    {
      id: "asdfafsd867",
      title:"The 100",
      liked: false,
      rating: 7,
      description:"An incredible survival thriller about humans after an apocalypse",
      img:"https://pbs.twimg.com/media/CumMf0GWgAAOsjJ?format=jpg&name=4096x4096"
    }
  ]

  let navItems = [
    {
      text: "About",
      icon: "mdi-information",
      route: "/about"
    }
  ]
</script>

<template>

  <NavBar :navItems="navItems"></NavBar>
  <Suspense>
    <v-container>
      <v-row >
        <v-col
          v-for="series in seriesData"
          :key="series.title"
          cols="12"
          sm="2"
        >
          <SeriesCard :series="series"/>
        </v-col>
      </v-row>
    </v-container>
  </Suspense>
</template>


