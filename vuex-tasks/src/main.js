import { createApp } from 'vue'
import App from './App.vue'
import "vuetify/styles";
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import store from './store/index'
const app = createApp(App);


const vuetify = createVuetify({
    components,
    directives,
})
app.use(store)
app.use(vuetify)
app.mount('#app')
