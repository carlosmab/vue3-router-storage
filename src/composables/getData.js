import axios from "axios";
import { ref } from 'vue';

export const useGetData = () => {
  const data = ref(null);
  const loading = ref(true);

  const getData = async (url) => {
    try { 
      const results = await axios.get(url);
      data.value = results.data;
    } catch (e) {
      console.log(e);
    } finally {
      loading.value = false
    }
  }
  return {
    getData,
    data,
    loading
  }
}