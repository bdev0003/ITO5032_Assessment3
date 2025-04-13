<template>
    <div class="add-form">
        <h2>Add article</h2>
        <form class="form" @submit.prevent = "addBook">
            <div>
                <input type="text" v-model="title" id="title" placeholder="Article Title" required />
            </div>
            <div class="textarea-field field">
                <textarea name="article" id="article" cols="30" rows="10" placeholder="Article Contents" autocomplete="off"></textarea>
            </div>
            <button class="button" type="submit" @click="addNews()">
                <span class="text">Add Article</span>
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import db from '../../main.js';
import { collection, addDoc } from 'firebase/firestore';
import router from '@/router';
import { toRefs } from 'vue';

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

<style scoped>
*{
    text-align: center;
}
.add-form {
    justify-self: center;
    width: 60%;
    background-color: var(--background-side-alt);
    .h2 {
        text-align: center;
    }
}

.form {
    margin: 0.5rem ;
}

.button {
  display: inline;
  margin: 1rem;
  align-content: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background-color: var(--background-side);
  border-radius: 4px;
  width: 10rem;

  .text {
      color: var(--side-text);
  }

  &:hover {
      background-color: var(--background-side-alt);
      
      .text {
          color: var(--background-side);
      }
  }
}
</style>