import { ref } from "vue";
import axios from "@/plugins/axios.js";
import debounce from "@/functions/debounce.js";
import { useRouter, useRoute } from "vue-router";

export const useBookSearch = () => {
  const route = useRoute();
  const router = useRouter();
  const searchForm = ref({
    text: route.query.q || ""
  });
  const results = ref({});
  const detail = ref({});
  const fetching = ref(false);

  const onSearchInput = debounce(getVolumesByPhrase, 600);

  function getVolumesByPhrase() {
    const textPhrase = searchForm.value.text || "";

    router.push({
      query: {
        q: textPhrase
      }
    });

    if (!textPhrase) {
      results.value = {};
      return;
    }

    fetching.value = true;

    return axios
      .get(`/books/v1/volumes?q=${textPhrase}`)
      .then((res) => {
        results.value = res?.data || {};
        fetching.value = false;
      })
      .finally(() => {
        fetching.value = false;
      });
  }

  function fetchBookById(id) {
    fetching.value = true;
    return axios
      .get(`/books/v1/volumes/${id || route.params.id}`)
      .then((res) => {
        detail.value = res?.data || {};
        fetching.value = false;
      })
      .finally(() => {
        fetching.value = false;
      });
  }

  return {
    searchForm,
    results,
    detail,
    fetching,
    router,
    onSearchInput,
    getVolumesByPhrase,
    fetchBookById
  };
};
