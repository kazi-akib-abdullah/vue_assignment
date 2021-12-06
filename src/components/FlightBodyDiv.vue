<template>
  <div>
    <div class="row">
      <h2>Ready for your next trip? Book with us now</h2>
    </div>
    <div class="row">
      <div class="col-8 justify-content-start ps-5">
        <div>
          <a
            class="nav-link active text-secondary"
            style="text-decoration: none"
            href=""
            ><h4><span class="border-bottom border-3">Flights</span></h4></a
          >
          <h5 class="text-primary">
            <ul style="overflow: hidden">
              <li class="pe-5" style="display: inline-block">Reedem flights</li>
              <li style="display: inline-block">Multi-city / stopover</li>
            </ul>
          </h5>
        </div>
        <div>
          <form action="">
            <div class="card-group">
              <div class="card btn">
                <div class="card-body text-secondary">
                  <h6 class="card-title text-secondary">Leaving from</h6>
                  <div
                    class="form-control me-2 button btn-outline"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                    data-toggle="myModal"
                  >
                    <h3>DAC</h3>
                    <h5 class="text-secondary">Dhaka</h5>
                  </div>

                  <!-- <Modal :modalActive= "modalActive">
                    <div class="modal-content">
                      <h1>Modal Header</h1>
                      <p>Paragraph</p>
                    </div>
                  </Modal>
                  <button @click="toggleModal" type="button">Open Modal</button> -->
                </div>
              </div>
              <div class="card btn">
                <div class="card-body">
                  <h6 class="card-title text-secondary">Going to</h6>
                  <div
                    class="form-control me-2 button btn-outline"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                    data-toggle="myModal"
                  >
                    <h3>DAC</h3>
                    <h5 class="text-secondary">Dhaka</h5>
                  </div>
                </div>
              </div>
              <div class="card btn">
                <div id="FlightBodyDiv" class="text-secondary">
                  <h6 id="FlightBodyDiv" class="card-title">Departing on</h6>
                  <date-picker
                    v-model="range"
                    lang="en"
                    :clearable="true"
                    range
                    type="date"
                    width="500"
                  ></date-picker>

                  <h6 class="card-title">Returning on</h6>
                  <date-picker
                    v-model="range"
                    lang="en"
                    :clearable="true"
                    range
                    type="date"
                    width="500"
                  ></date-picker>
                </div>
              </div>
              <div class="card btn" style=" background: linear-gradient(315deg,#005d63 0,#202f42 99.93%);">
                <div class="card-body">
                  <i
                    style="position: absolute; top: 60px; right: 90px"
                    class="fas fa-fighter-jet fa-2x text-white"
                  ></i>
                  <h5
                    style="position: absolute; bottom: 15px"
                    class="card-title text-white fixed-bottom"
                  >
                    Search flights
                  </h5>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="pt-3">
          <h5 class="text-primary">
            <ul style="overflow: hidden">
              <li class="pe-5" style="display: inline-block">
                Return <i class="fas fa-angle-down"></i>
              </li>
              <li style="display: inline-block">
                Economy, 1 Adult <i class="fas fa-angle-down"></i>
              </li>
            </ul>
          </h5>
        </div>
        <div>
          <div class="card-group">
            <div
              class="card btn"
              style="
                background: linear-gradient(315deg, #005d63 0, #202f42 99.93%);
              "
            >
              <div class="card-body d-flex justify-content-center pb-4">
                <i
                  class="fas fa-list-ul text-white border"
                  style="
                    display: inline-block;
                    border-radius: 50px;
                    padding: 0.8em 0.8em;
                  "
                ></i>
                <h6
                  style="position: absolute; bottom: 0px"
                  class="card-title text-white pt-3"
                >
                  Manage booking
                </h6>
              </div>
            </div>
            <div
              class="card btn"
              style="
                background: linear-gradient(315deg, #005d63 0, #202f42 99.93%);
              "
            >
              <div class="card-body d-flex justify-content-center pb-4">
                <i
                  class="fas fa-sticky-note text-white border"
                  style="
                    display: inline-block;
                    border-radius: 50px;
                    padding: 0.8em 0.8em;
                  "
                ></i>
                <h6
                  style="position: absolute; bottom: 0px"
                  class="card-title text-white"
                >
                  Check in
                </h6>
              </div>
            </div>
            <div
              class="card btn"
              style="
                background: linear-gradient(315deg, #005d63 0, #202f42 99.93%);
              "
            >
              <div class="card-body d-flex justify-content-center pb-4">
                <i
                  class="fas fa-exchange-alt text-white border"
                  style="
                    display: inline-block;
                    border-radius: 50px;
                    padding: 0.8em 0.8em;
                  "
                ></i>
                <h6
                  style="position: absolute; bottom: 0px"
                  class="card-title text-white"
                >
                  Rebook and refund
                </h6>
              </div>
            </div>
            <div
              class="card btn"
              style="
                background: linear-gradient(315deg, #005d63 0, #202f42 99.93%);
              "
            >
              <div class="card-body d-flex justify-content-center pb-4">
                <i
                  class="fa fa-place-of-worship text-white border"
                  style="
                    display: inline-block;
                    border-radius: 50px;
                    padding: 0.8em 0.8em;
                  "
                ></i>
                <h6
                  style="position: absolute; bottom: 0px"
                  class="card-title text-white"
                >
                  COVID-19 updates
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 justify-content-end">
        <img
          src="../assets/beach.jpg"
          alt="Beach"
          style="height: 600px; weight: 400px"
          srcset=""
        />
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal1"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title justify-content-center text-primary" id="exampleModalLabel">Select City</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form method="POST" @submit.prevent="functionName">
        <div class="modal-body">   
            <div class="mb-3">
              <label for="recipient-name1" class="col-form-label text-start"
                >Going to:</label
              >
              <input type="text" class="form-control" id="recipient-name1" v-on:keyup="this.depIata" v-model="goingTo" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label"
                >Leaving From:</label
              >
              <input type="text" class="form-control" id="recipient-name" v-on:onkeyup="this.desIdata" v-model="leavingFrom"/>
            </div>

          
        </div>
        <div class="modal-footer">
          <input
            type="submit"
            class="btn btn-secondary" 
            data-bs-dismiss="modal"  value="Apply"
          />
          <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
        </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import DatePicker from "vue3-datepicker";
// import Axios from "vue-axios";
import axios from 'axios';
// import HotelDatePicker from 'vue-hotel-datepicker';
// import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';

// import DatePicker from "vue-datepicker";
// import Modal from '/src/components/Modal.vue'

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      date: "",
      time: "",
      timePickerOptions: {
        start: "00:00",
        step: "00:30",
        end: "23:30",
      },
      datetime: "",
      range: "",
      leavingFrom: "",
      goingTo: "",
      apiData: null
    };
  },
  methods: {
    functionName: function async () {
      
      console.log(this.leavingFrom + this.goingTo);
      var url = "https://api.sharetrip.net/api/v1/flight/search?tripType=Return&adult=1&child=0&infant=0&class=Economy&origin=" + this.goingTo + "&destination=" + this.leavingFrom + "&depart=" + "2021-12-12" + "&depart=" + "2021-12-15"
      axios.get(url).then(response => (this.apiData = response));
      console.log(this.response);
      
    },

  }
};
</script>