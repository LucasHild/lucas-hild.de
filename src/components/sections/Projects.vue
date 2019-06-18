<template>
    <section class="projects" id="projects">
        <h2>
            <span class="secondary mono">03.</span>
            Projects
        </h2>

        <FeaturedProject
            v-for="(project, index) in featuredProjects"
            :project="project"
            :key="project.title"
            :swapImageAndContent="index % 2 != 0"
        />

        <div class="button-wrapper">
            <a href="https://github.com/Lanseuo" class="button" target="_blank">More Projects</a>
        </div>
    </section>
</template>

<script>
import FeaturedProject from '@/components/FeaturedProject'

export default {
    name: 'projects',

    components: { FeaturedProject },

    data() {
        return {
            featuredProjects: [
                {
                    title: 'schoolsen',
                    text: 'In 2018 three friends and me founded a German startup called schoolsen. We provide a platform to schools that helps students to gain information about their school comfortably using our app.',
                    image: require('@/assets/images/schoolsen.webp'),
                    technologies: ['Python', 'Flask', 'Docker', 'Vue.js'],
                    externalURL: 'https://schoolsen.de'
                },
                {
                    title: 'ReVue',
                    text: 'A simple Reddit clone built with Vue.js and Flask. The application supports "Subvues", Posts, Voting, User-Managment and more.',
                    image: require('@/assets/images/revue.webp'),
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