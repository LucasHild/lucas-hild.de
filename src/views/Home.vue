<template>
    <div class="home">
        <Header/>

        <TextImage :image="require('@/assets/images/about.webp')">
            <h2>About me</h2>
            <p>I'm a guy from Germany who loves technology in every form. Learning new things every day is what I enjoy most.</p>
        </TextImage>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TextImage from '@/components/TextImage'

export default {
    name: 'home',

    components: { Header, TextImage }
}
</script>
