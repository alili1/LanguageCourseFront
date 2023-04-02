import { createApp } from 'vue'
import App from './App.vue'

if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mock/browser')
    worker.start()
  }
  
createApp(App).mount('#app')
