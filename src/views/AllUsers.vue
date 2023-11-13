<script setup lang="ts">
  import BoiteUtilisateur from "@/components/BoiteUtilisateur.vue";
  import {ref, onMounted } from 'vue'
  const users = ref([]);
  onMounted(() => {
    fetch('https://webinfo.iutmontp.univ-montp2.fr/~polletm/r5.a.05-programmationavancee-web-td4/public/api/utilisateurs')
        .then(reponsehttp => reponsehttp.json())
        .then(reponseJSON => {
          users.value = reponseJSON["hydra:member"];
        });
  })
</script>


<template>
  <ul>
    <li v-for="user in users"  :key="user.id">
      <BoiteUtilisateur :utilisateur="user"></BoiteUtilisateur>
    </li>
  </ul>
</template>