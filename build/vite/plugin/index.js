import {
    initZipPlugin
} from './zip'
export default function initPlugin() {
    const vitePlugins = []
    vitePlugins.push(initZipPlugin())
    return vitePlugins
}