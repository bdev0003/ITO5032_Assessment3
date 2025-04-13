<template>
  <div>
    <h3>View Health Professionals</h3>
    <ul>
      <ul>
        <li v-for="hp in healthProfs" :key="hp.id">
          {{ hp.htitle }} {{ hp.hname }}
        </li>
      </ul>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import db from '../../main.js'
import { collection, query, where, getDocs }  from 'firebase/firestore';

const healthProfs = ref([]);
const fetchHPs = async () => {
  try {
    const q = query(collection(db, 'hps'));
    const querySnapshot = await getDocs(q);
    const hpsArray = [];
    querySnapshot.forEach((doc) => {
      hpsArray.push({ id: doc.id, ...doc.data() });
    });
    healthProfs.value = hpsArray;
  } catch (error) {
    console.error('Error retrieving health proffessionals: ', error);
  }
};

onMounted(() => {
  fetchHPs();
})
</script>

<style>

</style>