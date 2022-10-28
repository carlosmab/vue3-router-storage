import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref([]);
  const add = (poke) => {
    favorites.value.push(poke);
  }
  const remove = (id) => {
    favorites.value = favorites.value.filter((item) => item.id != id);
  }
  const find = (name) => {
    return favorites.value.find((item) => item.name == name);
  }
  return {
    favorites,
    add,
    remove,
    find
  }
})