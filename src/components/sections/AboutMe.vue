<template>
    <section class="about-me" id="about-me">
        <h2>
            <span class="secondary mono">01.</span>
            About Me
        </h2>

        <div class="grid">
            <div class="image-wrapper">
                <div class="image" :style="{ backgroundImage: `url(${require('@/assets/images/stones.webp')})` }"></div>
            </div>
            <div class="text-wrapper">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti id quaerat natus iure ea magni quis distinctio cumque recusandae velit repellat, amet facere consequatur deserunt eaque aperiam culpa minima nihil consequuntur dicta quisquam impedit pariatur! Exercitationem molestiae vel aperiam cum?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti id quaerat natus iure ea magni quis distinctio cumque recusandae velit repellat, amet facere consequatur deserunt eaque aperiam culpa minima nihil consequuntur dicta quisquam impedit pariatur! Exercitationem molestiae vel aperiam cum?</p>
                <p>These are some technologies I've been working with recently:</p>
                <div class="technologies-grid">
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
    </section>
</template>

<script>
export default {
    name: 'about-me'
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
    height: 200px;
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
    content: "\2610";
    color: var(--secondary-color);
    display: inline-block;
    margin-left: -37px;
    margin-right: 7px;
}

.technologies-grid ul li:hover::before {
    content: "\2611";
}
</style>