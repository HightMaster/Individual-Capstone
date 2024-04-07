<script setup>
    import * as DBHandler from '../../database/db_util'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    let series_data = (await DBHandler.getSingleSeriesByID({id: route.params.id})).data
    let sections_data = (await DBHandler.getSectionsBySeriesTitle({series_title: series_data.title})).data
    console.log(sections_data)
</script>
<template>
    <h1>Testing Series details page {{ series_data.title }}</h1>
</template>
