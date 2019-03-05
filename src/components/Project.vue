<template>
    <div class="project" :style="`background-image: url(${image}); --color: ${color}`">
        <div class="content">
            <p>{{ text }}</p>
            <a :href="link" class="link" target="_blank">Visit</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'project',

    props: ['image', 'color', 'text', 'link']
}
</script>

<style scoped>
.project {
    color: white;
    height: 250px;
    padding: 10px;
    text-align: center;

    background-size: contain;
    background-position: center;

    display: grid;
    place-items: center;

    position: relative;
    z-index: 5;
}

.project:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--color);
    opacity: 0;

    transition: all 0.5s ease-in-out;
    z-index: 1;
}
.project:hover:after {
    z-index: 1;
    opacity: 1;
}

.project .content {
    z-index: 5;
    transition: all 0.5s ease-in-out;
    opacity: 0;
}

.project:hover .content {
    opacity: 1;
}

.project .content .link {
    color: white;
    border: 1px solid white;
    padding: 5px 50px;
    border-radius: 5px;
}

.project .content .link:hover {
    background: white;
    color: var(--color);
}
</style>