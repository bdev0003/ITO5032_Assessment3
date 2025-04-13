<template>
    <div class="header-wrap">
        <h1>Welcome to the Allied Health Coallition</h1>
    </div>
    <div class="container">
        <h3>At the AHC, we aim to provide the best services for LGBTQIA+ individuals and their allies</h3>
        <div class="link-box">
            <router-link class="button" to="/patients">
                <span class="material-icons">medical_services</span>
                <span class="text">For Patients</span>
            </router-link>
            <router-link class="button" to="/contact">
                <span class="material-icons">contact_page</span>
                <span class="text">Contact Us</span>
            </router-link>
        </div>
        <div class="news-card">
            <NewsList />
        </div>
    </div>
</template>

<script setup>
import NewsList from '@/components/home/NewsList.vue';

</script>

<style scoped>
.header-wrap {
    height: 175px;
    align-content: center;
    background-image: url('../assets/home-header.jpg');
    background-position: center;
    background-size: cover;
    margin-bottom: 10px;
}

h1 {
    text-align: center;
    color: var(--side-text);
}

h3 {
    text-align: center;
}

.link-box {
    text-align: center;
    
    .button {
        display: inline-block;
        margin: 1rem;
        align-content: center;
        text-decoration: none;
        padding: 0.5rem 1rem;
        background-color: var(--background-side);
        border-radius: 4px;
        width: 200px;

        .material-icons {
            font-size: 2rem;
            color: var(--side-text);
            margin-right: 1.5rem;
        }

        .text {
            color: var(--side-text);
        }

        &:hover, &.router-link-exact-active{
            background-color: var(--background-side-alt);

            .material-icons {
                color: var(--background-side);
            }
            
            .text {
                color: var(--background-side);
            }
        }
    }
}
</style>