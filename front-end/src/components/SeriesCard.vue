<script setup>
  import { ref } from 'vue'
  import * as DBHandler from '../database/db_util'
  import { watch } from 'vue';
  //let props = defineProps(['series'])
  let props = defineProps({series: Object})
  let liked = ref(props.series.liked)

  async function toggle(){
    await DBHandler.toggleLiked({series_id: props.series.id})
    this.liked = !this.liked
  }

  // async function getLiked(){
  //   return (await DBHandler.getSingleSeriesByID({series_id: props.series.id})).data.liked
  // }
</script>

<template>
    <v-card
      class="mx-auto"
      max-width="344"
      elevation="13"
    >
      <router-link :to="'/series_details/' + series.id">
        <v-img
          height="300px"
          :src="series.img"
          lazy-src="https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg"
          aspect-ratio="4/3"
          cover
        ></v-img>
      </router-link>
      <v-card-title>
        {{ series.title }}
      </v-card-title>
  
      <v-card-subtitle>
        {{ series.description }}
      </v-card-subtitle>
      
      <v-card-actions>
        <v-dialog max-width="600">
          <template v-slot:activator="{ props: activatorProps}">
              <v-btn
                color="orange-lighten-2"
                variant="text"
                v-bind="activatorProps"
              >
                Edit
              </v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card :title="series.title">
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="mdi-format-title" label="Series title" clearable
                  ></v-text-field>
                  <v-text-field prepend-icon="mdi-image-area" label="Image link" hint="Must be valid image URL" clearable
                  ></v-text-field>
                  <v-text-field prepend-icon="mdi-image-text" label="Description" clearable
                  ></v-text-field>
                  <v-text-field prepend-icon="mdi-star" label="Rating" hint="Must be between 0-10" clearable
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  class="me-4"
                  type="submit"
                >
                  Save
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  icon="mdi-fullscreen-exit"
                  text="Close"
                  @click="isActive.value = false"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
        <v-spacer></v-spacer>
        {{ series.rating }}/10
        <v-btn
          :icon="liked ? 'mdi-heart' : 'mdi-heart-outline'"
          @click="toggle()"
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
