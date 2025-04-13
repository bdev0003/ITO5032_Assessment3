<template>
  <div class="cont">
    <h3>View Health Professionals</h3>
    <div class="addHP">
      <button class="button" v-if="isAdmin" @click="openAdd()">
        <span class="text">Add professional</span>
      </button>
      <div class="hp-form">
        <AddHP v-if="isAddOpen"/>
      </div>
      <button class="button" v-if="isAddOpen" @click="openAdd()">
        <span class="text">Close Form</span>
      </button>
    </div>
    <div class="hpList">
      <ul style="list-style-type: none;">
        <li v-for="hp in healthProfs" :key="hp.id">
          <div class="card">
            <img src="../../assets/doctor.jpg" alt="" class="card-img-top">
            <div class="card-body">
              <h5>{{ hp.htitle }} {{ hp.hname }}</h5>
              <p>{{ hp.hspecialties }}</p>
              <button class="btn btn-danger" @click="deleteHP(hp.id)" v-if="isAdmin">Delete</button>
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
import { collection, query, deleteDoc, getDocs, doc }  from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import AddHP from './AddHP.vue';

const isAddOpen = ref(false);
const openAdd = async () => {
  isAddOpen.value = !isAddOpen.value;
}

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

async function deleteHP(docID) {
  try {
    await deleteDoc(doc(db,'hps', docID));
    alert('Health professional deleted successfully!');
    fetchHPs();
  } catch (error) {
    console.error('Error deleting health proffessional: ', error);
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
  checkAdmin();
  fetchHPs();
})
</script>

<style scoped>
.card-list {
  display: inline-block;
}

.card{
  display: grid;
  width: 20rem;
  margin: 10px;
}

.cont{
  width: 100%;
  text-align: center;

  .addHP {
    text-align: center;
  }
}

.hp-form {
  align-content: center;
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