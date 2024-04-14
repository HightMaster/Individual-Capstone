<script setup>
//
import * as DBHandler from '../database/db_util'
import { ref } from 'vue'
let seriesData = ref((await DBHandler.getAllSeries()).data)

let create_title = ref()
let image_url = ref()
let description = ref()
let rating = ref()
let section_count = ref()
let section_type = ref()
let wiki_link = ref()
let sortSelection = ref("Sort")
let filterSelection = ref("Filter")
let search = ref("")

async function updateSeriesData() {
  let newData = (await DBHandler.getAllSeries()).data
  seriesData.value = newData
  console.log("Data updated")
}

async function sortSeries(sort) {
  this.sortSelection = sort
  console.log(this.sortSelection)
  // //console.log(sortSelection.value)
  // console.log(sort)
  if (this.sortSelection.toLowerCase() == "rating") {
    seriesData.value = await (await DBHandler.getAllSeries("-rating")).data
  } else if (this.sortSelection.toLowerCase() == "newest") {
    seriesData.value = await (await DBHandler.getAllSeries("-created")).data
  } else if (this.sortSelection.toLowerCase() == "oldest") {
    seriesData.value = await (await DBHandler.getAllSeries("+created")).data
  }
}

async function searchItems(query) {
  let old_data = await (await DBHandler.getAllSeries()).data
  let new_data = []
  if (query === "" || query == null) {
    console.log("Empty query")
    seriesData.value = old_data
    return
  }
  for (let seriesIndex in old_data) {
    let series = old_data[seriesIndex]
    if (series.title.toLowerCase().includes(query.toLowerCase()) || series.description.toLowerCase().includes(query.toLowerCase())) {
      new_data.push(series)
      console.log(new_data)
    }
  }
  seriesData.value = new_data
  console.log("Search")
}

async function filterSeries(filter) {
  let old_data = await (await DBHandler.getAllSeries()).data
  let new_data = []
  if (filter === "" || filter == null || !(filterItems.includes(filter))) {
    console.log("Empty filter")
    return
  }
  for (let seriesIndex in old_data) {
    let series = old_data[seriesIndex]
    if (filter.toLowerCase() == "favorites") {
      if (series.liked) {
        new_data.push(series)
      }
    }
  }
  seriesData.value = new_data
  console.log("filter")
}

async function createSeries() {
  await DBHandler.createSeries({ title: create_title.value, img: image_url.value, description: description.value, rating: rating.value, section_count: section_count.value, section_type: section_type.value, wiki_link: wiki_link.value })
  await updateSeriesData()
}

let sortItems = [
  "Newest",
  "Oldest",
  "Rating"
]

let filterItems = [
  "Favorites",
]

</script>

<template>
  <NavBar :navItems="navItems"></NavBar>
  <Suspense>
    <v-container>
      <v-row justify="center">
        <v-col align="right">
          <v-btn color="blue-darken-1" variant="text" @click="filterSeries('Favorites')" size="large">
            Favorites
          </v-btn>
        </v-col>
        <v-col>
          <v-text-field v-model="search" placeholder="Search" variant="solo-filled" hide-details clearable
            class="custom-text-field" @keydown.enter="searchItems(search)">
            <!-- Inner clickable icon using the append-inner-icon slot -->
            <template #append-inner>
              <v-btn icon="mdi-magnify" variant="text" @click="searchItems(search)"></v-btn>
            </template>
          </v-text-field>
        </v-col>
        <v-col align="left">
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" color="orange-darken-3" variant="text" size="large" icon="mdi-filter">
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in sortItems" :key="index" v-model="sortSelection"
                @click="sortSeries(item)">{{
    item }}
                <!-- <v-list-item-title @click="sortSeries(item)">{{ item }}</v-list-item-title> -->
              </v-list-item>
            </v-list>
          </v-menu>
          <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <!-- <v-btn v-bind="activatorProps" color="orange-darken-3" variant="text">Create</v-btn> -->
              <v-btn v-bind="activatorProps" icon="mdi-plus" variant="text" color="orange-darken-3" size="large">
              </v-btn>
            </template>
            <template v-slot:default="{ isActive }">
              <v-card title="Create New Series">
                <v-btn icon @click="isActive.value = false" class="close-button">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-card-text>
                  <v-form>
                    <v-text-field v-model="create_title" prepend-icon="mdi-format-title" label="Series title"
                      clearable></v-text-field>
                    <v-text-field v-model="image_url" prepend-icon="mdi-image-area" label="Image link"
                      hint="Must be valid image URL" clearable></v-text-field>
                    <v-text-field v-model="rating" prepend-icon="mdi-star" label="Rating" hint="Must be between 0-10"
                      clearable></v-text-field>
                    <v-text-field v-model="section_count" prepend-icon="mdi-pound" label="Section Count"
                      hint="Amount of parts in the series" clearable></v-text-field>
                    <v-text-field v-model="section_type" prepend-icon="mdi-book-account" label="Type of Sections"
                      hint="Season, Book, Episode etc." clearable></v-text-field>
                    <v-text-field v-model="wiki_link" prepend-icon="mdi-link" label="Wiki Link"
                      clearable></v-text-field>
                    <v-textarea v-model="description" label="Series Description" variant="solo-filled"
                      :counter="700"></v-textarea>
                  </v-form>
                </v-card-text>

                <v-card-actions>
                  <v-btn text="Create" @click="createSeries"></v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>

      </v-row>
      <v-row>
        <v-col v-for="(series, i) in seriesData" :key="series.id" cols="12" sm="8" md="4" lg="2">
          <SeriesCard :series="seriesData[i]" @updateCards="updateSeriesData()" />
        </v-col>
      </v-row>
    </v-container>
  </Suspense>
</template>

<style scoped>
.hero {
  position: relative;
  background: url('../../assets/5137894.jpg');
  background-size: cover;
  display: block;
  content: '';
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

.search {
  border-radius: 20px;
}
</style>
