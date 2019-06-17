<template>
    <nav class="navbar">
        <h3 class="secondary mono">Lucas Hild</h3>
        <ul>
            <li v-for="(link, index) in links" class="mono" :key="link.tag">
                <span class="index secondary">0{{ index + 1 }}.</span>
                <span>{{ link.name }}</span>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'navbar',

    data() {
        return {
            links: [
                {
                    name: 'About Me',
                    tag: 'about-me'
                },
                {
                    name: 'Blog',
                    tag: 'blog'
                },
                {
                    name: 'Projects',
                    tag: 'projects'
                },
                {
                    name: 'Contact',
                    tag: 'contact'
                }
            ]
        }
    }
}
</script>

<style scoped>
nav {
    display: grid;
    grid-template-columns: 1fr auto;
}

ul {
    list-style-type: none;
}

li {
    display: inline;
    margin: 0 10px;
}

li .index {
    margin-right: 5px;
}
</style>