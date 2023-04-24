/*
 * @Author: lxl
 * @Date: 2023-04-10 11:16:27
 * @LastEditTime: 2023-04-10 15:05:22
 * @LastEditors: lxl
 * @Description: do not move my code!!!
 * @FilePath: \vite-practice\build\vite\plugin\zip.js
 * no bug,no world
 */
import {
    resolve
} from 'path'
import {
    readdirSync,
    existsSync
} from 'fs'
import compressing from 'compressing'
export const initZipPlugin = function (output) {
    const makeZip = () => {
        if (!output) output = resolve(__dirname, '../dist')
        const webPath = resolve('web')
        const filename = 'web.zip'
        const zipPath = resolve(filename)
        compressing.zip.compressDir(webPath, 'web.zip')
    }
    return {
        name: 'vite-plugin-vue-zip',
        apply: 'build',
        
        closeBundle() {
            makeZip()
        }
    }

}