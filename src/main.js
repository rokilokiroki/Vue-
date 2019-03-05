import Vue from 'vue'
import Vuetify from 'Vuetify'
import Zyankenn from './components/Zyankenn.vue'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify)

const app = new Vue({
  el: '#app',
  components: {
    Zyankenn
  },
  data: {
    message: ''
  },
  methods: {
    winMessage(message) {
        this.message = message
    },
    loseMessage(message) {
        this.message = message
    },
    drawMessage(message) {
        this.message = message
    }
 }
})
app.$mount('#app')