<script setup>
import { useRoute, useRouter } from "vue-router" //Params
import { useGetData } from "@/composables/getData";

const route = useRoute();
const router = useRouter();

const { getData, data, loading } = useGetData();

const back = () => {
  router.push('/pokemons');
}

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
  <p v-if="loading">Loading...</p>
  <div v-else>
    <div v-if="data">
    <img :src="data.sprites?.front_default" alt="" />
    <h1>Poke name: {{ $route.params.name }}</h1>
    </div>
    <h1 v-else>
      Pokemon doesn't exists
    </h1>
    <button class="btn btn-outline-primary" @click="back">Back</button>
  </div>
</template>