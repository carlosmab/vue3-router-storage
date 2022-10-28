<script setup>
import { useRoute, useRouter } from "vue-router"; //Params
import { useGetData } from "@/composables/getData";
import { useFavoritesStore } from "@/store/favorites";

const route = useRoute();
const router = useRouter();
const useFavorites = useFavoritesStore();

const { getData, data, loading } = useGetData();
const { add, find } = useFavorites;

const back = () => {
  router.push("/pokemons");
};

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

</script>

<template>
  <p v-if="loading">Loading...</p>
  <div v-else>
    <div v-if="data">
      <img :src="data.sprites?.front_default" alt="" />
      <h1>Poke name: {{ $route.params.name }}</h1>
      <button
        class="btn btn-primary"
        @click="add(data)"
        :disabled="find(data.name)"
      >
        Add to Favorites
      </button>
    </div>
    <h1 v-else>Pokemon doesn't exists</h1>
    <button class="btn btn-outline-primary mt-2" @click="back">Back</button>
  </div>
</template>