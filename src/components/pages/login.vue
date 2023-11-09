<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const MAX_LENGTH = 16;
const router = useRouter();
const form = ref({
  username: "",
  token: ""
});

const onChange = (e) => {
  const val = e.target.value;
  let filteredStr = val.match(/[a-zA-Z]/g)?.join?.("");

  if (filteredStr?.length >= MAX_LENGTH) {
    filteredStr = filteredStr.slice(0, MAX_LENGTH - 1);
  }

  e.target.value = filteredStr || "";
};

const onSubmit = () => {
  router.push({
    name: "Home"
  });
};
</script>

<template>
  <div class="w-[500px] p-6 m-auto">
    <form @submit.prevent="onSubmit">
      <div class="mb-6">
        <label
          for="username"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Username</label
        >
        <input
          type="text"
          id="username"
          v-model="form.username"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Username"
          required
          @input="onChange"
        />
      </div>
      <div class="mb-6">
        <label
          for="token"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Token</label
        >
        <input
          type="text"
          id="token"
          v-model="form.token"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="•••••••••"
          required
        />
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </div>
</template>
