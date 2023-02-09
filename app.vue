<template>
    <header class="flex items-center">
        <div class="flex justify-between w-full header-content-height">
            <nav>
                <NuxtLink :to="localeLocation('/')">
                    <img src="https://www.chuhai.edu.hk/sites/all/themes/cce/logo.png" class="nav-site-logo" />
                </NuxtLink>
            </nav>
            <div>
                <!-- current lang is -- {{ $i18n.locale }} -->
                <NuxtLink class="lang-list-item" v-for="l in langs" :key="l.code" :to="localeLocation('/', l.code)">{{
                    l.name
                }}</NuxtLink>
            </div>
        </div>
    </header>

    <NuxtPage />
</template>
<script>

import { localeLocation } from 'vue-i18n-routing';
// const langs = computed(()=>{

// })
export default {
    computed: {
        langs() {

            return this.$i18n.locales.filter(l => l.code != this.$i18n.locale)
        }
    }
}
</script>
<style lang="less">
:root {
    --header-height: 65px;
    --nav-content-height: 55px;
    --base-font-size: 14px;
}

body {
    font-size: var(--base-font-size);
}

header {
    background-color: aqua;
    height: var(--header-height);
    padding: 0 20px;
}

.header-content-height {
    height: var(--nav-content-height);
    line-height: var(--nav-content-height);
}

.lang-list-item {
    display: inline-block;
    margin: 0 5px;

    &:hover {
        text-decoration: underline;
    }
}

.page-full-height {
    height: calc(100vh - var(--header-height));
}
</style>
