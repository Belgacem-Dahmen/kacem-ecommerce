<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const form = ref({
  email: "",
  password: "",
});

const handleLogin = async () => {
  await axios.get("/sanctum/csrf-cookie", {
    withCredentials: true,
  });
  await axios.post("/login", {
    email: form.value.email,
    password: form.value.password,
  });
  router.push("/");
};
</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <input
        type="text"
        name="email"
        placeholder="email"
        v-model="form.email"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        v-model="form.password"
      />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
