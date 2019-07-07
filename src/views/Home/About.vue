<template>
    <section class="about" id="about">
        <div class="container">
            <h2>Über mich</h2>
            <div class="grid">
                <div class="image-wrapper">
                    <div class="image" :style="{ backgroundImage: `url(${require('@/assets/img/stones.webp')})` }"></div>
                </div>
                <div class="text-wrapper">
                    <p class="section-introduction">
                        Vor einigen Jahren habe ich zu meinem Geburtstag einen Raspberry Pi bekommen.
                        Dies war der Zeitpunkt, ab dem ich angefangen habe, mich für die Entwicklung von Software zu interessieren.
                        Über die Zeit hat sich mein Interesse stark ausgebreitet.
                        Heutzutage entwickle ich gerne Backend-Applications, ich baue und designe Webseiten und interessiere mich für weitere Programmiersprachen.
                        In meiner Freizeit klettere ich und spiele Geige. Außerdem fotografiere und filme ich gerne.
                    </p>
                    <p>These are some technologies I've been working with recently:</p>
                    <div
                        class="technologies-grid"
                        :style="{ '--wrench-image': `url(${require('@/assets/img/wrench.svg')})` }"
                    >
                        <ul>
                            <li>Python</li>
                            <li>Golang</li>
                            <li>Docker</li>
                            <li>MongoDB</li>
                        </ul>
                        <ul>
                            <li>HTML, CSS & JS</li>
                            <li>Vue.js</li>
                            <li>React</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'about'
}
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
}

.grid .image-wrapper {
    order: 1;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    place-content: center;
}

.grid .image-wrapper .image {
    width: 100%;
    height: 250px;
    background-position: center;
    background-size: cover;
}

.technologies-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.technologies-grid ul {
    list-style-type: none;
    /* list-style-image: var(--wrench-image); */
}

.technologies-grid ul li::before {
    content: "";
    display: inline-block;
    height: 1em;
    width: 35px;
    background-image: var(--wrench-image);
    background-size: 1em;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: -35px;
}

.technologies-grid ul li:hover::before {
    transition: transform 0.3s ease-in-out;
    transform: rotateZ(360deg);
}
</style>