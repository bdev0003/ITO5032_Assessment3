<template>
  <div class="popup">
    <div class="popup-inner">
        <button class="popup-close" @click="togglePopup()">
            <span class="material-icons">close</span>
        </button>
        <section v-if="registerForm" class="register-form">
          <h3>Register</h3>
          <p><input type="email" placeholder="Email" v-model="email" /></p>
          <p><input type="password" placeholder="Password" v-model="password" /></p>
          <p><button class="button-change" @click="register">Submit</button></p>
          <p><button @click="toggleRegister()">Already have an account?</button></p>
        </section>
        <section v-if="!registerForm" class="login-form">
          <h3>Login</h3>
          <p><input type="email" placeholder="Email" v-model="email" /></p>
          <p><input type="password" placeholder="Password" v-model="password" /></p>
          <p><button class="button-change" @click="login">Submit</button></p>
          <p><button @click="toggleRegister()">Need to register?</button></p>
        </section>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { ref } from 'vue';

let props = defineProps(['togglePopup']);
const {togglePopup} = toRefs(props);

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const router = useRouter();
const register = ()=> {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
      props.togglePopup();
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
const login = ()=> {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully logged in!");
      router.go();
      props.togglePopup();
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const registerForm = ref(false)
const toggleRegister = () => {
  registerForm.value = !registerForm.value
}

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
  justify-content: center;
  align-items: center;
}

.button-change {
  border-radius: 4px;
  background-color: var(--side-text);
  color: var(--background-side);
  padding-left: 5px;
  padding-right: 5px;
  align-content: center;
}
</style>