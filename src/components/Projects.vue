<template>
    <section class="projects">
        <h2>My recent Projects</h2>

        <div class="grid">
            <Project :image="require('@/assets/images/projects/schoolsen.webp')" color="#008a75" text="Lorem ipsum dolor sit amet consectetur adipisicing." link="https://schoolsen.de"/>
            <Project :image="require('@/assets/images/projects/schoolsen.webp')" color="blue" text="Lorem ipsum dolor sit amet consectetur adipisicing." link="https://schoolsen.de"/>
            <Project :image="require('@/assets/images/projects/schoolsen.webp')" color="#008a75" text="Lorem ipsum dolor sit amet consectetur adipisicing." link="https://schoolsen.de"/>
        </div>
    </section>
</template>

<script>
import Project from '@/components/Project'

export default {
    name: 'projects',

    components: { Project }
}
</script>

<style scoped>
h2 {
    text-align: center;
    margin-bottom: 50px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
    max-width: 1200px;
    margin: 0 auto;
}
</style>