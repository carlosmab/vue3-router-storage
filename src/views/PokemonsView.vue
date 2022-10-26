<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData";

const { getData, data, loading } = useGetData();

getData("https://pokeapi.co/api/v2/pokemon/")

</script>

<template>
  <h1>Pokemons</h1>
  <p v-if="loading">Loading...</p>
  <ul v-if="data">
    <li v-for="poke in data.results" :key="poke.name">
      <router-link :to="`/pokemons/${poke.name}`">
        {{ poke.name }}
      </router-link>
    </li>
  </ul>
</template>