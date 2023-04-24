/*
 * @Author: lxl
 * @Date: 2023-03-28 10:07:55
 * @LastEditTime: 2023-03-28 11:24:59
 * @LastEditors: lxl
 * @Description: do not move my code!!!
 * @FilePath: \vite-practice\src\store\count.ts
 * no bug,no world
 */
import { defineStore } from "pinia";
interface countState {
  count: Number;
}
import { ref } from "vue";
export const useCountStore = defineStore(
  "count",
  {
    state: () => {
      return {
        count: 1,
      };
    },
    actions: {
      addCount() {
        this.count++;
      },
    },
  }
  //   () => {
  //     const count = ref(0);
  //     function addCount() {
  //       count.value = 10;
  //       console.log(count.value);
  //     }
  //     return {
  //       count,
  //       addCount,
  //     };
  //   }
);
export const useNameStore = defineStore("name", () => {
  // ref => state
  const name = ref("lxl");
  // function => action
  function changeName(val: any) {
    name.value = val;
  }

  return {
    name,
    changeName,
  };
});
