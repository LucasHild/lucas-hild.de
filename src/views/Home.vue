<template>
    <div class="home">
        <Header/>
        <AboutMe/>
        <Blog/>
        <Projects/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import AboutMe from '@/components/sections/AboutMe'
import Blog from '@/components/sections/Blog'
import Projects from '@/components/sections/Projects'

export default {
    name: 'home',

    components: { Header, AboutMe, Blog, Projects }
}
</script>
