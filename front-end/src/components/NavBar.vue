<template>
    <v-navigation-drawer expand-on-hover rail>
        <v-list density="compact">
            <v-list-subheader>Navigation</v-list-subheader>
            
            <v-list-item
                v-for="(item, i) in navItems"
                :key="i"
                :value="item"
                color="primary"
                :to="{path: item.route}"
            >
                <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                </template>

                <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
    //const props = defineProps(['navItems'])

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
</script>