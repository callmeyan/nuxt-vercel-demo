// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel",
  },
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss"],
  i18n: {
    //"en", "tc", "sc"
    locales: [
      {
        code: "en",
        name: "EN",
      },
      {
        code: "tc",
        name: "繁",
      },
      {
        code: "sc",
        name: "简",
      },
    ],
    defaultLocale: "tc",
    vueI18n: {
      fallbackLocale: "tc",
      messages: {
        en: {
          welcome: "Welcome",
        },
        tc: {
          welcome: "歡迎光臨",
        },
        sc: {
          welcome: "欢迎光临",
        },
      },
    },
  },
});
