<script setup>
defineProps({
  card: {
    type: Object,
    default: () => ({}),
    required: true
  }
});
</script>

<template>
  <div
    class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex"
  >
    <a class="w-[128px] block shrink-0" :href="card.previewLink">
      <img
        width="128"
        class="rounded-lg"
        :src="card?.imageLinks?.thumbnail"
        alt=""
      />
    </a>

    <div class="p-5">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ card.title }}
      </h5>

      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ card?.searchInfo?.textSnippet }}
      </p>

      <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
        Authors:
        <span class="mr-2" v-for="author in card.authors">{{ author }}</span>
      </p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Categories:
        <span class="mr-2" v-for="category in card.categories">{{
          category
        }}</span>
      </p>
      <p
        class="mb-3 font-normal text-gray-700 dark:text-gray-400"
        v-show="card.pageCount"
      >
        Pages: {{ card.pageCount }}
      </p>
      <a
        :href="card.previewLink"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          class="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
