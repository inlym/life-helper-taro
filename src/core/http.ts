import {createAlova} from 'alova'
import AdapterTaroVue from '@alova/adapter-taro/vue'
import {environments} from './env'

export const alovaInstance = createAlova({
  baseURL: environments.baseURL,
  ...AdapterTaroVue()
})
