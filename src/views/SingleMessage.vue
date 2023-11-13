<script setup lang="ts">
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const id = route.params.id
</script>

<template>
  J'affiche le message d'id {{id}}
</template>

<style scoped>

</style>