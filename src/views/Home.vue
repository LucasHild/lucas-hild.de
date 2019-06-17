<template>
    <div class="home">
        <Header/>
        <AboutMe/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import AboutMe from '@/components/sections/AboutMe'

export default {
    name: 'home',

    components: { Header, AboutMe }
}
</script>
