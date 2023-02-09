<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex items-top justify-center page-full-height bg-gray-100 sm:items-center sm:pt-0"
  >
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <a
        class="flex justify-center pt-8 sm:pt-0"
        href="https://nuxtjs.org"
        target="_blank"
      >
        <img
          class="logo"
          src="https://www.nuxtjs.cn/logos/built-with-nuxt.svg"
        />
      </a>

      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <p>Welcome!</p>
        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          To get started, remove
          <code class="bg-gray-100 text-sm p-1 rounded border"
            >components/Tutorial.vue</code
          >
          and start coding in
          <code class="bg-gray-100 text-sm p-1 rounded border"
            >pages/index.vue</code
          >. Have fun!
        </p>
      </div>
      <div class="mt-2 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h1>hehe edit by local vscode!</h1>

        <h2>counter：{{ counter }}</h2>
        <button class="btn btn--primary" @click="counter--">counter --</button>
        <button class="bg-black text-white rounded-md" @click="counter++">
          counter ++
        </button>
      </div>
      <div class="mt-2 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <p>
          Click
          <code>
            <a href="/demo">here</a>
          </code>
          <nuxt-link to="/demo">demo</nuxt-link>
          to navigate to Demo page!
        </p>
      </div>
      <div class="mt-2 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const counter = useCounter();
</script>

<style>
.logo {
  width: 200px;
}
</style>
