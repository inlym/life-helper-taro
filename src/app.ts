import {createApp} from 'vue'
import {createPinia} from 'pinia'

import './app.scss'

const App = createApp({
  onShow(options) {
    console.log(options)
  }
})

App.use(createPinia())

export default App
