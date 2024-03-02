import {createAlova} from 'alova'
import AdapterTaroVue from '@alova/adapter-taro/vue'

export const alovaInstant = createAlova({
  baseURL: 'https://api.lifehelper.com.cn',
  ...AdapterTaroVue()
})
