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
                        Hey, mein Name ist Lucas, ich besuche aktuell ein Gymnasium und programmiere seit vielen Jahren. In meiner Freizeit lerne ich gerne neue Programmiersprachen und Technologien. Zudem ich interessiere ich mich für Entrepreneurship und Marketing. Mit ein paar Freunden habe ich im Jahr 2018 das Start Up
                        <a
                            href="#projects"
                        >schoolsen</a> gegründet. Wenn Du mehr wissen möchtest, kannst Du mir im gerne eine
                        <a
                            href="#contact"
                        >Nachricht zukommen</a> lassen.
                    </p>
                    <p>Mit folgenden Programmiersprachen und Technologien habe ich in letzter Zeit gearbeitet:</p>
                    <div
                        class="technologies-grid"
                        :style="{ '--wrench-svg': wrenchSVG, '--wrench-svg-blue': wrenchSVGBlue }"
                    >
                        <ul>
                            <li>Python</li>
                            <li>Golang</li>
                            <li>Docker</li>
                            <li>MongoDB</li>
                        </ul>
                        <ul>
                            <li>HTML, CSS & TypeScript</li>
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
    name: 'about',

    data() {
        return {
            wrenchSVG: `url('data:image/svg+xml;utf8,<svg fill="black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z" /></svg>'`
        }
    },

    computed: {
        wrenchSVGBlue() {
            return this.wrenchSVG.replace('black', 'rgb(21, 144, 219)')
        }
    }
}
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;
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
    border: 5px solid var(--primary-color);
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
    background-image: var(--wrench-svg);
    background-size: 1em;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: -35px;
}

.technologies-grid ul li:hover::before {
    background-image: var(--wrench-svg-blue);
    transition: transform 0.3s ease-in-out;
    transform: rotateZ(360deg);
}

@media (max-width: 750px) {
    .grid {
        display: block;
        grid-template-columns: 2fr 1fr;
        grid-gap: 10px;
    }
}
</style>