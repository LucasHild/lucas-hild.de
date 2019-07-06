<template>
    <div id="app">
        <NavBar />
        <router-view />
        <FooterComponent />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import FooterComponent from '@/components/FooterComponent'

export default {
    name: 'app',

    components: { NavBar, FooterComponent },

    created() {
        window.onload = () => {
            document.querySelector('body').classList.add('vsc-initialized')
        }
    }
}
</script>

<style scoped>
</style>
