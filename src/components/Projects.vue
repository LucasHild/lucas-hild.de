<template>
    <section class="projects">
        <h2>My recent Projects</h2>

        <div class="grid">
            <div
                class="project"
                :style="`background-image: url(${require('@/assets/images/projects/schoolsen.webp')})`"
            >
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <a href="https://schoolsen.de" class="link" target="_blank">Visit</a>
                </div>
            </div>

            <div
                class="project"
                :style="`background-image: url(${require('@/assets/images/projects/schoolsen.webp')})`"
            >
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <a href="https://schoolsen.de" class="link" target="_blank">Visit</a>
                </div>
            </div>

            <div
                class="project"
                :style="`background-image: url(${require('@/assets/images/projects/schoolsen.webp')})`"
            >
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <a href="https://schoolsen.de" class="link" target="_blank">Visit</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'projects'
}
</script>

<style scoped>
h2 {
    text-align: center;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
    max-width: 1200px;
    margin: 0 auto;
}

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

/*  */
.project:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #008a75;
    opacity: 0;

    transition: all 0.5s ease-in-out;
    z-index: 1;
}
.project:hover:after {
    z-index: 1;
    opacity: 1;
}
/*  */
.project:hover {
    /* background-image: none !important; */
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
    color: #008a75;
}
</style>