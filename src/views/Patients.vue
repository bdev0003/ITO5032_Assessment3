<template>
  <div class="cont-container">
    <div class="header-wrap">
      <h1>For Patients</h1>
    </div>
    <ListHP></ListHP>
  </div>
</template>

<script setup>
import ListHP from '@/components/patients/ListHP.vue';
</script>

<style scoped>
.header-wrap {
    height: 175px;
    align-content: center;
    background-image: url('../assets/patients-header.jpg');
    background-position: center;
    background-size: cover;
    margin-bottom: 20px;
}

h1 {
    text-align: center;
    color: var(--side-text);
}
</style>