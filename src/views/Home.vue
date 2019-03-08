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

        <TextImage :image="require('@/assets/images/schoolsen.webp')">
            <h2>schoolsen</h2>
            <p>In 2018 three friends and me founded a German startup called schoolsen. We provide a platform to schools that helps students to gain information about their school comfortably using our app.</p>
            <ButtonComponent text="Visit schoolsen" href="https://schoolsen.de" color="var(--color-green)"/>
        </TextImage>

        <Projects/>

        <TextImage inversed :image="require('@/assets/images/blog.webp')">
            <h2>Blog</h2>
            <p>On my German blog is write mostly about software development and technology.</p>
            <BlogPosts/>
            <ButtonComponent text="Read more articles" href="https://blog.lucas-hild.de" color="var(--color-red)"/>
        </TextImage>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TextImage from '@/components/TextImage'
import Projects from '@/components/Projects'
import ButtonComponent from '@/components/ButtonComponent'
import BlogPosts from '@/components/BlogPosts'

export default {
    name: 'home',

    components: { Header, TextImage, Projects, ButtonComponent, BlogPosts }
}
</script>
