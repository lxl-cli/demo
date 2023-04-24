/*
 * @Author: lxl
 * @Date: 2023-03-28 09:56:16
 * @LastEditTime: 2023-04-10 11:21:46
 * @LastEditors: lxl
 * @Description: do not move my code!!!
 * @FilePath: \vite-practice\src\main.ts
 * no bug,no world
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);
// import clickOutSide from "./directives/clickOutSide";
// app.directive("clickOutSide", clickOutSide);
app.directive("loading", {
  created(el) {
    console.log(el);
  },
});

app.use(pinia).mount("#app");
