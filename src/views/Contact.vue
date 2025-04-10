<template>
    <div class="header">
        <div class="header-image">
        </div>
        <div class="header-text">
            <h1>Contact Us</h1>
        </div>
    </div>
    <main>
        <div class="maps">
            <GoogleMap api-key="AIzaSyBsfqjnUzwr_HxNpXfRphBfFueedk6q598" style="width: 300px; height: 200px;" :zoom="15" :center="center">
                <Marker :options="{position: center}"/>
            </GoogleMap>
        </div>
        <div class="description">
            <h2>Need some more info?</h2>
            <p>Please reach out at:</p>
        </div>
    </main>
</template>

<script setup>
    import { GoogleMap, Marker} from "vue3-google-map";
    import Sidebar from "@/components/Sidebar.vue";

    const center = {lat: -37.910697336913394, lng: 145.1379444806958};
</script>

<style>
.header {
    position: relative;
    width:100%;
    height: 250px;
    display:inline-block;
}

.header-image {
    position: absolute;
    background-image: url("../assets/accuray-5sDRGl2PrNM-unsplash.jpg");
    background-size: cover;
    background-repeat: repeat-xs;
    height: 100%;
    width:100%;
}

.header-text {
    position:absolute;
    width:100%;
    text-align: center;
    top: 50%;
}

.maps {
    position:sticky
}
</style>