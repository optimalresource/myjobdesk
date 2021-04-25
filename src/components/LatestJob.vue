<template>
  <div>
    <div class="latest_job_wrapper jb_cover">
      <div class="container">
        <div class="row">
          <div class="job_main_overflow jb_cover">
            <div class="latest_job_overlow jb_cover">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="latest_job_toper jb_cover">
                  <h1>latest jobs</h1>
                  <div class="latest_job_tabs">
                    <ul class="nav nav-tabs">
                      <!-- <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#">
                          all</a
                        >
                      </li> -->
                      <!-- <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#menu1"
                          >featured</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#menu2">
                          remotely</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#menu3">
                          part time</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#menu4">
                          full time</a
                        >
                      </li> -->
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12">
                <div
                  v-for="(latestJob, index) in latestJobs"
                  :key="index.id"
                  class="tab-content"
                >
                  <div id="home" class="tab-pane active">
                    <div class="latest_job_box jb_cover">
                      <div class="job_list">
                        <a href="#"
                          ><img :src="latestJob.url" alt="img" />
                          <h6>{{ latestJob.title }}</h6></a
                        >
                      </div>
                      <div class="job_list_next">
                        <p>google</p>
                      </div>
                      <div class="job_list_next">
                        <p>Remotely</p>
                      </div>
                      <div class="job_list_next">
                        <p>new york</p>
                      </div>
                      <div class="job_list_next">
                        <p>$9,000</p>
                      </div>
                      <div class="job_list_next">
                        <div class="header_btn search_btn apply_btn jb_cover">
                          <a @click.prevent="openNav" href="#">Apply</a>
                        </div>
                      </div>
                      <div id="myNav" class="overlay">
                        <a href="#" class="closebtn" @click.prevent="closeNav"
                          >&times;</a
                        >
                        <div class="overlay-content text-white">
                          <h5 class="text-center text-white">
                            Job Description
                          </h5>
                          <div class="container">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span class="se_all_job"
                  ><a href="/jobList"
                    >See All Jobs <i class="fas fa-long-arrow-alt-right"></i></a
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LatestJob",
  data: function() {
    return {
      latestJobs: [],
      // job_discription: ""
    };
  },
  methods: {
    openNav() {
      document.getElementById("myNav").style.width = "100%";
    },
    closeNav() {
      document.getElementById("myNav").style.width = "0%";
    },
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
    populate: function() {
      var request = {};
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Fetch Available Jobs"
      };
      axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=10", {
          data: request,
          headers: headers
        })
        .then(response => {
          console.log(response);
          this.index + 1;
          this.latestJobs = response.data;
          // for (let i = 0; i < this.latestJobs.length; i++) {
          //   this.job_discription.push(this.latestJob.albumId);
          //   console.log(this.job_discription);
          // }
        })
        .catch(error => {
          console.log("Failed to fetch Available Jobs " + error.message);
        });
    }
  },
  created: function() {
    this.populate();
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>

<style scoped>
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}
/* 
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
} */

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>
