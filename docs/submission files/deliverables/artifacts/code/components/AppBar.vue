<script setup>

</script>

<template>
    <v-app-bar :elevation="0">
    <template v-slot:image>
        <v-img
            gradient="to top, rgba(255, 255, 255, 0.05), rgba(0,0,0,5)"
        ></v-img>
        
    </template>
    <template v-slot:prepend>
        
    </template>
    <v-text-field
        v-model="search"
        placeholder="Search"
        variant="solo-filled"
        prepend-inner-icon="mdi-magnify"
        hide-details
        clearable
    ></v-text-field>
    
    <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
        
    </template>
    </v-app-bar>
</template>

<style scoped>

</style>