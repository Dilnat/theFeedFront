<script setup lang="ts">
  import type {Ref} from "vue";
  import {ref} from "vue";
  import type {Publication} from "@/types";
  import BoitePublication from "@/components/BoitePublication.vue";

  const publications:Ref<Publication[]> = ref([{
    id:3,
    message:"Hello world !!",
    datePublication:"2023-09-15T12:02:09.037Z",
    auteur:{
      id:4,
      adresseEmail:"toto@gouv.fr",
      login:"toto",
      premium:false
    }
  },{
    id:4,
    message:"Good Morning !!",
    datePublication:"2023-09-15T12:02:09.037Z",
    auteur:{
      id:5,
      adresseEmail:"tony@gouv.fr",
      login:"tony",
      premium:false
    }
  }]);
</script>


<template>
  <ul>
    <li v-for="publication in publications"  :key="publication.id">
      <BoitePublication :publication="publication"></BoitePublication>
    </li>
  </ul>
</template>