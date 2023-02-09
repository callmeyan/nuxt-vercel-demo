<template>
    <div class="page-demo">
        <h1>{{ contentTitle }}</h1>
        <nuxt-link to="/">首页</nuxt-link>
        <div>IP:{{ ip || "ip loading..." }}</div>
        <div>Client IP:{{ clientIP || "clientIP loading..." }}</div>
        <h2>counter：{{ counter }}</h2>
        <button @click="counter --">counter --</button>
    </div>
</template>

<script setup>
function fetchClientIP() {
    return fetch("https://api.wm-app.xyz/ip/").then(r => r.text());
}
function loadIP() {
    fetchClientIP().then(ip => (this.clientIP = ip));
}
const counter = useCounter();
const contentTitle = "page-demo-static";
const { data: ip } = await useFetch('https://api.wm-app.xyz/ip/');//useAsyncData(fetchClientIP,{lazy:true})
const clientIP = ref(null)
onMounted(() => {
    fetchClientIP().then(ip => clientIP.value = ip)
})
// export default {
//     data() {

//         return {
//             contentTitle,
//             ip: null,
//             clientIP: null
//         };
//     },
//     mounted() {
//         this.loadIP();
//     },
//     asyncData() {
//         return fetchClientIP().then(ip => {
//             return { ip, contentTitle: "callbcal" };
//         });
//     },
//     methods: {
//         loadIP() {
//             fetchClientIP().then(ip => (this.clientIP = ip));
//         }
//     }
// };
</script>
<style lang="less" scoped>
.page-demo {
    text-align: center;
}
</style>
