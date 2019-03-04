<template>
    <div class="header" :style="`background-image: url(${require('@/assets/images/header-background.jpg')})`">
        <div class="content">
            <p>Hi, I'm</p>
            <h1>Lucas</h1>
            <p>Entrepreneuer & Developer</p>
        </div>

        <div class="scroll-arrow">
            <a href="#about-scroll-marker">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header'
}
</script>

<style scoped>
.header {
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    display: grid;
    place-items: center;
}

.content {
    color: white;
    text-align: center;
}

.content p {
    font-size: 30px;
}

.content h1 {
    font-size: 150px;
    margin: 0;
}

.scroll-arrow {
    position: absolute;
    bottom: 60px;
}

.scroll-arrow svg {
    fill: white;
    width: 75px;
}
</style>