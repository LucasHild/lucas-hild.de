<template>
    <div class="home">
        <HeaderComponent />

        <About />
        <Blog class="dark-section" />
        <Projects />
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import About from '@/views/Home/About'
import Blog from '@/views/Home/Blog'
import Projects from '@/views/Home/Projects'

export default {
    name: 'home',

    components: { HeaderComponent, About, Blog, Projects }
}
</script>
