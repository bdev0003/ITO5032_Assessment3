<script setup>
import { ref } from 'vue';

const addArticle = () {
    if (newTitle.value.trim() !== '') {
        
    }
}
</script>

<template>
    <h1>Submit a news Article</h1>
    <br/>
    <form @submit="addArticle">
        <label for="newTitle">Article Title</label>
        <input type="text" id="newTitle" name="newTitle">
    </form>
</template>

<style>
</style>
