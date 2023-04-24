<!--
 * @Author: lxl
 * @Date: 2023-03-28 09:56:16
 * @LastEditTime: 2023-03-31 11:23:18
 * @LastEditors: lxl
 * @Description: do not move my code!!!
 * @FilePath: \vite-practice\src\App.vue
 * no bug,no world
-->
<script setup lang="ts">
import { storeToRefs } from "pinia";
import HelloWorld from "./components/HelloWorld.vue";
import { useNameStore, useCountStore } from "./store/count";

const countStore = useCountStore();
const nameStore = useNameStore();

const { name } = storeToRefs(nameStore);
</script>

<template>
  <div></div>
  {{ countStore.count }}
  <button @click="countStore.addCount">+</button>
  {{ name }}
  {{ nameStore.name }}
  <button @click="nameStore.changeName('11')">+</button>
  <HelloWorld msg="Vite + Vue" />
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
