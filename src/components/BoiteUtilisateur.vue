<script setup lang="ts">
  import type {Utilisateur} from '@/types';
  const props = defineProps<{utilisateur: Utilisateur}>();
</script>

<template>
  <div class="contentBox">
    <div class="top">
      Profil de <router-link :to="{name:'singleUser', params:{id:utilisateur.id}}" class="clickable">{{ utilisateur.login }}</router-link>
    </div>
    <div class="content">
      <div class="group">
        <label>Login</label>
        <input :value="utilisateur.login" >
      </div>
      <div class="group">
        <label>Adresse e-mail</label>
        <input :value="utilisateur.adresseEmail" >
      </div>
    </div>
  </div>

</template>

<style scoped>
  @import "/src/components/ContentBox.css";
</style>