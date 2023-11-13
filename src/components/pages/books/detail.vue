<script setup>
import { onMounted } from "vue";
import { useBookSearch } from "@/composables/useBookSearch.js";
import ArrowLeft from "@/components/svg/arrow-left.vue";
import Spinner from "@/components/ui/loaders/spinner.vue";

const { detail, router, fetching, fetchBookById } = useBookSearch();

onMounted(fetchBookById);
</script>
<template>
  <div class="container mx-auto">
    <section class="book-details px-6 md:px-0">
      <div class="flex space-x-2 my-5 items-center">
        <ArrowLeft
          class="mr-2 cursor-pointer dark:text-white"
          @click="router.go(-1)"
        />
        <h1 class="text-3xl dark:text-white">Book Details</h1>
      </div>

      <div v-show="fetching" class="flex justify-center mb-6">
        <Spinner />
      </div>

      <div v-if="!fetching" class="flex md:space-x-4 flex-col md:flex-row">
        <div class="thumbnail w-full sm:w-[300px] shrink-0">
          <img
            class="w-full"
            :src="detail?.volumeInfo?.imageLinks?.thumbnail"
            alt=""
          />
        </div>
        <div class="w-full pt-3">
          <h1 class="title text-2xl mb-2 dark:text-white">
            {{ detail?.volumeInfo?.title }}
          </h1>
          <div class="mb-10">
            <p class="mb-8 font-normal text-gray-700 dark:text-gray-400">
              Authors:
              <span
                class="mr-2"
                v-for="author in detail?.volumeInfo?.authors"
                >{{ author }}</span
              >
            </p>
            <p
              class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify"
              v-html="detail?.volumeInfo?.description"
            ></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
