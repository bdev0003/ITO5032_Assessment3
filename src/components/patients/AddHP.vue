<template>
    <div class="add-form">
        <h2>Add Doctor</h2>
        <form class="addForm" @submit.prevent = "addBook">
            <div class="row">
                <div class="col">
                    <input type="text" class="form" v-model="htitle" id="h-title" autocomplete="off" placeholder="Title" required />
                </div>
                <div class="col">
                    <input type="text" class="form" v-model="hname" id="h-name" autocomplete="off" placeholder="Full Name" required />
                </div>
            </div>
            <div class="rwo">
                <div class="col">
                    <textarea v-model="hspecialties" name="h-specialties" id="h-specialities" placeholder="Specialties"></textarea>
                </div>
            </div>
            <button class="button" type="submit" @click="addHP()">
                <span class="text">Add Professional</span>
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import db from '../../main.js';
import { collection, addDoc } from 'firebase/firestore';
import router from '@/router';

const hname = ref('');
const htitle = ref('');
const hspecialties = ref('');


const addHP = async () => {
    try {
        await addDoc(collection(db, 'hps'), {
            hname: hname.value,
            htitle: htitle.value,
            hspecialties: hspecialties.value
        });
        hname.value = '';
        htitle.value = '';
        hspecialties.value = '';
        alert('Health professional added successfully!');
        router.go();
    } catch (error) {
        console.error('Error adding health professional: ', error);
    }
}
</script>

<style scoped>
.add-form {
    justify-self: center;
    width: 60%;
    background-color: var(--background-side-alt);
    .h2 {
        text-align: center;
    }
}

.addForm {
    margin: 5px;
}

.form {
    margin: 0.5rem;
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