<script setup>
import * as DBHandler from '../../database/db_util'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

let tab = ref()
let section_detail = ref()
let section_title = ref()

const route = useRoute()
let series_data = ref((await DBHandler.getSingleSeriesByID({ id: route.params.id })).data)
let sections_data = ref((await DBHandler.getSectionsBySeriesTitle({ series_title: series_data.value.title })).data)

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
</script>
<template>
  <NavBar :navItems="navItems"></NavBar>
  <!-- <AppBar></AppBar> -->
  <v-main class="d-flex justify-left hero" style="min-height: 100px;">
    <v-container class="">
      <v-row>
        <v-col align="center" cols="5">
          <v-card :image="series_data.img" height="880" width="600" elevation="24">
          </v-card>
        </v-col>
        <v-col cols="1" align="center"><v-divider vertical></v-divider></v-col>
        <v-col>
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
                            <v-card-text>
                              <v-form>
                                <v-text-field v-model="section_title" prepend-icon="mdi-format-title"
                                  label="Section Name" clearable></v-text-field>
                                <v-text-field v-model="section_detail" prepend-icon="mdi-image-area"
                                  label="Section Detail" clearable></v-text-field>
                              </v-form>
                            </v-card-text>
                            <v-card-actions>
                              <v-btn text="Save" @click="updateSection({ section_id: section.id })"></v-btn>
                              <v-spacer></v-spacer>
                              <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
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
  max-height: 500px;
  /* Set maximum height for card text */
  overflow-y: auto;
  /* Enable vertical scrollbar if text exceeds max height */
}
</style>