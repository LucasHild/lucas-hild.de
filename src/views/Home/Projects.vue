<template>
    <section class="projects" id="projects">
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
                    text: 'Im Jahr 2018 haben drei Freunde und ich das Start Up <a href="https://schoolsen.de" target="_blank">schoolsen</a> gegründet. Wir bieten Schulen eine Plattform an, welche Schüler*innen in ihrem Schulalltag hilft. Diese können Informationen bequem über eine App abrufen.',
                    image: require('@/assets/img/schoolsen.webp'),
                    technologies: ['Python', 'Flask', 'Docker', 'Vue.js'],
                    externalURL: 'https://schoolsen.de'
                },
                {
                    title: 'ReVue',
                    text: 'Ein Reddit-Clone, welchen ich mit Vue.js und Flask gebaut habe. Die Applikation beinhaltet "Subvues", Posts, Votings, User-Managment und mehr.',
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