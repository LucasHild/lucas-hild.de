<template>
    <div class="home">
        <HeaderComponent />

        <About />
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import About from '@/views/Home/About'

export default {
    name: 'home',

    components: { HeaderComponent, About }
}
</script>
