<template>
  <div class="popup">
    <div class="popup-inner">
        <button class="popup-close" @click="togglePopup()">
            <span class="material-icons">close</span>
        </button>
        <slot />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup-inner {
    background: var(--background-side-alt);
    padding: 2rem;
}
</style>

<!--https://www.youtube.com/watch?v=HorXomQrOi8-->