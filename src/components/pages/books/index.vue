<script setup>
import { onMounted } from "vue";
import { useBookSearch } from "@/composables/useBookSearch.js";
import BookCards from "@/components/ui/book-cards";
import Spinner from "@/components/ui/loaders/spinner.vue";

const { searchForm, results, fetching, getVolumesByPhrase, onSearchInput } =
  useBookSearch();

onMounted(getVolumesByPhrase);
</script>

<template>
  <div>
    <div class="container mx-auto">
      <div class="search-input-container">
        <div class="search-input-row">
          <div class="my-6">
            <input
              type="text"
              v-model="searchForm.text"
              placeholder="Search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              @input="onSearchInput"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto mt-5">
      <section class="results-body">
        <div v-show="!results.totalItems && !fetching">No results</div>

        <div
          v-show="!results.totalItems && fetching"
          class="flex justify-center mb-6"
        >
          <Spinner />
        </div>

        <div
          :class="[
            {
              'opacity-50 pointer-events-none': fetching
            }
          ]"
        >
          <div class="stats-section mb-5" v-show="results?.totalItems">
            <div class="d-flex">
              <h1>Total {{ results?.totalItems }}</h1>
            </div>
          </div>

          <BookCards
            class="book-item-card mb-5 border-dotted"
            v-for="item in results?.items"
            :key="item.id"
            :id="item.id"
            :card="item?.volumeInfo"
          />
        </div>
      </section>
    </div>
  </div>
</template>
