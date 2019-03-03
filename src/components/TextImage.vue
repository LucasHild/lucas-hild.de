<template>
    <section class="text-image" :class="{ inversed }">
        <div class="content-wrapper">
            <div class="content">
                <slot></slot>
            </div>
        </div>
        <div class="image" :style="`background-image: url(${image})`"></div>
    </section>
</template>

<script>
export default {
    name: 'text-image',

    props: { image: String, inversed: Boolean },

    created() {
        console.log("'" + this.image + "'");

    }
}
</script>

<style scoped>
.text-image {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: 80vh;
    margin: 50px 0;
}

.text-image.inversed .image {
    order: -1;
}

.content-wrapper {
    display: grid;
    place-items: center;
}

.content {
    padding: 100px;
}

.content h2 {
    margin-top: 0;
    font-size: 1.5em;
}

.content p {
    font-size: 2em;
}

.image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
}
</style>