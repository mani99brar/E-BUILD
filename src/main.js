import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import VWave from 'v-wave'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faEnvelope,faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { faLinkedin,faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faEnvelope,faLinkedin,faTwitter,faArrowRight,faArrowLeft)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(VWave)
app.use(MotionPlugin)
app.mount('#app')
