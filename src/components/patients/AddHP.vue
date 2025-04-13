<template>
    <div>
        <h2>Add Doctor</h2>
        <form @submit.prevent = "addBook">
            <div>
                <label for="h-name">Health Professional's Name</label>
                <input type="text" v-model="hname" id="h-name" required />
            </div>
            <div>
                <label for="h-title">Title:</label>
                <input type="text" v-model="htitle" id="h-title" required />
            </div>
            <button type="submit" @click="addHP()">Add Professional</button>
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

const addHP = async () => {
    try {
        await addDoc(collection(db, 'hps'), {
            hname: hname.value,
            htitle: htitle.value
        });
        hname.value = '';
        htitle.value = '';
        alert('Health professional added successfully!');
        router.go();
    } catch (error) {
        console.error('Error adding health professional: ', error);
    }
}
</script>

<style>

</style>