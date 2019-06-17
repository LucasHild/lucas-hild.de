<template>
    <div class="home">
        <Header/>
        <AboutMe/>
        <Blog/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import AboutMe from '@/components/sections/AboutMe'
import Blog from '@/components/sections/Blog'

export default {
    name: 'home',

    components: { Header, AboutMe, Blog }
}
</script>
