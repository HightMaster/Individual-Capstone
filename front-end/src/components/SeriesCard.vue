<script setup>
import { ref } from 'vue'
import * as DBHandler from '../database/db_util'
import { watch } from 'vue';
//let props = defineProps(['series'])
let props = defineProps({ series: Object })
let emit = defineEmits(['updateCards'])
let liked = ref(props.series.liked)
let series_title = ref(props.series.title)
let series_img = ref(props.series.img)
let series_description = ref(props.series.description)
let series_rating = ref(props.series.rating)

async function deleteItem(series_id) {
  console.log(series_id)
  await DBHandler.deleteSeries({ series_id: series_id })
  console.log("series Deleted")
  emit('updateCards')
}

async function toggle() {
  await DBHandler.toggleLiked({ series_id: props.series.id })
  this.liked = !this.liked
}

async function submit() {
  await DBHandler.updateSeries({ series_id: props.series.id, title: series_title.value, img: series_img.value, description: series_description.value, rating: series_rating.value })
  emit('updateCards')
  console.log("Submit sent")
}

// async function getLiked(){
//   return (await DBHandler.getSingleSeriesByID({series_id: props.series.id})).data.liked
// }
</script>

<template>
  <v-card class="mx-auto" max-width="344" elevation="13">
    <router-link :to="'/series_details/' + series.id">
      <v-img height="300px" :src="series_img"
        lazy-src="https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg"
        aspect-ratio="4/3" cover></v-img>
    </router-link>
    <v-card-title>
      {{ series.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ series.description }}
    </v-card-subtitle>

    <v-card-actions>
      <v-dialog max-width="600">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn color="blue-lighten-1" variant="text" v-bind="activatorProps">
            Edit
          </v-btn>
          <v-btn color="red-darken-3" variant="text" @click="deleteItem(series.id)">
            Delete
          </v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card :title="series_title" class="card-with-close-button">
            <v-btn icon @click="isActive.value = false" class="close-button">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-card-text>
              <v-form>
                <v-text-field v-model="series_title" prepend-icon="mdi-format-title" label="Series title"
                  clearable></v-text-field>
                <v-text-field v-model="series_img" prepend-icon="mdi-image-area" label="Image link"
                  hint="Must be valid image URL" clearable></v-text-field>
                <v-text-field v-model="series_rating" prepend-icon="mdi-star" label="Rating" hint="Must be between 0-10"
                  clearable></v-text-field>
                <v-textarea v-model="series_description" label="Series Description" variant="solo-filled"
                  :counter="700"></v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn class="me-4" type="submit" @click="submit">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <v-spacer></v-spacer>
      {{ series.rating }}/10
      <v-btn :icon="liked ? 'mdi-heart' : 'mdi-heart-outline'" @click="toggle()"></v-btn>

    </v-card-actions>

    <!-- <v-expand-transition>
        <div v-if="liked">
          <v-divider :thickness="1" color=""info></v-divider>
          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition> -->
  </v-card>
</template>

<style scoped>
.card-with-close-button {
  position: relative;
  /* Set position relative to contain absolute-positioned button */
}

.close-button {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
