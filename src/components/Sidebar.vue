<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="logo" v-if="!is_expanded">
            <img src="../assets/AHC_square.png" alt="AHCSmallLogo">
        </div>
        <div class="logo-large" v-if="is_expanded">
            <img src="../assets/AHC_large.png" alt="AHCLargeLogo">
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleSidebar">
                <span class="material-icons">
                    double_arrow
                </span>
            </button>
        </div>

        <div class="menu">
            <h4>Menu</h4>
            <router-link class="button" to="/">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link class="button" to="/about">
                <span class="material-icons">group</span>
                <span class="text">About  Us</span>
            </router-link>
            <router-link class="button" to="/patients">
                <span class="material-icons">medical_services</span>
                <span class="text">For Patients</span>
            </router-link>
            <router-link class="button" to="/forum">
                <span class="material-icons">forum</span>
                <span class="text">Health Forum</span>
            </router-link>
            <router-link class="button" to="/contact">
                <span class="material-icons">contact_page</span>
                <span class="text">Contact Us</span>
            </router-link>
        </div>

        <div class="flex">
        </div>

        <div class="menu">
            <button class="button" @click="() => togglePopup('buttonTrigger')" v-if="!isLoggedIn">
                <span class="material-icons">login</span>
                <span class="text">Login</span>
            </button>
            <button class="button" @click="handleSignOut" v-if="isLoggedIn">
                <span class="material-icons">logout</span>
                <span class="text">Logout</span>
            </button>
            <router-link class="button" to="/settings">
                <span class="material-icons">settings</span>
                <span class="text">Settings</span>
            </router-link>
        </div>
    </aside>

    <AuthOverlay v-if="popupTriggered.buttonTrigger" :togglePopup=" () => togglePopup('buttonTrigger')">
    </AuthOverlay>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AuthOverlay from './AuthOverlay.vue';
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth"

const popupTriggered = ref({
    buttonTrigger: false
})
const togglePopup = (trigger) => {
    popupTriggered.value[trigger] = !popupTriggered.value[trigger]
}

const is_expanded = ref(localStorage.getItem("is_expanded") == "true")
const ToggleSidebar = () => {
    is_expanded.value = !is_expanded.value
    localStorage.setItem("is_expanded", is_expanded.value)
}

const isLoggedIn = ref(false);
let auth;
onMounted (() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
        } else {
            isLoggedIn.value = false;
        }
    })
})

const handleSignOut = () => {
    signOut(auth).then(() => {

    })
}

</script>

<style scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(5rem);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    background-color: var(--background-side);
    color: var(--side-text);

    transition: 0.2 ease-out;

    .logo {
        margin-bottom: 1rem;
        img {
            width: 3rem;
        }
    }

    .logo-large {
        margin-left: -3rem;
        margin-top: -3rem;
        img {
            width: 20rem;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: center;
        padding-top: 1rem;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;
        
        .menu-toggle {
            transition: 0.2s ease-out;
            
            .material-icons{
                font-size: 3 rem;
                color: var(--side-text);
                margin-right: 0.7rem;
            }

            &:hover {
                .material-icons {
                    color: var(--background-side-alt);
                    transform: translateX(0.3rem);
                    transition: ease 0.2s;
                }
            }
        }
    }

    .flex {
        flex: 1 1 0;
    }

    h4, .button .text {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    h4 {
        color: var(--background-side-alt);
        font-size: 1rem;
        text-transform: uppercase;
        margin-bottom: 1rem;
        margin-left: 2rem;
    }

    .menu {
        margin: 0 -1rem;
        margin-top: -2rem;
        text-decoration: none;

        .button{
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: 0.5rem 1rem;
            transition: 0.2 ease-out;

            .material-icons {
                font-size: 2rem;
                color: var(--side-text);
                transition: 0.2s ease-out;
                margin-right: 1.5rem;
                margin-bottom:0.2rem;
                margin-left: 0.5rem;
            }

            .text {
                color: var(--side-text)
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

            &.router-link-exact-active {
                border-right: 5px solid var(--side-active);
            }
        }
    }

    &.is-expanded {
        width: var(--side-width);

        .menu-toggle-wrap{
            top: -3rem;

            .menu-toggle{
                transform: rotate(-180deg);
                transition: ease-in-out 0.1s;
            }
        }

        h4, .button .text {
        opacity: 1;
        }
    }
    
    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }

}
</style>


<!-- https://www.youtube.com/watch?v=Ul4KOXNQJSk -->