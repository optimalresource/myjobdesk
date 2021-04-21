<template>
  <div class="col-lg-9 col-md-12 col-sm-12 col-12">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="manage_jobs_wrapper jb_cover">
          <div class="job_list mange_list applications_recent">
            <h6>available jobs</h6>
          </div>
        </div>
      </div>
      <div
        v-for="(job, index) in jobs"
        :key="index"
        class="col-lg-12 col-md-12 col-sm-12 col-12 mb-4"
      >
        <div class="jb_listing_left_fullwidth mt-0 jb_cover">
          <div class="row">
            <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              <div class="col-sm-12">
                <div class="jb_job_post_side_img">
                  <img src="images/lt1.png" alt="post_img" />
                </div>
                <h5>
                  <a href="#">{{ job.title }}</a>
                </h5>
                <!-- <h6>{{ job.job_title }}</h6> -->
                <h4>{{ job.job_title }}</h4>
                <p>{{ job.body }}</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 col-12">
              <div class="jb_job_post_right_btn_wrapper">
                <ul>
                  <li>
                    <button
                      data-toggle="modal"
                      data-target="#myModal1"
                      class="btn btn-outline-success"
                      @click.prevent="populate(index)"
                    >
                      Apply
                    </button>
                  </li>
                </ul>
                <div class="modal fade" id="myModal1">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">More Description</h4>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                        >
                          &times;
                        </button>
                      </div>

                      <div class="modal-body">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                          <div class="row">
                            <div
                              class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                            >
                              <div class="col-sm-12">
                                <div class="jb_job_post_side_img">
                                  <img src="images/lt1.png" alt="post_img" />
                                </div>
                                <h5>
                                  <a href="#">{{ preview.title }}</a>
                                </h5>
                                <h6>{{ job.job_title }}</h6>
                              </div>
                              <br />
                              <br />
                              <hr />
                              <div class="col-sm-12 col-12">
                                <div>
                                  <div>
                                    <span><h6>Job type:</h6></span>
                                    {{ preview.body }}
                                  </div>
                                  <br />
                                  <div>
                                    <span><h6>Location:</h6></span>
                                    {{ preview.body }}
                                  </div>
                                  <br />
                                  <div>
                                    <span><h6>Educational Level:</h6></span>

                                    {{ preview.userId }}
                                  </div>
                                  <br />
                                  <span
                                    >Salary:
                                    <h6>
                                      <div>{{ job.salary }}</div>
                                    </h6></span
                                  >
                                  <br />
                                  <div>
                                    <span><h6>J.D:</h6></span>
                                    {{ job.job_description }}
                                  </div>
                                  <br />
                                  <div>
                                    <span><h6>Minimum qulification:</h6></span>
                                    {{ job.specific_qualificaion }}
                                  </div>
                                  <br />
                                  <div>
                                    <span><h6>Age:</h6></span>{{ job.age }}
                                  </div>
                                  <br />
                                  <div>
                                    <span><h6>Experience:</h6></span
                                    >{{ job.experience }}
                                  </div>
                                  <br />
                                  <div>
                                    <span><h6>Working hours:</h6></span>
                                    {{ job.working_hours }}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-lg-12 col-md-12 col-sm-12 col-12 mt-3"
                            >
                              <div class="">
                                <a href="#" class="btn btn-info col-12"
                                  >Apply</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="jb_job_post_right_btn_wrapper">
          <a href="#" class="bttn">Read more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DashboardRightSideBar",
  data: function() {
    return {
      preview: [],
      index: "",
      jobs: [],
      companys: {
        name: "Optimal Soft",
        salary: "#400",
        address:
          "Number 2 umukoro street off allen avenue close, Ikeja Lagos Nigeria",
        job_title: "Graduate Trainee",
        age: "24-26",
        specific_qualificaion: "have sense",
        educational_level: "ND and above",
        job_description:
          "You go dey wash plate my gee... Now worry my guy we go pay you better money. Hehehehehehehehe!!1",
        working_hours: "for the rest of your life",
        job_type: "Full Time",
        experience: "None"
      }
    };
  },
  methods: {
    fetchAvailableJobs() {
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Fetch Available Jobs"
      };
      var request = {};
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          data: request,
          headers: headers
        })
        .then(response => {
          console.log(response);
          this.index + 1;
          this.jobs = response.data;
          // this.companys.salary = response.data.salary;
          // this.companys.address = response.data.address;
          // this.companys.job_title = response.data.job_title;
          // this.companys.job_description = response.data.job_description;
          // this.companys.age = response.data.age;
          // this.companys.specific_qualificaion =
          //   response.data.specific_qualificaion;
          // this.companys.educational_level = response.data.educational_level;
          // this.companys.working_hours = response.data.working_hours;
          // this.companys.job_type = response.data.job_type;
          // this.companys.experience = response.data.experience;
        })
        .catch(error => {
          console.log("Failed to fetch Available Jobs " + error.message);
        });
    },
    populate: function(index) {
      this.preview = this.jobs[index];
    }
  },
  mounted() {
    this.fetchAvailableJobs();
  }
};
</script>
<style scoped>
li {
  display: block;
}
.bttn {
  background-color: rgb(79, 79, 79);
  color: white;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 5px 21px;
  float: right;
}
</style>
