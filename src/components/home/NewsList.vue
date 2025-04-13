<template>
    <div>
      <h3>News!</h3>
    <ul v-for="art in articles" :key="art.id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ art.title }}</h5>
          <p class="card-text">{{ art.article }}</p>
        </div>
      </div>
    </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import db from '../../main.js'
  import { collection, query, where, getDocs }  from 'firebase/firestore';
  
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
  
  onMounted(() => {
    fetchArts();
  })
  </script>
  
  <style scoped>
  .card{
    width: 20rem;
  }
  </style>