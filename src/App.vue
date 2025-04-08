<script setup>
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="app">
    <Sidebar/>
    <router-view/>
  </div>
</template>

<style>
:root {
  --background-side: #a644db;
  --background-side-alt: #ebc7ff;
  --backgroud-side-back: #cb6eff;
  --side-hover: #595959;
  --side-active: #1a1a1a;
  --side-active-alt: #2b2b2b;
  --side-text: #fcf7ff;
  --side-width: 250px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Figtree', sans-serif;
}

body {
  background: var(--side-text);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app{
  display: flex;
}

main{
  flex: 1 1 0;
  padding: 2rem;

  @media (max-width:768px) {
    padding-left: 6rem;
  }
}

</style>