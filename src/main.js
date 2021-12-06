import { createApp } from 'vue'
// import VuePlaceAutocomplete from 'vue-place-autocomplete';
import App from './App.vue'
import FlightNav from './components/FlightNav.vue'
import AlertNavCovid from './components/AlertNavCovid.vue'
import FlightBodyDiv from './components/FlightBodyDiv.vue'

var app = createApp(App);

app.component("flight-nav", FlightNav)
app.component("alert-nav", AlertNavCovid)
app.component("flight-body-div", FlightBodyDiv)

app.mount('#app')
