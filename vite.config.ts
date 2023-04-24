/*
 * @Author: lxl
 * @Date: 2023-03-28 09:56:16
 * @LastEditTime: 2023-04-10 14:20:48
 * @LastEditors: lxl
 * @Description: do not move my code!!!
 * @FilePath: \vite-practice\vite.config.ts
 * no bug,no world
 */
/*
 * @Author: lxl
 * @Date: 2023-03-28 09:56:16
 * @LastEditTime: 2023-04-10 11:28:14
 * @LastEditors: lxl
 * @Description: do not move my code!!!
 * @FilePath: \vite-practice\vite.config.ts
 * no bug,no world
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import initVitePlugin from "./build/vite/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "web",
  },
  plugins: [vue(), initVitePlugin()],
});
