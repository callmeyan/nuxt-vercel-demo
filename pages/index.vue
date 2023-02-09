<template>

  <div>
    <!-- <NuxtWelcome /> -->
    <!-- <h1>xxx</h1> -->
    <Tutorial>
      <h1>--&lt;{{ $t('welcome') }}&gt;--</h1>
      <h2>counter：{{ counter }}</h2>
      <button @click="counter++">counter ++</button>

      <div class="lang-links mt-2">
        <NuxtLink
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          :to="localeLocation('/', 'en')">English</NuxtLink>
        <NuxtLink
          class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          :to="localeLocation('/', 'sc')">Simplified Chinese</NuxtLink>
        <NuxtLink
          class="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
          :to="localeLocation('/', 'tc')">Traditional Chinese</NuxtLink>
      </div>
    </Tutorial>
  </div>
</template>
<script setup>
// import { localeLocation } from 'vue-i18n-routing';
const counter = useCounter();
// export default {
//   setup() {
//     const counter = useCounter();
//     return {
//       counter
//     }
//   }
// }

</script>

<style lang="less" scoped>
.lang-links {
  a {
    display: inline-block;
  }
}
</style>