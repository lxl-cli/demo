/*
 * @Author: lxl
 * @Date: 2023-03-31 11:14:04
 * @LastEditTime: 2023-03-31 12:06:53
 * @LastEditors: lxl
 * @Description: do not move my code!!!
 * @FilePath: \vite-practice\src\directives\clickOutSide.js
 * no bug,no world
 */

function on(document, target, callBack) {
  document.addEventListener(target, callBack)
}
const nodeList = [];
const ctx = '@@clickoutsideContext';

let startClick;
let seed = 0;

on(document, 'mousedown', e => (startClick = e));

on(document, 'mouseup', e => {
  nodeList.forEach(node => node[ctx].documentHandler(e, startClick));
});

function createDocumentHandler(el, binding, vnode) {
  return function (mouseup = {}, mousedown = {}) {
    console.log(el.contains(mouseup.target))
    console.log('mousedown', mousedown.target)
    console.log('mouseup', mouseup.target)
    console.log('vnode', vnode)
    if (!vnode ||
      !vnode.context ||
      !mouseup.target ||
      !mousedown.target ||
      el.contains(mouseup.target) ||
      el.contains(mousedown.target) ||
      el === mouseup.target ||
      (vnode.context.popperElm &&
        (vnode.context.popperElm.contains(mouseup.target) ||
          vnode.context.popperElm.contains(mousedown.target)))) return;

    if (binding.expression &&
      el[ctx].methodName &&
      vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
export default {
  created(el, binding, vnode) {
    console.log(binding.value.name)
    nodeList.push(el);
    const id = seed++;
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.value.name,
      bindingFn: binding.value
    };
    console.dir(nodeList)
    console.dir(el[ctx])
  },

  updated(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.value.name;
    el[ctx].bindingFn = binding.value;
  },

  unmounted(el) {
    let len = nodeList.length;

    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  }
};