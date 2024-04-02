<script setup>
  //
  let seriesData = [
    {
      title:"Avatar The Last Airbender",
      liked: true,
      rating: 8,
      description:"Very Cool animated series",
      img:"https://foreveryoungadult.com/wp-content/uploads/2021/10/Avatar-the-last-Airbender-Cover.jpg"
    },
    {
      title:"Breaking Bad",
      liked: true,
      rating: 10,
      description: "Epic thriller about a man going down the path of drugs for money",
      img:"https://www.coverwhiz.com/uploads/tv/breaking-bad-season-2.jpg"
    },
    {
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
  
</template>


