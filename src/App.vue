<script setup>
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="app">
    <div class="sidebar-wrap">
      <Sidebar/>
    </div>
    <div class="router-wrap">
      <router-view/>
    </div>
  </div>
</template>

<style>
:root {
  --background-side: #360c4d;
  --background-side-alt: #c988ec;
  --background-side-back: #cb6eff;
  --side-hover: #595959;
  --side-active: #ae00ff;
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

.router-wrap {
  width: 100%;
}

main{
  flex: 1 1 0;
  padding: 2rem;

  @media (max-width:768px) {
    padding-left: 6rem;
  }
}

</style>