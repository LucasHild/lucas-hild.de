<template>
    <div class="featured-project" :class="{ 'swap-image-and-content': swapImageAndContent }">
        <img class="image" :src="project.image" />
        <div class="content-wrapper">
            <div class="content">
                <h3>{{ project.title }}</h3>
                <p class="text" v-html="project.text"></p>
                <ul class="technologies">
                    <li
                        v-for="technology in project.technologies"
                        :key="technology"
                    >{{ technology }}</li>
                </ul>

                <div class="icons">
                    <a v-if="project.githubURL" :href="project.githubURL" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            />
                        </svg>
                    </a>
                    <a v-if="project.externalURL" :href="project.externalURL" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'featured-project',

    props: ['project', 'swapImageAndContent']
}
</script>

<style scoped>
.featured-project {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 5px;
    margin-bottom: 25px;
}

.image {
    width: 100%;
    grid-area: 1 / 1 / span 1 / span 6;
}

.content-wrapper {
    display: flex;
    place-items: center;
    padding: 10px;
    grid-area: 1 / 6 / span 1 / span 7;
    text-align: right;
}

.featured-project.swap-image-and-content .image {
    grid-area: 1 / 7 / span 1 / span 6;
}

.featured-project.swap-image-and-content .content-wrapper {
    grid-area: 1 / 1 / span 1 / span 7;
}

h3 {
    text-align: right !important;
}

.text {
    background: var(--dark-background-color);
    text-align: left;
    padding: 15px;
}

.featured-project.swap-image-and-content * {
    text-align: left !important;
}

ul.technologies {
    list-style-type: none;
    padding-left: 0;
}

ul.technologies li {
    display: inline;
    margin: 0 7px;
}

.icons svg {
    margin: 0 7px;
}

@media (max-width: 750px) {
    .featured-project {
        display: block;
    }

    .featured-project h3 {
        text-align: left !important;
    }

    .featured-project .text {
        background: none;
        padding: 0;
    }

    .featured-project .technologies, .featured-project .icons {
        text-align: right !important;
    }
}
</style>