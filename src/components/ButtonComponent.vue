<template>
    <div class="button-component">
        <a class="button" :href="href" :style="{ backgroundColor: color }" target="_blank">
            <span>{{ text }}</span>
        </a>
    </div>
</template>

<script>
export default {
    name: 'button-component',

    props: ['text', 'href', 'color']
}
</script>

<style scoped>
.button-component {
    display: grid;
    place-items: center;
    margin: 30px 0;
}

.button {
    cursor: pointer;
    background: var(--color-blue);
    color: white;
    padding: 15px 30px;
}
</style>