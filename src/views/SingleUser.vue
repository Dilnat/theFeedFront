<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import BoiteUtilisateur from "@/components/BoiteUtilisateur.vue";
  import {ref, onMounted } from 'vue'
  const route = useRoute()
  const id = Number(route.params.id)
  const user = ref({
    id:-1,
    adresseEmail:"chargement",
    login:"chargement",
    premium:false
  });
  onMounted(() => {
    fetch('https://webinfo.iutmontp.univ-montp2.fr/~polletm/r5.a.05-programmationavancee-web-td4/public/api/utilisateurs/' + id)
        .then(reponsehttp => reponsehttp.json())
        .then(reponseJSON => {
          user.value = reponseJSON;
        });
  })
</script>

<template>
  <BoiteUtilisateur :utilisateur="user"></BoiteUtilisateur>
</template>

<style scoped>

</style>