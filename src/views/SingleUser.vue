<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import type {Utilisateur} from "@/types";
  import BoiteUtilisateur from "@/components/BoiteUtilisateur.vue";
  const route = useRoute()
  const id = Number(route.params.id)
  const user:Utilisateur = {
    id:id,
    adresseEmail:"toto@gouv.fr",
    login:"toto",
    premium:false
  };
</script>

<template>
  <BoiteUtilisateur :utilisateur="user"></BoiteUtilisateur>
</template>

<style scoped>

</style>