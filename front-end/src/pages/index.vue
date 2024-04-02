<script setup>
  //
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
        <SeriesCard imgLink="https://picsum.photos/200/300"/>
      </v-col>
    </v-row>
  </v-container>
  
</template>


