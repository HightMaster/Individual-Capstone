<template>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-img
        height="200px"
        :src="series[0].img"
        cover
      ></v-img>
  
      <v-card-title>
        Top western road trips
      </v-card-title>
  
      <v-card-subtitle>
        1,000 miles of wonder
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          variant="text"
        >
          Details
        </v-btn>
  
        <v-spacer></v-spacer>
        <v-btn icon="mdi-minus"></v-btn>
        <v-btn icon="mdi-plus"></v-btn>
    
        <v-btn
          :icon="liked ? 'mdi-thumb-up' : 'mdi-thumb-up-outline'"
          @click="liked = !liked"
        ></v-btn>
        
      </v-card-actions>
  
      <v-expand-transition>
        <div v-if="liked">
          <v-divider :thickness="1" color=""info></v-divider>
          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </template>
  <script setup>
    import { ref } from 'vue'
    let props = defineProps(['series'])
    let liked = defineModel(false)
  </script>