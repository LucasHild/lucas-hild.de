<template>
    <div class="blog-posts">
        <a
            class="post"
            v-for="post in posts"
            :href="`https://blog.lucas-hild.de/${post.permalink}`"
            :key="post.permalink"
            target="_blank"
        >
            <div class="image" :style="{ backgroundImage: `url(https://blog.lucas-hild.de${post.image})` }">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
            </div>
            <div class="content">
                <p class="title">{{ post.title }}</p>
                <p class="description">{{ post.description }}</p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'blog-posts',

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
.post {
    background: #f5f4f4;
    display: grid;
    grid-template-columns: 175px 1fr;
    grid-gap: 10px;
    margin: 10px 0;
}

.image {
    background-size: cover;
    background-position: center;
    position: relative;
    display: grid;
    place-items: center;
}

.image:after {
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

.image:hover:after {
    opacity: 1;
}

.image svg {
    fill: white;
    width: 40px;
    z-index: 5;
    transform: translatex(-150px);
    transition: all 0.3s;
}

.image:hover svg {
    transform: translatex(0px);
}

.title {
    font-weight: bold;
    margin: 0 auto;
}

.content {
    overflow: hidden;
    margin: 20px 0;
}

.description {
    margin-top: 10px;
    font-size: 1em;

    margin: 0;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>