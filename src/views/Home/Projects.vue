<template>
    <section class="projects">
        <div class="container">
            <h2>Projekte</h2>
            <FeaturedProject v-for="(project, index) in projects" :project="project" :swapImageAndContent="index % 2 != 0" :key="project.title"  />
        </div>
    </section>
</template>

<script>
import FeaturedProject from '@/views/Home/FeaturedProject'

export default {
    name: 'projects',

    components: { FeaturedProject },

    data() {
        return {
            projects: [
                {
                    title: 'schoolsen',
                    text: 'In 2018 three friends and me founded a German startup called schoolsen. We provide a platform to schools that helps students to gain information about their school comfortably using our app.',
                    image: require('@/assets/img/schoolsen.webp'),
                    technologies: ['Python', 'Flask', 'Docker', 'Vue.js'],
                    externalURL: 'https://schoolsen.de'
                },
                {
                    title: 'ReVue',
                    text: 'A simple Reddit clone built with Vue.js and Flask. The application supports "Subvues", Posts, Voting, User-Managment and more.',
                    image: require('@/assets/img/revue.webp'),
                    technologies: ['Vue.js', 'Vuex', 'Python', 'MongoDB'],
                    githubURL: 'https://github.com/Lanseuo/revue'
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>