<script setup lang="ts">
import {useRouter, RouterLink} from 'vue-router';
import type { Publication } from '@/types';

const router = useRouter();
const props = defineProps<{publication:Publication}>();
</script>

<template>
  <div class="contentBox">
    <div class="top">
      <router-link :to="{name:'singleUser', params: {id: publication.auteur.id}}" class="clickable">
        {{publication.auteur.login}}
      </router-link>
      -- {{(new Date(publication.datePublication)).toLocaleString("fr")}}
    </div>
    <div class="content clickable" @click="router.push({name:'singleMessage', params: {id: publication.id}})">
      <router-link :to="{name:'singleMessage', params: {id: publication.id}}" class="clickable">
        {{publication.message}}
      </router-link>
    </div>
  </div>
</template>

<style scoped>
@import "@/components/ContentBox.css";
</style>
