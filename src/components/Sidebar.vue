<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="logo">
            <img src="../assets/AHC_square.png" alt="AHCSmallLogo">
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleSidebar">
                <span class="material-icons">
                    double_arrow
                </span>
            </button>
        </div>

        <h4>Menu</h4>
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link class="button" to="/">
                <span class="material-icons">group</span>
                <span class="text">About</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';

const is_expanded = ref(false)
const ToggleSidebar = () => {
    is_expanded.value = !is_expanded.value;
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

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;
        
        .menu-toggle {
            transition: 0.2s ease-out;
            
            .material-icons{
                font-size: 3 rem;
                color: var(--side-text);
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

    

    h4, .button .text {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    .menu {
        margin: 0 -1rem;
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
                margin-right: 1rem;
                margin-bottom:0.2rem;
            }

            .text {
                color: var(--side-text)
            }

            &:hover {
                background-color: var(--background-side-alt);

                .material-icons, .text {
                    color: var(--background-side-back);
                }
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