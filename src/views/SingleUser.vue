<script setup lang="ts">
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const id = route.params.id
</script>

<template>
  Ceci est la vue de l'utilisateur {{id}}
</template>

<style scoped>

</style>