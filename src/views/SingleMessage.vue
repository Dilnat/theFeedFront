<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import type {Publication} from "@/types";
  import BoitePublication from "@/components/BoitePublication.vue";
  const route = useRoute()
  const id = Number(route.params.id)
  const publication:Publication = {
    id:id,
    message:"Hello world !!",
    datePublication:"2023-09-15T12:02:09.037Z",
    auteur:{
      id:4,
      adresseEmail:"toto@gouv.fr",
      login:"toto",
      premium:false
    }
  };
</script>

<template>
  <BoitePublication :publication="publication"></BoitePublication>
</template>

<style scoped>

</style>