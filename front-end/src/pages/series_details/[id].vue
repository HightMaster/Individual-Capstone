<script setup>
    import * as DBHandler from '../../database/db_util'
    import { useRoute } from 'vue-router'
    let navItems = [
    {
      route: "/",
      icon: "mdi-home",
      text: "Home"
    },
    {
      route: "/about",
      icon: "mdi-pencil",
      text: "About"
    }
  ]
    const route = useRoute()
    let series_data = (await DBHandler.getSingleSeriesByID({id: route.params.id})).data
    let sections_data = (await DBHandler.getSectionsBySeriesTitle({series_title: series_data.title})).data
</script>
<template>
    <NavBar :navItems="navItems"></NavBar>
    <h1>Testing Series details page {{ series_data.title }}</h1>
</template>
