<template>
    <v-app>
        <!-- Dark themed background -->
        <NavBar></NavBar>
        <v-main class="dark-background">
            <v-container>
                <!-- Page content -->
                <div class="about-content">
                    <h1 class="about-title">About Us</h1>
                    <p class="about-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p class="about-description">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </p>
                </div>
            </v-container>
        </v-main>
        <v-footer class="dark-footer">
            <v-container>
                <v-row>
                    <v-col cols="12" md="12" class="text-center">
                        <v-btn icon class="social-icon">
                            <v-icon size="24">mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn icon class="social-icon">
                            <v-icon size="24">mdi-twitter</v-icon>
                        </v-btn>
                        <v-btn icon class="social-icon">
                            <v-icon size="24">mdi-instagram</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    // Vue component options
};
</script>

<style scoped>
.dark-background {
    background-color: #121212;
    /* Dark background color */
    color: #ffffff;
    /* Text color */
}

.about-content {
    padding: 40px;
    /* Add padding to the content */
    text-align: center;
    /* Center align content */
}

.about-title {
    font-size: 2.5rem;
    /* Large title font size */
    margin-bottom: 20px;
    /* Bottom margin for title */
}

.about-description {
    font-size: 1.2rem;
    /* Description font size */
    line-height: 1.6;
    /* Line height for better readability */
}

.dark-footer {
    background-color: #212121;
    /* Dark footer background color */
    color: #ffffff;
    /* Footer text color */
    padding-top: 20px;
    /* Add top padding to footer */
    padding-bottom: 20px;
    /* Add bottom padding to footer */
    max-height: 5%;
}

.footer-text {
    font-size: 1rem;
    /* Footer text font size */
}

.social-icon {
    color: #ffffff;
    /* Social icon color */
    margin-left: 10px;
    /* Add margin between social icons */
}
</style>