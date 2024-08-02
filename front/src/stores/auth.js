import { ref } from "vue";
import { defineStore } from "pinia";

import axios from "axios";
import router from "@/router";



export const useAuthStore = defineStore("auth", () => {
  // state
  const user = ref({});




  // actions
  const getToken = async () => {
    await axios.get("/sanctum/csrf-cookie");

  };
  const getUser = async () => {
    await getToken()
    user.value = await axios.get('api/user')
  }


  async function handleLogin(data) {
    await getToken();
    await axios.post('login', {
      email: data.email,
      password: data.password
    })
    router.push('/')

  }

  async function handleRegister(data) {
    await getToken();
    await axios.post('register', {
      email: data.email,
      password: data.password

    })
    router.push('login')
  }

  async function handleLogout() {
    await getToken

    await axios.post('logout')
    console.log('logged out');
    router.push('login')
  }


  return { user, getUser, handleLogin, handleLogout, handleRegister }
});