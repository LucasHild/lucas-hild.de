<template>
    <header class="header" :style="{ backgroundImage: `url(${require('@/assets/img/header-background.jpg')})` }">
        <div class="content">
            <p>Hallo, mein Name ist</p>
            <h1>Lucas Hild</h1>
            <p>Developer & Entrepreneur</p>
        </div>

        <div class="arrow">
            <a href="#about-scroll-marker">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </a>
        </div>
    </header>
</template>

<script>
export default {
    name: 'header-component'
}
</script>

<style scoped>
.header {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: white;
    height: 100vh;
    vertical-align: middle;
    width: 100vw;
    height: 100vh;
    display: table-cell;
    vertical-align: middle;
    z-index: 1;
    color: white;
    position: relative;
}

.content {
    background-size: cover;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.vsc-initialized .content {
    display: flex;
    animation: wave 1.5s linear;
}

@keyframes wave {
    0% {
        transform: translateY(-100vh);
    }

    25% {
        transform: translateY(-30px);
    }

    50% {
        transform: translateY(10px);
    }

    75% {
        transform: translateY(-10px);
    }

    100% {
        transform: initial;
    }
}

p {
    font-size: 1.5em;
}

h1 {
    font-size: 3em;
    margin: 10px 0;
}

.arrow {
    animation: fade-in-out 3s linear infinite;
}

@keyframes fade-in-out {
    0%,
    10%,
    100% {
        opacity: 0;
    }

    20%,
    90% {
        opacity: 1;
    }
}

.arrow svg {
    fill: white;
    width: 75px;
    height: 75px;
    margin: 0 auto;
    display: block;
    position: absolute;
    bottom: 75px;
    left: 0;
    right: 0;
    z-index: 2;
}
</style>