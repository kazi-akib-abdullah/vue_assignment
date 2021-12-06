<template>
  <div>
    <div class="row">
      <h2>Ready for your next trip? Book with us now</h2>
    </div>
    <div class="row">
      <div class="col-8 justify-content-start ps-5">
        <div>
          <a class="nav-link active text-secondary" style="text-decoration: none" href="">
            <h4><span class="border-bottom border-3">Flights</span></h4></a>
          <h5 class="text-primary">
            <ul style="overflow: hidden">
              <li class="pe-5" style="display: inline-block">Reedem flights</li>
              <li style="display: inline-block">Multi-city / stopover</li>
            </ul>
          </h5>
        </div>
        <div>
          <form method="POST" @submit.prevent="functionName">
            <div class="card-group">
              <div class="card btn">
                <div class="card-body text-secondary">
                  <h6 class="card-title text-secondary">Leaving from</h6>
                  <div class="form-control me-2 button btn-outline" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-toggle="myModal">
                    <h3>{{ leavingFrom }}</h3>
                    <h5 class="text-secondary">{{ leavingFrom }}</h5>
                  </div>
                </div>
              </div>
              <div class="card btn">
                <div class="card-body">
                  <h6 class="card-title text-secondary">Going to</h6>
                  <div class="form-control me-2 button btn-outline" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-toggle="myModal">
                    <h3>{{ goingTo }}</h3>
                    <h5 class="text-secondary">{{ goingTo }}</h5>
                  </div>
                </div>
              </div>
              <div class="card btn">
                <div id="FlightBodyDiv" class="text-secondary">
                  <h6 id="FlightBodyDiv" class="card-title">Departing on</h6>
                  <input type="date" v-model="range1" >
                  <h6 class="card-title">Returning on</h6>
                  <input type="date" v-model="range2" name="" id="">
                </div>
              </div>
              <div class="card btn" style=" background: linear-gradient(315deg,#005d63 0,#202f42 99.93%);">
                <div class="card-body">
                  <i style="position: absolute; top: 50px; right: 80px" class="fas fa-fighter-jet fa-2x text-white"></i>
                  <h5><input style="position: absolute; bottom: 0px; left:10px; background: linear-gradient(315deg,#005d63 0,#202f42 99.93%);" class="card-title text-white fixed-bottom" type="submit" value="Search Flights"></h5>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="pt-3">
          <h5 class="text-primary">
            <ul style="overflow: hidden">
              <li class="pe-5" style="display: inline-block"> Return <i class="fas fa-angle-down"></i></li>
              <li style="display: inline-block"> Economy, 1 Adult <i class="fas fa-angle-down"></i></li>
            </ul>
          </h5>
        </div>
        <div>
          <div class="card-group">
            <div class="card btn" style=" background: linear-gradient(315deg, #005d63 0, #202f42 99.93%);">
              <div class="card-body d-flex justify-content-center pb-4">
                <i class="fas fa-list-ul text-white border" style=" display: inline-block; border-radius: 50px; padding: 0.8em 0.8em;"></i>
                <h6 style="position: absolute; bottom: 0px" class="card-title text-white pt-3"> Manage booking</h6>
              </div>
            </div>
            <div class="card btn" style=" background: linear-gradient(315deg, #005d63 0, #202f42 99.93%);">
              <div class="card-body d-flex justify-content-center pb-4">
                <i class="fas fa-sticky-note text-white border" style=" display: inline-block; border-radius: 50px; padding: 0.8em 0.8em;"></i>
                <h6 style="position: absolute; bottom: 0px" class="card-title text-white"> Check in</h6>
              </div>
            </div>
            <div class="card btn" style=" background: linear-gradient(315deg, #005d63 0, #202f42 99.93%);">
              <div class="card-body d-flex justify-content-center pb-4">
                <i class="fas fa-exchange-alt text-white border" style=" display: inline-block; border-radius: 50px; padding: 0.8em 0.8em;"></i>
                <h6 style="position: absolute; bottom: 0px" class="card-title text-white"> Rebook and refund</h6>
              </div>
            </div>
            <div class="card btn" style=" background: linear-gradient(315deg, #005d63 0, #202f42 99.93%);">
              <div class="card-body d-flex justify-content-center pb-4">
                <i class="fa fa-place-of-worship text-white border" style="display: inline-block; border-radius: 50px; padding: 0.8em 0.8em;"></i>
                <h6 style="position: absolute; bottom: 0px" class="card-title text-white"> COVID-19 updates</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 justify-content-end">
        <img src="../assets/beach.jpg" alt="Beach" style="height: 600px; weight: 400px" srcset=""/>
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
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form>
        <div class="modal-body">   
            <div class="mb-3">
              <label for="recipient-name1" class="col-form-label text-start">Going to:</label>
              <input type="text" class="form-control" id="recipient-name1" v-on:keyup="this.depIata" v-model="goingTo" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Leaving From:</label>
              <input type="text" class="form-control" id="recipient-name" v-on:onkeyup="this.desIdata" v-model="leavingFrom"/>
            </div>          
        </div>
        <div class="modal-footer">
          <input type="" class="btn btn-secondary" data-bs-dismiss="modal"  value="Apply"/>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios';



// import Modal from '/src/components/Modal.vue'

export default {
  components: {

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
      range1: "",
      range2: "",
      leavingFrom: "",
      goingTo: "",
      apiData: null
    };
  },
  methods: {
    functionName: async function () {      
      console.log(this.leavingFrom + this.goingTo);
      var url = "https://api.sharetrip.net/api/v1/flight/search?tripType=Return&adult=1&child=0&infant=0&class=Economy&origin=" + this.goingTo + "&destination=" + this.leavingFrom + "&depart=" + this.range1 + "&depart=" + this.range2;
        var maindata;
        var destinationIataCode;
        var originIataCode;
        var destinationTime;
        var originTime;
        var duration;
        var price;
        var airlineCode;
        var flightNumber;
      
      // eslint-disable-next-line no-unused-vars
      let response = await axios.get(url).then(function(response){return response})
      // var price = response.data.flights[0].price;
      // console.log(price);
      console.log(response);
                response.then(
                    (data) => (
                        (maindata = data),
                        // console.log(data.response.flights[0].flight[0].originName.code)
                        // console.log(maindata),
                        (destinationIataCode =
                            maindata.response.flights[0].flight[0].destinationName.code),
                        (originIataCode =
                            maindata.response.flights[0].flight[0].originName.code),
                        (destinationTime =
                            maindata.response.flights[0].flight[0].departureDateTime.time),
                        (originTime =
                            maindata.response.flights[0].flight[0].arrivalDateTime.time),
                        (duration = maindata.response.flights[0].flight[0].duration),
                        (price = maindata.response.flights[0].price),
                        (airlineCode =
                            maindata.response.flights[0].segments[0].segment[1].airlines
                            .code),
                        (flightNumber =
                            maindata.response.flights[0].segments[0].segment[1]
                            .flightNumber),
                        console.log(
                            destinationIataCode,
                            "\n",
                            originIataCode,
                            "\n",
                            destinationTime,
                            "\n",
                            originTime,
                            "\n",
                            duration,
                            "\n",
                            price,
                            "\n",
                            airlineCode,
                            "\n",
                            flightNumber
                        )
                    )
                );
                // console.log(response)
            
    },

  }
};
</script>
