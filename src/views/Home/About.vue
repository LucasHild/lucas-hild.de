<template>
    <section class="about" id="about">
        <div class="container">
            <h2>Über mich</h2>
            <div class="grid">
                <div class="image-wrapper">
                    <div class="image" :style="{ backgroundImage: `url(${require('@/assets/img/stones.webp')})` }"></div>
                </div>
                <div class="text-wrapper">
                    <p>
                        Hey, mein Name ist Lucas, ich besuche aktuell ein Gymnasium und ich programmiere seit vielen Jahren. In meiner Freizeit lerne ich gerne neue Programmiersprachen und Technologien. Zudem ich interessiere ich mich für Entrepreneurship und Marketing. Mit ein paar Freunden habe ich im Jahr ein das Start Up <a href="#projects">schoolsen</a> gegründet. Wenn Du mehr wissen möchtest, kannst Du mir im gerne eine <a href="#contact">Nachricht zukommen</a> lassen.</p>
                    </p>
                    <p>Mit folgenden Programmiersprachen und Technologien habe ich in letzter Zeit gearbeitet:</p>
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