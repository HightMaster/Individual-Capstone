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
                        Welcome to Median, your personalized hub for tracking your literary and entertainment adventures. Whether you're an avid reader, a binge-watcher, or a dedicated series enthusiast, our platform is designed to help you stay organized and engaged with all your favorite books, shows, and series.

At Median, we understand the thrill of discovering a new story and the joy of diving deep into familiar worlds. Our mission is to enhance your entertainment experience by providing intuitive tools that allow you to keep tabs on what you've consumed, discover new gems, and connect with fellow enthusiasts.

What sets us apart:

Versatility: Track books, TV shows, and series all in one place. No need for multiple apps—manage everything seamlessly.

Personalization: Customize your lists, ratings, and reviews to reflect your unique tastes and preferences. Our platform adapts to you.

Insights: Gain valuable insights into your reading and viewing habits. 

Whether you're a casual reader, a dedicated binge-watcher, or someone who loves exploring new series, Median is here to enrich your entertainment journey. Join us today and start tracking your adventures in a whole new way.







                    </p>
                    <p class="about-description">
                        Median—because every story deserves to be remembered
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