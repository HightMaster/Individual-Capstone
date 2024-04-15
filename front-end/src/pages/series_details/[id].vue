<script setup>
import * as DBHandler from '../../database/db_util'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

let tab = ref()
let section_detail = ref()
let section_title = ref()
//Data for generic series info


const route = useRoute()
let series_data = ref((await DBHandler.getSingleSeriesByID({ id: route.params.id })).data)
let sections_data = ref((await DBHandler.getSectionsBySeriesTitle({ series_title: series_data.value.title })).data)

let series_description = ref(series_data.value.description)
let series_title = ref(series_data.value.title)
let series_img = ref(series_data.value.img)
let goodreads_link = ref(series_data.value.goodreads_link)
let wiki_link = ref(series_data.value.wiki_link)
let imdb_link = ref(series_data.value.imdb_link)
let flexible_link = ref(series_data.value.flexibile_link)
let series_rating = ref(series_data.value.rating)
let rotten_tomatoes_link = ref(series_data.value.rotten_tomatoes_link)
let genre = ref(series_data.value.genre)
let latest_position = ref(series_data.value.latest_position)

async function updateSection({ section_id }) {
  await DBHandler.updateSectionByID({ section_id: section_id, details: section_detail.value, name: section_title.value })
  console.log("Section has been succesfully updated")
  refreshList()
}

async function refreshList() {
  let new_data = (await DBHandler.getSectionsBySeriesTitle({ series_title: series_data.value.title })).data
  sections_data.value = new_data
  console.log("Sections data updated")
}

function updateFieldValues({ title, detail }) {
  section_detail.value = detail
  section_title.value = title
}

async function submit() {
  await DBHandler.updateSeries({ series_id: route.params.id, genre: genre.value, latest_position: latest_position.value, flexible_link: flexible_link.value, imdb_link: imdb_link.value, goodreads_link: goodreads_link.value, wiki_link: wiki_link.value, rotten_tomatoes_link: rotten_tomatoes_link.value, title: series_title.value, img: series_img.value, description: series_description.value, rating: series_rating.value })
  series_data.value = (await DBHandler.getSingleSeriesByID({ id: route.params.id })).data
  console.log("Submit sent")
}
</script>
<template>
  <NavBar></NavBar>
  <!-- <AppBar></AppBar> -->
  <v-main class="d-flex justify-left hero" style="min-height: 100px;">
    <v-container class="">
      <v-row>
        <v-col align="center" cols="5">
          <v-card :image="series_data.img" height="880" width="600" elevation="24" class="gradient-overlay">
            <v-card-actions>
              <v-btn color="grey-lighten-3" icon :href="goodreads_link" target="_blank" rel="noopener noreferrer">
                <v-icon>mdi-book-account</v-icon> <!-- Replace mdi-link with your desired icon -->
              </v-btn>
              <v-btn color="grey-lighten-3" icon :href="wiki_link" target="_blank" rel="noopener noreferrer">
                <v-icon>mdi-wikipedia</v-icon> <!-- Replace mdi-link with your desired icon -->
              </v-btn>
              <v-btn color="grey-lighten-3" icon :href="rotten_tomatoes_link" target="_blank" rel="noopener noreferrer">
                <v-icon>mdi-fruit-watermelon</v-icon> <!-- Replace mdi-link with your desired icon -->
              </v-btn>
              <v-btn color="grey-lighten-3" icon :href="imdb_link" target="_blank" rel="noopener noreferrer">
                <v-icon>mdi-youtube-tv</v-icon> <!-- Replace mdi-link with your desired icon -->
              </v-btn>
              <v-btn color="grey-lighten-3" icon :href="flexible_link" target="_blank" rel="noopener noreferrer">
                <v-icon>mdi-link-variant</v-icon> <!-- Replace mdi-link with your desired icon -->
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="grey-darken-2" rounded="xl" variant="elevated">
                {{ genre }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="1" align="center"><v-divider vertical thickness="2"></v-divider></v-col>
        <v-col>
          <div class="max-height-column">
            <v-card color="grey-darken-4" class="mx-auto my-8 rounded-card" elevation="16" max-width="600">
              <!-- Card header -->
              <v-card-title>
                <div class="text-center">Last Position: {{ series_data.latest_position }}</div>
              </v-card-title>
              <v-card-subtitle>
                <div class="text-center">{{ series_data.title }}</div>
              </v-card-subtitle>

              <!-- Divider -->
              <v-divider></v-divider>

              <!-- Card content -->
              <v-card-text class="card-text-details">
                {{ series_data.description }}
              </v-card-text>
              <v-card-actions>
                <v-dialog max-width="500">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn color="blue-darken-2" variant="text" v-bind="activatorProps" @click="">
                      Edit
                    </v-btn>
                  </template>
                  <template v-slot:default="{ isActive }">
                    <v-card title="Series Details" class="card-with-close-button">
                      <v-btn icon @click="isActive.value = false" class="close-button">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <v-card-text>
                        <v-form>
                          <v-text-field v-model="series_title" prepend-icon="mdi-format-title" label="Series title"
                            clearable></v-text-field>
                          <v-text-field v-model="series_img" prepend-icon="mdi-image-area" label="Image link"
                            hint="Must be valid image URL" clearable></v-text-field>
                          <v-text-field v-model="series_rating" prepend-icon="mdi-star" label="Rating"
                            hint="Must be between 0-10" clearable></v-text-field>
                          <v-text-field v-model="genre" prepend-icon="mdi-book" label="Genre" hint="Should be one word"
                            clearable></v-text-field>
                          <v-text-field v-model="latest_position" prepend-icon="mdi-bookmark" label="Latest Position"
                            hint="Should be one word" clearable></v-text-field>
                          <v-text-field v-model="goodreads_link" prepend-icon="mdi-book-account" label="Goodreads Link"
                            clearable></v-text-field>
                          <v-text-field v-model="wiki_link" prepend-icon="mdi-wikipedia" label="Wiki Link"
                            clearable></v-text-field>
                          <v-text-field v-model="rotten_tomatoes_link" prepend-icon="mdi-fruit-watermelon"
                            label="Rotten Tomatoes Link" clearable></v-text-field>
                          <v-text-field v-model="imdb_link" prepend-icon="mdi-youtube-tv" label="imdb Link"
                            clearable></v-text-field>
                          <v-text-field v-model="flexible_link" prepend-icon="mdi-link-variant" label="Flexible Link"
                            clearable></v-text-field>
                          <v-textarea v-model="series_description" label="Series Description" variant="solo-filled"
                            :counter="700"></v-textarea>
                        </v-form>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn text="Save" @click="submit()"></v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-card-actions>
            </v-card>
            <v-container fluid class="full-height">
              <v-carousel show-arrows="hover" hide-delimiters style="height: 800px">
                <template v-for="(section, i) in sections_data" :key="section.id">
                  <v-carousel-item>
                    <v-card color="grey-darken-4" class="mx-auto my-8 rounded-card" elevation="16" max-width="600">
                      <v-card-item>
                        <v-card-title>
                          {{ section.name }}
                        </v-card-title>
                      </v-card-item>
                      <v-card-text class="card-text">
                        <!-- Apply custom class 'card-text' for styling -->
                        {{ section.details }}
                      </v-card-text>
                      <v-card-actions>
                        <v-dialog max-width="500">
                          <template v-slot:activator="{ props: activatorProps }">
                            <v-btn color="blue-darken-2" variant="text" v-bind="activatorProps"
                              @click="updateFieldValues({ title: section.name, detail: section.details })">
                              Edit
                            </v-btn>
                          </template>
                          <template v-slot:default="{ isActive }">
                            <v-card title="Section Info">
                              <v-btn icon @click="isActive.value = false" class="close-button">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                              <v-card-text>
                                <v-form>
                                  <v-text-field v-model="section_title" prepend-inner-icon="mdi-format-title"
                                    label="Section Name" clearable></v-text-field>
                                  <!-- <v-text-field v-model="section_detail" prepend-icon="mdi-image-area" :rows=7 multi-line :counter="700"
                                  label="Section Detail" clearable></v-text-field> -->
                                  <v-textarea v-model="section_detail" label="Section Detail" variant="solo-filled"
                                    :counter="700"></v-textarea>
                                </v-form>
                              </v-card-text>
                              <v-card-actions>
                                <v-btn text="Save" @click="updateSection({ section_id: section.id })"></v-btn>
                                <v-spacer></v-spacer>
                              </v-card-actions>
                            </v-card>
                          </template>
                        </v-dialog>
                      </v-card-actions>
                    </v-card>
                  </v-carousel-item>
                </template>
              </v-carousel>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>

</template>

<style scoped>
.hero {
  position: relative;
  background: url('../../assets/5137894.jpg');
  background-size: cover;
  display: block;
  content: '';
}

.rounded-card {
  border-radius: 12px;
}

.card-text {
  max-height: 300px;
  /* Set maximum height for card text */
  overflow-y: auto;
  /* Enable vertical scrollbar if text exceeds max height */
}

.circular-tag {
  border-radius: 12px;
  /* Make border radius large for a circular shape */
  padding: 8px 16px;
  /* Adjust padding according to your needs */
  text-transform: uppercase;
  /* Example: Convert label text to uppercase */
}

.card-text-details {
  max-height: 250px;
  /* Set maximum height for card text */
  overflow-y: auto;
  /* Enable vertical scrollbar if text exceeds max height */
}

.card-with-close-button {
  position: relative;
  /* Set position relative to contain absolute-positioned button */
}

.close-button {
  position: absolute;
  top: 8px;
  right: 8px;
}

.gradient-overlay {
  position: relative;
  /* Set position relative to contain absolutely positioned pseudo-element */
}

.gradient-overlay::before,
.gradient-overlay::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 50%; /* Each pseudo-element covers half of the container */
}

.gradient-overlay::before {
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
}

.gradient-overlay::after {
    bottom: 0;
    left: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 100%);
}

.max-height-column {
  max-height: 880px;
  /* Adjust the maximum height as needed */
  overflow-y: auto;
  /* Add vertical scrollbar when content exceeds maximum height */
}
</style>