<template>
  <div class="news">
    <h3>News!</h3>
    <div class="add-news">
      <button class="button" v-if="isAdmin" @click="openAdd()">
        <span class="text">Add News</span>
      </button>
      <div class="news-form">
        <NewsAdd v-if="isAddOpen"/>
      </div>
      <button class="button" v-if="isAddOpen" @click="openAdd()">
        <span class="text">Close Form</span>
      </button>
    </div>
    <div class="card-list">
      <ul style="list-style-type: none;">
        <li v-for="art in articles" :key="art.id">
          <div class="card">
            <img src="../../assets/news-logo.jpg" alt="" class="card-img-top">
            <div class="card-body">
              <h5>{{ art.title }}</h5>
              <p>{{ art.article }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import db from '../../main.js'
import { collection, query, where, getDocs }  from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import NewsAdd from './NewsAdd.vue';

const isAddOpen = ref(false);
const openAdd = async () => {
  isAddOpen.value = !isAddOpen.value;
}

const articles = ref([]);
const fetchArts = async () => {
  try {
    const q = query(collection(db, 'news'));
    const querySnapshot = await getDocs(q);
    const artsArray = [];
    querySnapshot.forEach((doc) => {
      artsArray.push({ id: doc.id, ...doc.data() });
    });
    articles.value = artsArray;
  } catch (error) {
    console.error('Error retrieving health proffessionals: ', error);
  }
};

const auth = getAuth();
const user = auth.currentUser;
const isAdmin = ref(false);
const userID = ref('');
const checkAdmin = async () => {
  if (user !== null) {
    userID.value = user.uid;
  }
  if (userID.value === 'C4HzDAKQagO8ozOJ9aAc68zifHA2') {
    isAdmin.value = true;
    userID.value = '';

  }
  else {
    userID.value = '';
  }
}

onMounted(() => {
  fetchArts();
  checkAdmin();
})
</script>

<style scoped>
.card-list {
  display: inline-block;
}

.card{
  width: 20rem;
  max-height: 300px;
  margin: 10px;
}

.news{
  width: 100%;
  text-align: center;
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