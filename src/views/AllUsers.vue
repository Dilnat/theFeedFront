<script setup lang="ts">
  import type {Utilisateur} from "@/types";
  import type {Ref} from "vue";
  import {ref} from "vue";
  import BoiteUtilisateur from "@/components/BoiteUtilisateur.vue";

  const users:Ref<Utilisateur[]> = ref([{
    id:4,
    adresseEmail:"toto@gouv.fr",
    login:"toto",
    premium:false
  },{
    id:5,
    adresseEmail:"tony@gouv.fr",
    login:"tony",
    premium:false
  }]);
</script>


<template>
  <ul>
    <li v-for="user in users"  :key="user.id">
      <BoiteUtilisateur :utilisateur="user"></BoiteUtilisateur>
    </li>
  </ul>
</template>