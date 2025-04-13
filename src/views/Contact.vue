<template>
    <div class="cont-container">
        <div class="header-wrap">
            <h1>Contact Us</h1>
        </div>
        <div class="description">
            <div class="map">
                <ContactMap/>
            </div>
            <h4>Come and find us:</h4>
            <p><a href="https://maps.app.goo.gl/gzsXFEbXENaHrXJT6">Wellington Rd, Clayton VIC 3800</a></p>
            <p>Phone: <a href="tel:+61399054000">(03) 9905 4000</a></p>
            <p>Email: <a href="mailto:bdev0003@student.monash.edu">Bethany De Vries</a></p>
            <ContactForm />
        </div>
    </div>
</template>

<script setup>
import ContactMap from '@/components/contact/ContactMap.vue';
import ContactForm from '@/components/contact/ContactForm.vue';
</script>

<style scoped>
.header-wrap {
    height: 175px;
    align-content: center;
    background-image: url('../assets/contact-header.jpg');
    background-position: center;
    background-size: cover;
    margin-bottom: 20px;
}

.map{
    text-align: center;
    align-content: center;
}

h1 {
    text-align: center;
    color: var(--side-text);
}

.description{
    text-align: center;
    align-content: center;
}


</style>