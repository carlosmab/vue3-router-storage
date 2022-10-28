import { ref, computed } from 'vue'; 
import { defineStore } from 'pinia';

// Composition API
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const increment = () => {
    count.value++;
  }
  const double = computed(() => {
    return 2 * count.value;
  })

  return {
    count,
    increment,
    double
  }
}) 


// Option API
// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     count: 0
//   }),
//   actions: {
//     increment() {
//       this.count++;
//     }
//   },
//   getters: {
//     double: (state) => state.count * 2
//   }
// })