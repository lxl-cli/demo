<!--
 * @Author: lxl
 * @Date: 2023-03-28 09:56:16
 * @LastEditTime: 2023-03-31 11:29:30
 * @LastEditors: lxl
 * @Description: do not move my code!!!
 * @FilePath: \vite-practice\src\components\HelloWorld.vue
 * no bug,no world
-->
<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
function close() {
  console.log("123123");
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card" style="background-color: pink">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
