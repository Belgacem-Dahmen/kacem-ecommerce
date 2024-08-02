<script setup>

import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";



const auth = useAuthStore();
const isLoading = ref(false)
const form = ref({
  email: "",
  password: "",
});


const handleSubmit = async () => {
  isLoading.value = true
  await auth.handleLogin(form.value)

}


</script>

<template>
  <div v-if="!isLoading">
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <input type="text" name="email" placeholder="email" v-model="form.email" />
      <input type="password" name="password" placeholder="password" v-model="form.password" />
      <button type="submit">Login</button>
    </form>
  </div>
  <div v-else>
    <div class="loader"></div>
  </div>
</template>

<style>
/* HTML: <div class="loader"></div> */
.loader {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  background: linear-gradient(90deg, #000 50%, #0000 0) right/200% 100%;
  animation: l21 2s infinite linear;
}

.loader::before {
  content: "Loading...";
  color: #0000;
  padding: 0 5px;
  background: inherit;
  background-image: linear-gradient(90deg, #fff 50%, #000 0);
  -webkit-background-clip: text;
  background-clip: text;
}

@keyframes l21 {
  100% {
    background-position: left
  }
}
</style>