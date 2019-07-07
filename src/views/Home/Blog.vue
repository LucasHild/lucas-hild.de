<template>
    <section class="blog" id="blog">
        <div class="container">
            <h2>Blog</h2>
            <p class="section-introduction">Auf meinem Blog schreibe ich Artikel über Softwareentwicklung, Technologie und weitere Themen, die mich interessieren. Schaut gerne einmal vorbei.</p>

            <div class="posts">
                <a
                    class="post"
                    v-for="post in posts"
                    :href="`https://blog.lucas-hild.de/${post.permalink}`"
                    :key="post.permalink"
                    target="_blank"
                >
                    <div class="image" :style="{ backgroundImage: `url(https://blog.lucas-hild.de${post.image})` }">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                    </div>
                    <div class="content">
                        <p class="title secondary mono">{{ post.title }}</p>
                        <p class="description">{{ post.description }}</p>
                    </div>
                </a>
            </div>

            <div class="button-wrapper">
                <a class="button" href="https://blog.lucas-hild.de">Meinen Blog besuchen</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'blog',

    data() {
        return {
            posts: []
        }
    },
    created() {
        fetch('https://blog.lucas-hild.de/api/posts')
            .then(response => response.json())
            .then(data => {
                this.posts = data.slice(0, 3)
            })
    }
}
</script>

<style scoped>
.posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}

.post {
    margin: 10px 0;
    background: white;
    color: black !important /* prevent hover color */;
}

.post .image {
    background-size: cover;
    background-position: center;
    position: relative;
    display: grid;
    place-items: center;
    height: 250px;
    overflow: hidden;
}

.post .image:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.3s;
}

.post:hover .image:after {
    opacity: 1;
}

.image svg {
    fill: white;
    width: 30px;
    z-index: 5;
    transform: translatex(-300px);
    transition: all 0.3s;
}

.post:hover .image svg {
    transform: translatex(0px);
}

.title {
    font-weight: bold;
}

.content {
    padding: 0 10px;
}
</style>