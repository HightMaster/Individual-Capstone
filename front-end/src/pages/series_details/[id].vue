<script setup>
    import * as DBHandler from '../../database/db_util'

    let response = await DBHandler.getSeries()
    let seriesData = response['data']
    console.log(seriesData)
</script>
<template>
    <h1>Testing Series details page {{ seriesData[0].title }}</h1>
</template>
