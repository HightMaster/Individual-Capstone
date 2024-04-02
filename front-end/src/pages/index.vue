<script setup>
  //
  let seriesData = [
    {
      title:"Avatar The Last Airbender",
      liked: true,
      rating: 10,
      description:"Very Cool animated series",
      img:"https://foreveryoungadult.com/wp-content/uploads/2021/10/Avatar-the-last-Airbender-Cover.jpg"
    }
  ]
</script>

<template>
  <v-container>
    <v-row >
      <v-col
        v-for="n in 12"
        :key="n"
        cols="12"
        sm="4"
      >
        <SeriesCard :series="seriesData"/>
      </v-col>
    </v-row>
  </v-container>
  
</template>


