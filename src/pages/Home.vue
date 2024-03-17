<script lang="ts" setup>
import { ref } from "vue";

const weight = ref(0);
const result = ref(0);
const handler = () => {
  result.value = weight.value * 0.02;
};
</script>
<template>
  <div class="wrapper shadow-lg bg-white h-full flex-1 my-4">
    <form class="grid gap-8" @submit.prevent="handler">
      <div class="">
        <label
          for="default-input"
          class="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >Ile ważysz :</label
        >
        <input
          v-model="weight"
          type="number"
          id="default-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button
        class="bg-blue-700 hover:bg-blue-800 rounded-md text-white px-8 py-2"
        type="submit"
      >
        Oblicz
      </button>
    </form>
    <div v-if="result" class="grid gap-2">
      <div class="gap-1">
        <div>Powinnaś/powinieneś pić dziennie</div>
        <h2 class="text-lg font-bold" v-if="result">{{ result }} l. wody</h2>
        <h2 class="text-lg" v-if="result">Czyli ok.</h2>
        <h2 class="text-lg font-bold" v-if="result">
          {{ result * 4 }} - kubka
        </h2>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  width: min(70rem, 100%);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}
form {
  width: min(100%, 20rem);
  gap: 1.5rem;
}
</style>
