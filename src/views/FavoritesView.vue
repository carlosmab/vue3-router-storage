<script setup>
import { storeToRefs } from "pinia";
import { useFavoritesStore } from "@/store/favorites.js"

const useFavorites = useFavoritesStore();
const { remove } = useFavorites;
const { favorites } = storeToRefs(useFavorites);

</script>

<template>
  <h1>Favorites</h1>
  <p v-if="favorites.length == 0">Without favorites</p>
  <ul class="list-group">
      <li v-for="poke in favorites" :key="poke.name" class="list-group-item">
        <div>
          {{ poke.name }}
        </div>
        <div>
          <button class="btn btn-danger" @click="remove(poke.id)">Eliminar</button>
        </div>
      </li>
    </ul>
</template>