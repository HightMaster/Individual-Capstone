<script setup>

</script>

<template>
    <v-app-bar :elevation="0">
    <template v-slot:image>
        <v-img
            gradient="to top right, rgba(255, 255, 255, 0.05), rgba(0,0,0,5)"
        ></v-img>
    </template>
    <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Median</v-app-bar-title>

    <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
    </v-app-bar>
</template>