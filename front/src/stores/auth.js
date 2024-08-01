import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  // state
  const user = ref({});

  // getters

    // actions
    const getToken = async () => {
    await axios.get("/user");
  };
  return { user,getToken };
});
