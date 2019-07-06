<template>
    <div class="home">
        <HeaderComponent />

        <About />
        <Blog class="dark-section" />
        <Projects />
        <Contact class="dark-section" />
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import About from '@/views/Home/About'
import Blog from '@/views/Home/Blog'
import Projects from '@/views/Home/Projects'
import Contact from '@/views/Home/Contact'

export default {
    name: 'home',

    components: { HeaderComponent, About, Blog, Projects, Contact }
}
</script>
