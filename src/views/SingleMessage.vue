<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import BoitePublication from "@/components/BoitePublication.vue";
  import {ref, onMounted } from 'vue'
  const route = useRoute()
  const id = Number(route.params.id)

  const publication = ref([{
    id:-1,
    message:"chargement",
    datePublication:"",
    auteur:{
      id:-1,
      adresseEmail:"chargement",
      login:"chargement",
      premium:false
    }
  }]);
  onMounted(() => {
    fetch('https://webinfo.iutmontp.univ-montp2.fr/~polletm/r5.a.05-programmationavancee-web-td4/public/api/publications/' + id)
        .then(reponsehttp => reponsehttp.json())
        .then(reponseJSON => {
          publication.value = reponseJSON;
        });
  })
</script>

<template>
  <BoitePublication :publication="publication"></BoitePublication>
</template>

<style scoped>

</style>