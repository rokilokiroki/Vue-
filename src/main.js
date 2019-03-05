import Vue from 'vue'
import Zyankenn from './components/Zyankenn.vue'
Vue.config.productionTip = false
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