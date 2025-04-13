<template>
    <div class="cont-container">
        <div class="description">
            <div class="card">
                <ContactMap></ContactMap>
                <h4>Come and find us:</h4>
                <p><a href="https://maps.app.goo.gl/gzsXFEbXENaHrXJT6">Wellington Rd, Clayton VIC 3800</a></p>
                <p>Phone: <a href="tel:+61399054000">(03) 9905 4000</a></p>
            </div>
        </div>
        <ContactForm> </ContactForm>
    </div>
</template>

<script setup>
import ContactMap from '@/components/contact/ContactMap.vue';
import ContactForm from '@/components/contact/ContactForm.vue';
</script>

<style scoped>
.cont-container {
    width:calc(100%);
}
</style>