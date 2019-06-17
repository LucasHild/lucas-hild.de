<template>
    <div id="app">
        <NavBar/>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
    name: 'app',

    components: { NavBar }
}
</script>

<style>
main {
    width: 95%;
    max-width: 1000px;
    margin: 0 auto;
}
</style>
