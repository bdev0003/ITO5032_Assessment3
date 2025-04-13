<template>
    <header class="header-image">
        <h1>Contact Us</h1>
        <p>{{currentPage}}</p>
    </header>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";

const currentPage = ref(router.currentRoute.value.name);
const currentTitle = ref('');

switch (currentPage) {
    case '/contact':
        currentTitle = 'Contact Us';
        break;
}
</script>

<style scoped>
header {
    height: 150px;
    background-color: black;
}

</style>