<script setup>
import Navbar from "@/components/Navbar.vue";
import { useAuthStore } from "@/stores/auth";
import { onMounted } from "vue";

const auth = useAuthStore();
onMounted(async () => {
  const data = await auth.getUser
  console.log(data.data)
})

</script>

<template>
  <main>
    <Navbar />
    <h1>This is Home page</h1>
  </main>
</template>
