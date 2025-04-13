<template>
    <div>
        <h2>Add article</h2>
        <form @submit.prevent = "addBook">
            <div>
                <label for="title">Article Tite</label>
                <input type="text" v-model="title" id="title" required />
            </div>
            <div class="textarea-field field">
                <textarea name="article" id="article" cols="30" rows="10" placeholder="Article Contents" autocomplete="off"></textarea>
            </div>
            <button type="submit" @click="addNews()">Add Article</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import db from '../../main.js';
import { collection, addDoc } from 'firebase/firestore';
import router from '@/router';

const title = ref('');
const article = ref('');

const addNews = async () => {
    try {
        await addDoc(collection(db, 'news'), {
            title: title.value,
            article: article.value
        });
        title.value = '';
        article.value = '';
        alert('News article added successfully!');
        router.go();
    } catch (error) {
        console.error('Error adding article: ', error);
    }
}
</script>

<style>

</style>