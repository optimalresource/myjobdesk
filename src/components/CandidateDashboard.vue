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
              <img src="" class="img-responsive" alt="profile picture" />
              <div class="emp_web_profile candidate_web_profile jb_cover">
                <h4>
                  {{
                    (inputs.first_name, inputs.last_name, inputs.middle_name)
                  }}
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
                          {{ inputs.last_name + " " + inputs.first_name }}
                        </h4>

                        <ul>
                          <li>
                            <i class="flaticon-location-pointer"></i>&nbsp;
                            &nbsp; Adrress:

                            {{ forms.address }}
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
                              <a href="#">{{ forms.dob }}</a>
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
                          <i class="fas fa-shield-alt"></i>
                        </div>
                        <div class="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>marital status:</li>
                            <li>
                              <a href="#">{{ forms.marital_status }}</a>
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
                              <a href="#">{{ forms.nationality }}</a>
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
                          <li>{{ forms.address }}</li>
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
                          <li>{{ forms.phone }}</li>
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
                            <a href="#">{{ forms.gender }}</a>
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
                              <p>{{ facebook_username }}</p>
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
                              <p>{{ twitter_username }}</p>
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
                              <p>{{ linkedin_username }}</p>
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
                              <p>{{ certifications.input }}</p>
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
                              <p>{{ referrers.name }}</p>
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
                                  updatedForms.school +
                                    " " +
                                    updatedForms.course_of_study +
                                    " " +
                                    updatedForms.grade +
                                    " " +
                                    updatedForms.from +
                                    " " +
                                    updatedForms.to +
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
import CandidateDashboardSubNavBar from "@/components/CandidateDashboardSubNavBar.vue";
import Looking from "@/components/Looking.vue";
import ChatBox from "@/components/ChatBox.vue";
import axios from "axios";
export default {
  name: "Dashboard",
  components: {
    Footer,
    Looking,
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
      forms: {
        age: "",
        phone: "",
        gender: "",
        marital_status: "",
        nationality: "",
        address: "",
        dob: ""
      },
      updatedForms: {
        school: "",
        degree: "",
        course_of_study: "",
        grade: "",
        from: "",
        to: ""
      },
      certifications: {
        input: ""
      },
      referrers: {
        name: ""
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
        this.forms.state_of_origin = response.data.state_of_origin;
        this.forms.age = response.data.age;
        this.forms.phone = response.data.phone;
        this.forms.gender = response.data.gender;
        this.forms.marital_status = response.data.marital_status;
        this.forms.nationality = response.data.nationality;
        this.forms.address = response.data.address;
        this.updatedForm.school = response.data.school;
        this.updatedForm.degree = response.data.degree;
        this.updatedForm.course_of_study = response.data.course_of_study;
        this.updatedForm.grade = response.data.grade;
        this.updatedForm.to = response.data.to;
        this.updatedForm.from = response.data.from;
      })
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });

    axios
      .get("https://api.myjobdesk.com/api/user")
      // .then(response => {
      //   this.inputs = response.data;
      //   this.forms = response.data;
      //   this.updatedForms = response.data;
      .then(function(data) {
        console.log(data);
      });
  }
};
</script>

<style scoped></style>
