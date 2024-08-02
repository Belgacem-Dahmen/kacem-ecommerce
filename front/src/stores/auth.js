import { ref } from "vue";
import { defineStore } from "pinia";

import axios from "axios";



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

  }

  return { user, getUser, handleLogin }
});