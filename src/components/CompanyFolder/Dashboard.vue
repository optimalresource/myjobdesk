<template>
  <div>
    <DashboardHeader />
    <div class="page_title_section">
      <div class="page_header">
        <div class="container">
          <div class="row">
            <!-- section_heading start -->
            <div class="col-xl-9 col-lg-7 col-md-7 col-12 col-sm-12">
              <h1>Dashboard</h1>
            </div>
            <div class="col-xl-3 col-lg-5 col-md-5 col-12 col-sm-12">
              <div class="sub_title_section">
                <ul class="sub_title">
                  <li><a href="#"> Home </a>&nbsp; / &nbsp;</li>
                  <li>Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- top header wrapper end -->
    <!--employee dashboard wrapper start-->
    <div class="employe_dashboard_wrapper jb_cover">
      <div class="container">
        <div class="row">
          <CompanyDashboardSideBar :comp="company" />
          <!-- <HereAddressLookup /> -->
          <div class="col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="job_listing_left_fullwidth jb_cover">
                  <div class="row">
                    <div class="col-lg-8 col-md-7 col-sm-12 col-12">
                      <!-- <div class="jp_job_post_side_img">
                        <h4>{{  }}dfbdfbdfb</h4>
                      </div> -->
                      <div class="jp_job_post_right_cont">
                        <h4>{{ company.name }}</h4>

                        <ul>
                          <li>
                            <i class="flaticon-location-pointer"></i>&nbsp;
                            {{ company.address }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!-- <div class="col-lg-4 col-md-5 col-sm-12 col-12">
                      <div class="jp_job_post_right_btn_wrapper jb_cover">
                        <div class="header_btn search_btn jb_cover">
                          <a href="/">view profile</a>
                        </div>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="emp_job_post jb_cover">
                  <div class="emp_job_side_img">
                    <i class="fas fa-book"></i>
                  </div>
                  <div class="emp_job_side_text">
                    <h1>360</h1>
                    <p>job posted</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="emp_job_post jb_cover">
                  <div class="emp_job_side_img ress">
                    <i class="fas fa-user"></i>
                  </div>
                  <div class="emp_job_side_text">
                    <h1>590</h1>
                    <p>shortlisted resume</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="emp_job_post jb_cover">
                  <div class="emp_job_side_img greens">
                    <i class="fas fa-eye"></i>
                  </div>
                  <div class="emp_job_side_text">
                    <h1>11,200</h1>
                    <p>total page view</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="emp_job_post jb_cover">
                  <div class="emp_job_side_img parts">
                    <i class="fas fa-envelope-open-text"></i>
                  </div>
                  <div class="emp_job_side_text">
                    <h1>1,608</h1>
                    <p>total applications</p>
                  </div>
                </div>
              </div>
              <div class="m-3"></div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div
                  class="job_filter_category_sidebar company_wrapper jb_cover"
                >
                  <div class="job_filter_sidebar_heading jb_cover">
                    <h1>about us</h1>
                  </div>
                  <div class="job_overview_header pdd jb_cover">
                    <p>
                      {{ company.bio }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="job_filter_category_sidebar jb_cover">
                  <div class="job_filter_sidebar_heading jb_cover">
                    <h1>graph</h1>
                  </div>
                  <ApexCharts />
                </div>
              </div>
              <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                <div class="job_filter_category_sidebar jb_cover">
                  <div class="job_filter_sidebar_heading jb_cover">
                    <h1>company overview</h1>
                  </div>
                  <div class="job_overview_header jb_cover">
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div class="jp_listing_list_icon">
                        <i class="far fa-calendar"></i>
                      </div>
                      <div class="jp_listing_list_icon_cont_wrapper">
                        <ul>
                          <li>categories:</li>
                          <li
                            v-for="(item, index) in company.category"
                            :key="index"
                          >
                            {{ item }}
                            <span>,</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div class="jp_listing_list_icon">
                        <i class="fas fa-map-marker-alt"></i>
                      </div>
                      <div class="jp_listing_list_icon_cont_wrapper">
                        <ul>
                          <li>Location:</li>
                          <li>{{ company.address }}</li>
                        </ul>
                      </div>
                    </div>
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div class="jp_listing_list_icon">
                        <i class="fa fa-info-circle"></i>
                      </div>
                      <div class="jp_listing_list_icon_cont_wrapper">
                        <ul>
                          <li>Hotline:</li>
                          <li>{{ company.contact_number }}</li>
                        </ul>
                      </div>
                    </div>
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div class="jp_listing_list_icon">
                        <i class="fas fa-envelope"></i>
                      </div>
                      <div class="jp_listing_list_icon_cont_wrapper">
                        <ul>
                          <li>email:</li>
                          <li>
                            <a href="#">{{ company.email }}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!-- <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div class="jp_listing_list_icon">
                        <i class="flaticon-man-user"></i>
                      </div>
                      <div class="jp_listing_list_icon_cont_wrapper">
                        <ul>
                          <li>compant size:</li>
                          <li>20-50</li>
                        </ul>
                      </div>
                    </div> -->
                    <div
                      class="jp_listing_overview_list_main_wrapper dcv jb_cover"
                    >
                      <div class="jp_listing_list_icon">
                        <i class="fas fa-globe-asia"></i>
                      </div>
                      <div class="jp_listing_list_icon_cont_wrapper">
                        <ul>
                          <li>website:</li>
                          <li>{{ company.website }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 col-md-12 col-sm-12 col-12">
                <div class="row">
                  <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="job_filter_category_sidebar jb_cover">
                      <div class="job_filter_sidebar_heading jb_cover">
                        <h1>our location</h1>
                      </div>
                      <div class="job_overview_header jb_cover">
                        
                      </div>
                    </div>
                  </div> -->
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="job_filter_category_sidebar jb_cover">
                      <div class="job_filter_sidebar_heading jb_cover">
                        <h1>social profile</h1>
                      </div>
                      <div class="job_overview_header jb_cover">
                        <div
                          class="jp_listing_left_bottom_sidebar_social_wrapper"
                        >
                          <ul>
                            <li></li>
                            <li>
                              <a href="#"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                              <a href="#"><i class="fab fa-twitter"></i></a>
                            </li>
                            <li>
                              <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </li>

                            <li>
                              <a href="#"
                                ><i class="fab fa-google-plus-g"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 col-md-12 col-sm-12 col-12">
                <div class="job_filter_category_sidebar jb_cover">
                  <div class="job_filter_sidebar_heading jb_cover">
                    <h1>recent applicants</h1>
                  </div>
                  <div class="job_overview_header apps_wrapper jb_cover">
                    <div class="row">
                      <div class="col-lg-8 col-md-7 col-sm-8 col-12">
                        <div class="jp_job_post_side_img"></div>
                        <div class="jp_job_post_right_cont">
                          <span>
                            <avatar
                              class="img-responsive xs-col-12 sm-col-12 mb-2"
                              :username="email"
                              :size="30"
                              :rounded="true"
                            >
                            </avatar
                          ></span>
                          <h4>aradhya s.</h4>

                          <ul>
                            <li>app designer</li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-5 col-sm-4 col-12">
                        <div class="jp_job_post_right_btn_wrapper jb_cover">
                          <div class="header_btn search_btn appbtn jb_cover">
                            <a href="#">Accept</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="job_overview_header apps_wrapper jb_cover">
                    <div class="row">
                      <div class="col-lg-8 col-md-7 col-sm-8 col-12">
                        <div class="jp_job_post_side_img">
                          <img src="images/rc2.png" alt="post_img" />
                        </div>
                        <div class="jp_job_post_right_cont">
                          <h4>akshay s.</h4>

                          <ul>
                            <li>app designer</li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-5 col-sm-4 col-12">
                        <div class="jp_job_post_right_btn_wrapper jb_cover">
                          <div class="header_btn search_btn appbtn jb_cover">
                            <a href="#">send</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> -->
                  <!-- <div class="job_overview_header apps_wrapper jb_cover">
                    <div class="row">
                      <div class="col-lg-8 col-md-7 col-sm-8 col-12">
                        <div class="jp_job_post_side_img">
                          <img src="images/rc3.png" alt="post_img" />
                        </div>
                        <div class="jp_job_post_right_cont">
                          <h4>shruti s.</h4>

                          <ul>
                            <li>app designer</li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-5 col-sm-4 col-12">
                        <div class="jp_job_post_right_btn_wrapper jb_cover">
                          <div class="header_btn search_btn appbtn jb_cover">
                            <a href="#">send</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> -->
                  <!-- <div class="job_overview_header apps_wrapper jb_cover">
                    <div class="row">
                      <div class="col-lg-8 col-md-7 col-sm-8 col-12">
                        <div class="jp_job_post_side_img">
                          <img src="images/rc4.png" alt="post_img" />
                        </div>
                        <div class="jp_job_post_right_cont">
                          <h4>simona A.</h4>

                          <ul>
                            <li>UI designer</li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-5 col-sm-4 col-12">
                        <div class="jp_job_post_right_btn_wrapper jb_cover">
                          <div class="header_btn search_btn appbtn jb_cover">
                            <a href="#">send</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> -->
                </div>
              </div>
              <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                <div class="job_filter_category_sidebar jb_cover">
                  <div class="job_filter_sidebar_heading jb_cover">
                    <h1>activities</h1>
                  </div>
                  <div class="job_overview_header apps_wrapper jb_cover">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="activity_app">
                          <i class="fas fa-angle-right"></i>
                        </div>

                        <div class="activity_logos">
                          <h4>Dobrick published an article</h4>

                          <ul>
                            <li>2 hours ago</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="job_overview_header apps_wrapper jb_cover">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="activity_app">
                          <i class="fas fa-angle-right"></i>
                        </div>

                        <div class="activity_logos">
                          <h4>Dobrick published an article</h4>

                          <ul>
                            <li>2 hours ago</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> -->
                  <!-- <div class="job_overview_header apps_wrapper jb_cover">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="activity_app">
                          <i class="fas fa-angle-right"></i>
                        </div>

                        <div class="activity_logos">
                          <h4>Someone bookmarked you</h4>

                          <ul>
                            <li>2 hours ago</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> -->
                  <!-- <div class="job_overview_header apps_wrapper jb_cover">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="activity_app">
                          <i class="fas fa-angle-right"></i>
                        </div>

                        <div class="activity_logos">
                          <h4>Your Resume Updated!</h4>

                          <ul>
                            <li>2 hours ago</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="blog_wrapper jb_cover">
      <div class="container">
        <div class="row">
          <Looking />
        </div>
      </div>
    </div>

    <Footer />

    <div id="chat-circle" class="btn btn-raised">
      <i class="fas fa-comment-alt"></i>
    </div>

    <ChatBox />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
// import CandidateDashboardRightSideBar from "@/components/CandidateDashboardRightSideBar.vue";
// import CandidateDashboardNavBar from "@/components/CandidateDashboardNavBar.vue";
import Avatar from "vue-avatar";
import Looking from "@/components/Looking.vue";
import ApexCharts from "@/components/ApexCharts.vue";
import ChatBox from "@/components/ChatBox.vue";
import CompanyDashboardSideBar from "@/components/CompanyDashboardSideBar.vue";
import DashboardHeader from "@/components/DashboardHeader.vue";
// import axios from "axios";
// import HereAddressLookup from "@/components/HereAddressLookup.vue";
export default {
  name: "Dashboard",
  components: {
    Footer,
    Looking,
    Avatar,
    CompanyDashboardSideBar,
    ApexCharts,
    // CandidateDashboardRightSideBar,
    // CandidateDashboardNavBar,
    ChatBox,
    DashboardHeader
    // HereAddressLookup
  },
  data: function() {
    return {
      // socialProfile: {
      //   facebook_username: "",
      //   twitter_username: "",
      //   linkedin_username: ""
      // },
      company: this.$store.getters.StateCompanyDetails ?? "",
      values: [
        [10, 5, 5, 5],
        [40, 10, 10, 10],
        [30, 30, 30, 30]
      ]
      // personal_details: {
      //   age: "",
      //   phone: "",
      //   gender: "",
      //   marital_status: "",
      //   nationality: "",
      //   address: "",
      //   dob: "",
      //   selectedLGA: "",
      //   selectedState: ""
      // },
      // updatedCerts: [],
      // updatedskills: [],
      // updatedForms: [],
      // experiences: [],
      // updatedexperiences: [],
      // updatedreferrees: []
      // updatedForms: {
      //   school: "",
      //   degree: "",
      //   course_of_study: "",
      //   grade: "",
      //   from: "",
      //   to: ""
      // },
    };
  },
  methods: {
    onClickBar: function() {
      console.log(arguments);
      alert("onClickBar");
    }
    //   onClickOutside: function() {
    //     console.log(arguments);
    //     alert("onClickOutside");
    //   },
    //   onClickInside: function() {
    //     console.log(arguments);
    //     alert("onClickInside");
    //   }
    //   //  getProfilePhoto: function() {
    //   //   return "img/ProfilePicture/" + this.ProfilePicture.file;
    // },
    // created() {
    //   var accessToken = localStorage.getItem("token") || "";
    //   const headers = {
    //     Authorization: "Bearer " + accessToken,
    //     "My-Custom-Header": "Register step 2"
    //   };
    //   axios
    //     .get("https://api.myjobdesk.com/api/user", {
    //       headers
    //     })
    //     .then(response => {
    //       console.log(response);
    //       this.inputs.first_name = response.data.first_name;
    //       this.inputs.last_name = response.data.last_name;
    //       this.inputs.middle_name = response.data.middle_name;
    //       this.inputs.email = response.data.email;
    //     })
    //     .catch(error => {
    //       this.errorMessage = error.message;
    //       console.error("There was an error!", error);
    //     });
    //   axios
    //     .get("https://api.myjobdesk.com/api/personal_details", {
    //       headers: headers
    //     })
    //     .then(response => {
    //       this.personal_details.marital_status = response.data.marital_status;
    //       this.personal_details.gender = response.data.gender;
    //       this.personal_details.selectedLGA = response.data.lga;
    //       this.personal_details.selectedState = response.data.state_of_origin;
    //       this.personal_details.nationality = response.data.nationality;
    //       this.personal_details.address = response.data.address;
    //       this.personal_details.dob = response.data.date_of_birth;
    //       this.personal_details.phone = response.data.phone;
    //       console.log(response);
    //     })
    //     .catch(error => {
    //       console.log("Failed to fetch personal details " + error.message);
    //     });
    //   axios
    //     .get("https://api.myjobdesk.com/api/skills/all", {
    //       headers: headers
    //     })
    //     .then(response => {
    //       this.updatedskills = response.data;
    //       console.log(response);
    //     })
    //     .catch(error => {
    //       console.log("Failed to fetch Skills" + error.message);
    //     });
    //   axios
    //     .get("https://api.myjobdesk.com/api/educational_details/all", {
    //       headers: headers
    //     })
    //     .then(response => {
    //       this.updatedForms = response.data;
    //       // this.eDResponse = response.status;
    //       console.log(response);
    //     })
    //     .catch(error => {
    //       console.log("Failed to fetch education details " + error.message);
    //     });
    //   axios
    //     .get("https://api.myjobdesk.com/api/certificates/all", {
    //       headers: headers
    //     })
    //     .then(response => {
    //       this.updatedCerts = response.data;
    //       console.log(response);
    //     })
    //     .catch(error => {
    //       console.log("Failed to fetch certificates " + error.message);
    //     });
    //   axios
    //     .get("https://api.myjobdesk.com/api/experiences/all", {
    //       headers: headers
    //     })
    //     .then(response => {
    //       this.updatedexperiences = response.data;
    //     })
    //     .catch(error => {
    //       console.log("Failed to fetch experiences " + error.message);
    //     });
    //   axios
    //     .get("https://api.myjobdesk.com/api/referrees/all", {
    //       headers: headers
    //     })
    //     .then(response => {
    //       this.updatedreferrees = response.data;
    //     })
    //     .catch(error => {
    //       console.log("Failed to fetch referrees " + error.message);
    //     });
  },
  mounted() {
    if (!this.$store.getters.isHaveCompanyDetails) {
      this.$store
        .dispatch("FetchCompanyDetails")
        .then(response => {
          this.company = response.data;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
        });
    }
  }
};
</script>

<style scoped>
@media (max-width: 10000px) {
  .avatar_center {
    margin-left: 0;
    box-sizing: border-box;
  }
}
@media (max-width: 1195px) {
  .avatar_center {
    margin-left: -15%;
    box-sizing: border-box;
  }
}
@media (max-width: 991px) {
  .avatar_center {
    margin-left: 34%;
    box-sizing: border-box;
  }
}
@media (max-width: 765px) {
  .avatar_center {
    margin-left: 27%;
    box-sizing: border-box;
  }
}
</style>
