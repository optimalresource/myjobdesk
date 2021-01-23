<template>
  <div>
    <div class="cursor"></div>
    <!-- <CandidateDashboardNavBar /> -->
    <CandidateDashboardSubNavBar />
    <a href="javascript:" id="return-to-top"
      ><i class="fas fa-angle-double-up"></i
    ></a>
    <div class="candidate_dashboard_wrapper jb_cover">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="emp_dashboard_sidebar jb_cover">
              <div class="emp_web_profile candidate_web_profile jb_cover">
                <div class="avatar_center">
                  <avatar
                    class="img-responsive xs-col-12 sm-col-12 mb-2"
                    :username="inputs.email"
                    :size="190"
                    :rounded="true"
                  >
                  </avatar>
                </div>
                <h4>
                  {{ inputs.first_name }}
                  {{ inputs.last_name }}
                </h4>
                <p>{{ inputs.email }}</p>
              </div>
              <div class="emp_follow_link jb_cover">
                <ul class="feedlist">
                  <li>
                    <a href="/dashboard" class="link_active"
                      ><i class="fas fa-tachometer-alt"></i> dashboard
                    </a>
                  </li>
                  <li>
                    <!-- <a href="/editProfile">
                      <i class="fas fa-edit"></i>edit profile
                    </a> -->
                  </li>
                  <li>
                    <a href="/resume"><i class="fas fa-file"></i>resume </a>
                  </li>
                  <li>
                    <!-- <a href="/favorite"
                      ><i class="fas fa-heart"></i>favourite</a
                    > -->
                  </li>
                  <li>
                    <a href="/applied"
                      ><i class="fas fa-check-square"></i>applied job</a
                    >
                  </li>
                  <li>
                    <a href="/message"
                      ><i class="fas fa-envelope"></i>messages</a
                    >
                  </li>
                </ul>
                <ul class="feedlist logout_link jb_cover">
                  <li>
                    <a href="#"><i class="fas fa-power-off"></i> log out </a>
                  </li>
                  <li>
                    <a href="#" data-toggle="modal" data-target="#myModal"
                      ><i class="fas fa-trash-alt"></i>delete profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="modal fade delete_popup" id="myModal" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="delett_cntn jb_cover">
                        <h1><i class="fas fa-trash-alt"></i> delete account</h1>
                        <p>
                          Are you sure! You want to delete your profile. This
                          <br />
                          can't be undone!
                        </p>

                        <div class="delete_jb_form">
                          <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                          />
                        </div>
                        <div class="header_btn search_btn applt_pop_btn">
                          <a href="#">save updates</a>
                        </div>
                        <div class="cancel_wrapper">
                          <a href="#" class="" data-dismiss="modal">cancel</a>
                        </div>
                        <div class="login_remember_box jb_cover">
                          <label class="control control--checkbox"
                            >You accepts our
                            <a href="#">Terms and Conditions </a> and
                            <a href="#">Privacy Policy</a>
                            <input type="checkbox" />
                            <span class="control__indicator"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="job_listing_left_fullwidth jb_cover">
                  <div class="row">
                    <div class="col-lg-8 col-md-7 col-sm-12 col-12">
                      <!-- <div class="jp_job_post_side_img">
                        <img :src="getProfilePhoto" alt="image to be posted " />
                      </div> -->
                      <div class="jp_job_post_right_cont">
                        <h4>
                          Name:
                          {{
                            inputs.last_name +
                              " " +
                              inputs.first_name +
                              " " +
                              inputs.middle_name
                          }}
                        </h4>

                        <ul>
                          <li>
                            <i class="flaticon-location-pointer"></i>&nbsp;
                            &nbsp; Adrress:

                            {{ personal_details.address }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!-- <div class="col-lg-4 col-md-5 col-sm-12 col-12">
                      <div class="jp_job_post_right_btn_wrapper jb_cover">
                        <div class="header_btn search_btn jb_cover">
                          <a href="#">view profile</a>
                        </div>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                <div class="job_filter_category_sidebar jb_cover">
                  <div class="job_filter_sidebar_heading jb_cover">
                    <h1>basic information</h1>
                  </div>
                  <div class="job_overview_header jb_cover">
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div
                        class="jp_listing_overview_list_main_wrapper dcv jb_cover"
                      >
                        <div class="jp_listing_list_icon">
                          <i class="far fa-calendar"></i>
                        </div>
                        <div class="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>date of birth:</li>
                            <li>
                              <a href="#">{{ personal_details.dob }}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div
                        class="jp_listing_overview_list_main_wrapper dcv jb_cover"
                      >
                        <div class="jp_listing_list_icon">
                          <i class="fas fa-ring"></i>
                        </div>
                        <div class="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>marital status:</li>
                            <li>
                              <a href="#">{{
                                personal_details.marital_status
                              }}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div
                        class="jp_listing_overview_list_main_wrapper dcv jb_cover"
                      >
                        <div class="jp_listing_list_icon">
                          <i class="fas fa-map-pin"></i>
                        </div>
                        <div class="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>State:</li>
                            <li>
                              <a href="#">{{
                                personal_details.selectedState
                              }}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div
                        class="jp_listing_overview_list_main_wrapper dcv jb_cover"
                      >
                        <div class="jp_listing_list_icon">
                          <i class="fas fa-map-pin"></i>
                        </div>
                        <div class="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>Local Government Area:</li>
                            <li>
                              <a href="#">{{ personal_details.selectedLGA }}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div
                        class="jp_listing_overview_list_main_wrapper dcv jb_cover"
                      >
                        <div class="jp_listing_list_icon">
                          <i class="fas fa-flag"></i>
                        </div>
                        <div class="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>nationality:</li>
                            <li>
                              <a href="#">{{ personal_details.nationality }}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div class="jp_listing_list_icon">
                        <i class="fas fa-map-marker-alt"></i>
                      </div>
                      <div class="jp_listing_list_icon_cont_wrapper">
                        <ul>
                          <li>Location:</li>
                          <li>{{ personal_details.address }}</li>
                        </ul>
                      </div>
                    </div>
                    <div class="jp_listing_overview_list_main_wrapper jb_cover">
                      <div class="jp_listing_list_icon">
                        <i class="fas fa-phone"></i>
                      </div>
                      <div class="jp_listing_list_icon_cont_wrapper">
                        <ul>
                          <li>phone:</li>
                          <li>{{ personal_details.phone }}</li>
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
                            <a href="#">{{ inputs.email }}</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      class="jp_listing_overview_list_main_wrapper dcv jb_cover"
                    >
                      <div class="jp_listing_list_icon">
                        <i class="fas fa-genderless"></i>
                      </div>
                      <div class="jp_listing_list_icon_cont_wrapper">
                        <ul>
                          <li>gender:</li>
                          <li>
                            <a href="#">{{ personal_details.gender }}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!-- <div
                      class="jp_listing_overview_list_main_wrapper dcv jb_cover"
                    >
                      <div class="jp_listing_list_icon">
                        <i class="fas fa-globe-asia"></i>
                      </div>
                      <div class="jp_listing_list_icon_cont_wrapper">
                        <ul>
                          <li>website:</li>
                          <li><a href="#">www.example.com</a></li>
                        </ul>
                      </div>
                    </div> -->
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="job_filter_category_sidebar jb_cover">
                    <div class="job_filter_sidebar_heading jb_cover">
                      <h1>social profile</h1>
                    </div>
                    <div class="job_overview_header jb_cover">
                      <div class="job_overview_header jb_cover">
                        <div
                          class="jp_listing_overview_list_main_wrapper jb_cover"
                        >
                          <div class="jp_listing_list_icon">
                            <i class="fab fa-facebook-f"></i>
                          </div>
                          <div class="jp_listing_list_icon_cont_wrapper">
                            <ul>
                              <li>facebook:</li>
                              <p>{{ socialProfile.facebook_username }}</p>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="jp_listing_overview_list_main_wrapper jb_cover"
                        >
                          <div class="jp_listing_list_icon">
                            <i class="fab fa-twitter"></i>
                          </div>
                          <div class="jp_listing_list_icon_cont_wrapper">
                            <ul>
                              <li>twitter:</li>
                              <p>{{ socialProfile.twitter_username }}</p>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="jp_listing_overview_list_main_wrapper jb_cover"
                        >
                          <div class="jp_listing_list_icon">
                            <i class="fab fa-linkedin-in"></i>
                          </div>
                          <div class="jp_listing_list_icon_cont_wrapper">
                            <ul>
                              <li>linkedin:</li>
                              <p>{{ socialProfile.linkedin_username }}</p>
                            </ul>
                          </div>
                        </div>
                        <!-- <div
                          class="jp_listing_overview_list_main_wrapper jb_cover"
                        >
                          <div class="jp_listing_list_icon">
                            <i class="fab fa-google-plus-g"></i>
                          </div>
                          <div class="jp_listing_list_icon_cont_wrapper">
                            <ul>
                              <li>gmail:</li>
                              <p>{{ inputs.email }}</p>
                            </ul>
                          </div>
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-7 col-md-12 col-sm-12 col-12">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="job_filter_category_sidebar jb_cover">
                      <div class="job_filter_sidebar_heading jb_cover">
                        <h1>Other information</h1>
                      </div>
                      <div class="job_overview_header jb_cover">
                        <div
                          class="jp_listing_overview_list_main_wrapper jb_cover"
                        >
                          <div class="jp_listing_list_icon">
                            <i class="fas fa-certificate"></i>
                          </div>
                          <div class="jp_listing_list_icon_cont_wrapper">
                            <ul>
                              <li>Certifications:</li>
                              <div v-for="(row, cert) in rows" :key="cert">
                                <p>{{ rows.title }}</p>
                                <p>{{ rows.description }}</p>
                              </div>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="jp_listing_overview_list_main_wrapper jb_cover"
                        >
                          <div class="jp_listing_list_icon">
                            <i class="fas fa-asterisk"></i>
                          </div>
                          <div class="jp_listing_list_icon_cont_wrapper">
                            <ul>
                              <li>Referees:</li>
                              <div
                                v-for="(referrer, ref) in referrers"
                                :key="ref"
                              >
                                <p>{{ referrers.name }}</p>
                              </div>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="jp_listing_overview_list_main_wrapper jb_cover"
                        >
                          <div class="jp_listing_list_icon">
                            <i class="fas fa-university"></i>
                          </div>
                          <div class="jp_listing_list_icon_cont_wrapper">
                            <ul>
                              <li>education:</li>
                              <p>
                                {{
                                  education.school +
                                    " " +
                                    education.course_of_study +
                                    " " +
                                    education.grade +
                                    " " +
                                    education.from +
                                    " " +
                                    education.to +
                                    " "
                                }}
                              </p>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div id="map"></div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="emp_job_post jb_cover">
                      <div class="emp_job_side_img">
                        <i class="fas fa-book"></i>
                      </div>
                      <div class="emp_job_side_text">
                        <h1></h1>
                        <p>applied jobs</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="emp_job_post jb_cover">
                      <div class="emp_job_side_img greens">
                        <i class="fas fa-eye"></i>
                      </div>
                      <div class="emp_job_side_text">
                        <h1></h1>
                        <p>companies viewed</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="emp_job_post jb_cover">
                      <div class="emp_job_side_img parts">
                        <i class="fas fa-envelope-open-text"></i>
                      </div>
                      <div class="emp_job_side_text">
                        <h1></h1>
                        <p>favourite jobs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="job_filter_category_sidebar jb_cover">
                  <div class="job_filter_sidebar_heading jb_cover">
                    <h1>recent activity</h1>
                  </div>
                  <div class="job_overview_header apps_wrapper jb_cover">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="activity_app">
                          <i class="fas fa-angle-right"></i>
                        </div>

                        <div class="activity_logos">
                          <!-- I would do a v-for to cycle through the activities -->
                          <h4></h4>
                          <ul>
                            <li></li>
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
                  </div>
                  <div class="job_overview_header apps_wrapper jb_cover">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="activity_app">
                          <i class="fas fa-angle-right"></i>
                        </div>

                        <div class="activity_logos">
                          <h4>Someone bookmarked you</h4>

                          <ul>
                            <li>4 hours ago</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="job_overview_header apps_wrapper jb_cover">
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
import CandidateDashboardSubNavBar from "@/components/CandidateDashboardSubNavBar.vue";
import Looking from "@/components/Looking.vue";
import ChatBox from "@/components/ChatBox.vue";
import axios from "axios";
export default {
  name: "Dashboard",
  components: {
    Footer,
    Looking,
    Avatar,
    // CandidateDashboardRightSideBar,
    // CandidateDashboardNavBar,
    CandidateDashboardSubNavBar,
    ChatBox
  },
  data: function() {
    return {
      socialProfile: {
        facebook_username: "",
        twitter_username: "",
        linkedin_username: ""
      },
      inputs: {
        first_name: "",
        last_name: "",
        middle_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      personal_details: {
        age: "",
        phone: "",
        gender: "",
        marital_status: "",
        nationality: "",
        address: "",
        dob: "",
        selectedLGA: "",
        selectedState: ""
      },
      education: {
        school: "",
        degree: "",
        course_of_study: "",
        grade: "",
        from: "",
        to: ""
      },
      rows: {
        title: "",
        description: ""
      },
      referrers: {
        name: "",
        age: "",
        email: "",
        company_name: "",
        position_in_the_company: ""
      },
      experiences: {
        experience_company_name: "",
        date_from: "",
        date_to: "",
        jd: ""
      }
    };
  },
  methods: {
    //  getProfilePhoto: function() {
    //   return "img/ProfilePicture/" + this.ProfilePicture.file;
  },
  created() {
    var accessToken = localStorage.getItem("token") || "";
    const headers = {
      Authorization: "Bearer " + accessToken,
      "My-Custom-Header": "Register step 2"
    };
    axios
      .get("https://api.myjobdesk.com/api/user", {
        headers
      })
      .then(response => {
        console.log(response);
        this.inputs.first_name = response.data.first_name;
        this.inputs.last_name = response.data.last_name;
        this.inputs.middle_name = response.data.middle_name;
        this.inputs.email = response.data.email;
      })
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
    axios
      .get("https://api.myjobdesk.com/api/user", {
        headers
      })
      .then(response => {
        console.log(response);
        this.education.school = response.data.school;
        this.education.degree = response.data.degree;
        this.education.course_of_study = response.data.course_of_study;
        this.education.grade = response.data.grade;
        this.education.to = response.data.to;
        this.education.from = response.data.from;
      })
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
    axios
      .get("https://api.myjobdesk.com/api/user", {
        headers
      })
      .then(response => {
        console.log(response);
        this.row.title = response.data.title;
        this.row.description = response.data.description;
      })
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
    axios
      .get("https://api.myjobdesk.com/api/user", {
        headers
      })
      .then(response => {
        console.log(response);
        this.referrers.name = response.data.name;
        this.referrers.email = response.data.email;
        this.referrers.phone_number = response.data.phone_number;
        this.referrers.company_name = response.data.company_name;
        this.referrers.position_in_the_company =
          response.data.position_in_the_company;
      })
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
    axios
      .get("https://api.myjobdesk.com/api/user", {
        headers
      })
      .then(response => {
        console.log(response);
        this.experiences.jd = response.data.jd;
        this.experiences.experience_company_name =
          response.data.experience_company_name;
        this.experiences.date_from = response.data.date_from;
        this.experiences.date_to = response.data.date_to;
      })
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
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
