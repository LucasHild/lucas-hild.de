<template>
    <nav class="navbar">
        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>

        <h1>Lucas Hild</h1>

        <div class="links">
            <a v-for="link in links" :href="`#${link.hash}`" :key="link.hash">{{ link.title }}</a>
        </div>

        <div class="mobile-nav">
            <svg
                id="close-mobile-nav"
                fill="#FFFFFF"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
                <path d="M0 0h24v24H0z" fill="none" />
            </svg>

            <h1>Lucas Hild</h1>

            <div class="links">
                <a v-for="link in links" :href="`#${link.hash}`" :key="link.hash">{{ link.title }}</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar',

    data() {
        return {
            links: [
                { title: 'Über mich', hash: 'about' },
                { title: 'Blog', hash: 'blog' }
            ]
        }
    }
}
</script>

<style scoped>
nav {
    padding: 0 100px;
    position: fixed;
    z-index: 3;
    transition: background-color 0.2s ease-in-out;
    width: 100%;
}

nav.nav-blue {
    background-color: var(--primary-color);
}

nav.nav-blue .links a:hover {
    color: white;
    border-bottom: 1px solid white;
}

nav svg {
    position: absolute;
    left: 25px;
    top: 25px;
    display: none;
    cursor: pointer;
}

nav h1 {
    letter-spacing: 0.05em;
    z-index: 600;
}

nav h1,
nav a {
    line-height: 100px;
    display: inline;
    color: white;
}

nav .links {
    display: inline-block;
    float: right;
}

nav .links a {
    margin: 0 15px;
    text-transform: uppercase;
    padding-bottom: 10px;
    font-size: 1em;
    border-bottom: 1px solid rgba(255, 255, 255, 0);
}

nav .links a:hover {
    color: var(--primary-color);
    border-bottom: 1px solid var(--primary-color);
}

nav .mobile-nav {
    display: none;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: var(--primary-color);
    z-index: 500;
    top: 0;
}

nav .mobile-nav a {
    display: block;
    text-align: left;
    line-height: 50px;
    padding-left: 30px;
    text-transform: uppercase;
}
</style>