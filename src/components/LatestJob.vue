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
                          <a href="#" data-toggle="modal" data-target="#myModal"
                            >apply</a
                          >
                        </div>
                      </div>
                      <div
                        class="modal fade apply_job_popup"
                        id="myModal"
                        role="dialog"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                            >
                              &times;
                            </button>
                            <div class="row">
                              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="apply_job jb_cover">
                                  <h1>apply for this job :</h1>
                                  <div class="search_alert_box jb_cover">
                                    <div class="apply_job_form">
                                      <input
                                        type="text"
                                        name="name"
                                        placeholder="full name"
                                      />
                                    </div>
                                    <div class="apply_job_form">
                                      <input
                                        type="text"
                                        name="Email"
                                        placeholder="Enter Your Email"
                                      />
                                    </div>
                                    <div class="apply_job_form">
                                      <textarea
                                        class="form-control"
                                        name="message"
                                        placeholder="Message"
                                      ></textarea>
                                    </div>

                                    <div class="resume_optional jb_cover">
                                      <p>resume (optional)</p>
                                      <input
                                        type="file"
                                        data-height="90"
                                        accept="application/pdf,application/msword"
                                      />
                                      <p class="word_file">
                                        microsoft word or pdf file only (5mb)
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    class="header_btn search_btn applt_pop_btn jb_cover"
                                  >
                                    <a href="#">apply now</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="latest_job_box jb_cover">
                      <div class="job_list">
                        <a href="#"
                          ><img src="images/lt2.png" alt="img" />
                          <h6>Trainee Web Designer, (Fresher)</h6></a
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
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#myModal1"
                            >apply</a
                          >
                        </div>
                      </div>
                      <div
                        class="modal fade apply_job_popup"
                        id="myModal1"
                        role="dialog"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                            >
                              &times;
                            </button>
                            <div class="row">
                              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="apply_job jb_cover">
                                  <h1>apply for this job :</h1>
                                  <div class="search_alert_box jb_cover">
                                    <div class="apply_job_form">
                                      <input
                                        type="text"
                                        name="name"
                                        placeholder="full name"
                                      />
                                    </div>
                                    <div class="apply_job_form">
                                      <input
                                        type="text"
                                        name="Email"
                                        placeholder="Enter Your Email"
                                      />
                                    </div>
                                    <div class="apply_job_form">
                                      <textarea
                                        class="form-control"
                                        name="message"
                                        placeholder="Message"
                                      ></textarea>
                                    </div>

                                    <div class="resume_optional jb_cover">
                                      <p>resume (optional)</p>
                                      <div class="width_50">
                                        <input
                                          type="file"
                                          id="input-file-now-custom-2"
                                          class="dropify"
                                          data-height="90"
                                        /><span class="post_photo"
                                          >upload resume</span
                                        >
                                      </div>
                                      <p class="word_file">
                                        microsoft word or pdf file only (5mb)
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    class="header_btn search_btn applt_pop_btn jb_cover"
                                  >
                                    <a href="#">apply now</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="latest_job_box jb_cover">
                      <div class="job_list">
                        <a href="#"
                          ><img src="images/lt3.png" alt="img" />
                          <h6>Trainee Web Designer, (Fresher)</h6></a
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
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#myModal2"
                            >apply</a
                          >
                        </div>
                      </div>
                      <div
                        class="modal fade apply_job_popup"
                        id="myModal2"
                        role="dialog"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                            >
                              &times;
                            </button>
                            <div class="row">
                              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="apply_job jb_cover">
                                  <h1>apply for this job :</h1>
                                  <div class="search_alert_box jb_cover">
                                    <div class="apply_job_form">
                                      <input
                                        type="text"
                                        name="name"
                                        placeholder="full name"
                                      />
                                    </div>
                                    <div class="apply_job_form">
                                      <input
                                        type="text"
                                        name="Email"
                                        placeholder="Enter Your Email"
                                      />
                                    </div>
                                    <div class="apply_job_form">
                                      <textarea
                                        class="form-control"
                                        name="message"
                                        placeholder="Message"
                                      ></textarea>
                                    </div>

                                    <div class="resume_optional jb_cover">
                                      <p>resume (optional)</p>
                                      <div class="width_50">
                                        <input
                                          type="file"
                                          id="input-file-now-custom-3"
                                          class="dropify"
                                          data-height="90"
                                        /><span class="post_photo"
                                          >upload resume</span
                                        >
                                      </div>
                                      <p class="word_file">
                                        microsoft word or pdf file only (5mb)
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    class="header_btn search_btn applt_pop_btn jb_cover"
                                  >
                                    <a href="#">apply now</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="latest_job_box jb_cover">
                      <div class="job_list">
                        <a href="#"
                          ><img src="images/lt4.png" alt="img" />
                          <h6>Trainee Web Designer, (Fresher)</h6></a
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
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#myModal3"
                            >apply</a
                          >
                        </div>
                      </div>
                      <div
                        class="modal fade apply_job_popup"
                        id="myModal3"
                        role="dialog"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                            >
                              &times;
                            </button>
                            <div class="row">
                              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="apply_job jb_cover">
                                  <h1>apply for this job :</h1>
                                  <div class="search_alert_box jb_cover">
                                    <div class="apply_job_form">
                                      <input
                                        type="text"
                                        name="name"
                                        placeholder="full name"
                                      />
                                    </div>
                                    <div class="apply_job_form">
                                      <input
                                        type="text"
                                        name="Email"
                                        placeholder="Enter Your Email"
                                      />
                                    </div>
                                    <div class="apply_job_form">
                                      <textarea
                                        class="form-control"
                                        name="message"
                                        placeholder="Message"
                                      ></textarea>
                                    </div>

                                    <div class="resume_optional jb_cover">
                                      <p>resume (optional)</p>
                                      <div class="width_50">
                                        <input
                                          type="file"
                                          id="input-file-now-custom-4"
                                          class="dropify"
                                          data-height="90"
                                        /><span class="post_photo"
                                          >upload resume</span
                                        >
                                      </div>
                                      <p class="word_file">
                                        microsoft word or pdf file only (5mb)
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    class="header_btn search_btn applt_pop_btn jb_cover"
                                  >
                                    <a href="#">apply now</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="latest_job_box jb_cover">
                      <div class="job_list">
                        <a href="#"
                          ><img src="images/lt1.png" alt="img" />
                          <h6>Trainee Web Designer, (Fresher)</h6></a
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
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#myModal4"
                            >apply</a
                          >
                        </div>
                      </div>
                      <div
                        class="modal fade apply_job_popup"
                        id="myModal4"
                        role="dialog"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                            >
                              &times;
                            </button>
                            <div class="row">
                              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="apply_job jb_cover">
                                  <h1>apply for this job :</h1>
                                  <div class="search_alert_box jb_cover">
                                    <div class="apply_job_form">
                                      <input
                                        type="text"
                                        name="name"
                                        placeholder="full name"
                                      />
                                    </div>
                                    <div class="apply_job_form">
                                      <input
                                        type="text"
                                        name="Email"
                                        placeholder="Enter Your Email"
                                      />
                                    </div>
                                    <div class="apply_job_form">
                                      <textarea
                                        class="form-control"
                                        name="message"
                                        placeholder="Message"
                                      ></textarea>
                                    </div>

                                    <div class="resume_optional jb_cover">
                                      <p>resume (optional)</p>
                                      <div class="width_50">
                                        <input
                                          type="file"
                                          id="input-file-now-custom-5"
                                          class="dropify"
                                          data-height="90"
                                        /><span class="post_photo"
                                          >upload resume</span
                                        >
                                      </div>
                                      <p class="word_file">
                                        microsoft word or pdf file only (5mb)
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    class="header_btn search_btn applt_pop_btn jb_cover"
                                  >
                                    <a href="#">apply now</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="latest_job_box jb_cover">
                      <div class="job_list">
                        <a href="#"
                          ><img src="images/lt2.png" alt="img" />
                          <h6>Trainee Web Designer, (Fresher)</h6></a
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
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#myModal5"
                            >apply</a
                          >
                        </div>
                      </div>
                      <div
                        class="modal fade apply_job_popup"
                        id="myModal5"
                        role="dialog"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                            >
                              &times;
                            </button>
                            <div class="row">
                              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="apply_job jb_cover">
                                  <h1>apply for this job :</h1>
                                  <div class="search_alert_box jb_cover">
                                    <div class="apply_job_form">
                                      <input
                                        type="text"
                                        name="name"
                                        placeholder="full name"
                                      />
                                    </div>
                                    <div class="apply_job_form">
                                      <input
                                        type="text"
                                        name="Email"
                                        placeholder="Enter Your Email"
                                      />
                                    </div>
                                    <div class="apply_job_form">
                                      <textarea
                                        class="form-control"
                                        name="message"
                                        placeholder="Message"
                                      ></textarea>
                                    </div>

                                    <div class="resume_optional jb_cover">
                                      <p>resume (optional)</p>
                                      <div class="width_50">
                                        <input
                                          type="file"
                                          id="input-file-now-custom-6"
                                          class="dropify"
                                          data-height="90"
                                        /><span class="post_photo"
                                          >upload resume</span
                                        >
                                      </div>
                                      <p class="word_file">
                                        microsoft word or pdf file only (5mb)
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    class="header_btn search_btn applt_pop_btn jb_cover"
                                  >
                                    <a href="#">apply now</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                    <!-- <p class="showing">Showing 1-5 of 23 Latest Jobs</p>
                    <span class="se_all_job"
                      ><a href="#"
                        >See All Jobs
                        <i class="fas fa-long-arrow-alt-right"></i></a
                    ></span> -->
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
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
    populate: function() {
      var request = {};
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Fetch Available Jobs",
      };
      axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=10", {
          data: request,
          headers: headers,
        })
        .then((response) => {
          console.log(response);
          this.index + 1;
          this.jobResponse = response.status;
          this.latestJobs = response.data;
        })
        .catch((error) => {
          console.log("Failed to fetch Available Jobs " + error.message);
        });
    },
  },
  created: function() {
    this.populate();
  },
};
</script>

<style scoped></style>
