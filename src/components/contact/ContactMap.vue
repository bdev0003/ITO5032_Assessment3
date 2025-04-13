<template>
    <GoogleMap api-key="AIzaSyBsfqjnUzwr_HxNpXfRphBfFueedk6q598" style="width: 300px; height: 200px;" :zoom="15" :center="center">
        <Marker :options="{position: center}"/>
    </GoogleMap>
</template>

<script setup>
import { GoogleMap, Marker} from "vue3-google-map";
const center = {lat: -37.910697336913394, lng: 145.1379444806958};
</script>

<style scoped>

</style>