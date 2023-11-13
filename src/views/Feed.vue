<script setup lang="ts">
  import BoitePublication from "@/components/BoitePublication.vue";
  import {ref, onMounted } from 'vue'
  const publications = ref([]);

  onMounted(() => {
    fetch('https://webinfo.iutmontp.univ-montp2.fr/~polletm/r5.a.05-programmationavancee-web-td4/public/api/publications')
        .then(reponsehttp => reponsehttp.json())
        .then(reponseJSON => {
          publications.value = reponseJSON["hydra:member"];
        });
  })
</script>


<template>
  <ul>
    <li v-for="publication in publications"  :key="publication.id">
      <BoitePublication :publication="publication"></BoitePublication>
    </li>
  </ul>
</template>