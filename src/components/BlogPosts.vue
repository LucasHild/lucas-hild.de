<template>
    <div class="blog-posts">
        <a
            class="post"
            v-for="post in posts"
            :href="`https://blog.lucas-hild.de/${post.permalink}`"
            :key="post.permalink"
            target="_blank"
        >
            <div class="image" :style="{ backgroundImage: `url(https://blog.lucas-hild.de${post.image})` }"></div>
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
    grid-template-columns: 3fr 4fr;
    grid-gap: 10px;
    margin: 10px 0;
    height: 200px;
}

.image {
    background-size: cover;
    background-position: center;
}

.title {
    font-weight: bold;
    margin-bottom: 0;
}

.description {
    margin-top: 10px;
    font-size: 1em;
}
</style>