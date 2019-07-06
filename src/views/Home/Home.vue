<template>
    <div class="home">
        <HeaderComponent />

        <About />
        <Blog class="dark-section" />
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import About from '@/views/Home/About'
import Blog from '@/views/Home/Blog'

export default {
    name: 'home',

    components: { HeaderComponent, About, Blog }
}
</script>
