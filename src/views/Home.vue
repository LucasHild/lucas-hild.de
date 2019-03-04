<template>
    <div class="home">
        <Header/>

        <TextImage :image="require('@/assets/images/about.webp')">
            <h2>About me</h2>
            <p>I'm a guy from Germany who loves technology in every form. Learning new things every day is what I enjoy most.</p>
        </TextImage>

        <TextImage inversed :image="require('@/assets/images/programming.webp')">
            <h2>Programming is my passion</h2>
            <p>I learned to program with my Raspberry Pi back when I was 14 years old. Since then I learned several programming languages and developed some side projects. Currently I am developing in Python, JavaScript (with Vue.js) and Go.</p>
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
