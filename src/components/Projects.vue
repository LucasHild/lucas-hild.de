<template>
    <section class="projects">
        <h2>My recent Projects</h2>

        <div class="grid">
            <Project
                :image="require('@/assets/images/projects/schoolsen.webp')"
                color="var(--color-green)"
                text="Lorem ipsum dolor sit amet consectetur adipisicing."
                link="https://schoolsen.de"
            />
            <Project
                :image="require('@/assets/images/projects/schoolsen.webp')"
                color="var(--color-blue)"
                text="Lorem ipsum dolor sit amet consectetur adipisicing."
                link="https://schoolsen.de"
            />
            <Project
                :image="require('@/assets/images/projects/schoolsen.webp')"
                color="var(--color-red)"
                text="Lorem ipsum dolor sit amet consectetur adipisicing."
                link="https://schoolsen.de"
            />
        </div>

        <ButtonComponent text="More on GitHub" href="https://github.com/Lanseuo"/>
    </section>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent'
import Project from '@/components/Project'

export default {
    name: 'projects',

    components: { Project, ButtonComponent }
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