<template>
  <div>
    <DashboardHeader />
    <!-- navi wrapper End -->
    <!-- top header wrapper start -->
    <div class="page_title_section">
      <div class="page_header">
        <div class="container">
          <div class="row">
            <!-- section_heading start -->
            <div class="col-xl-9 col-lg-7 col-md-7 col-12 col-sm-12">
              <h1>Manage Users</h1>
            </div>
            <div class="col-xl-3 col-lg-5 col-md-5 col-12 col-sm-12">
              <div class="sub_title_section">
                <ul class="sub_title">
                  <li><a href="#"> Home </a>&nbsp; / &nbsp;</li>
                  <li>Manage Users</li>
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
          <CompanyDashboardSideBar />
          <div v-if="changeRole" class="col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                <h4 class="text-center mb-3">Change Role</h4>
                <select
                  v-model="users.role"
                  class="form-control form-control-lg"
                >
                  <option value="editor">Editor</option>
                  <option value="admin">Admin</option>
                  <option value="reviewer">Reviewer</option>
                </select>
              </div>
            </div>
          </div>
          <div v-if="notChangeRole" class="col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                <div class="power_button ">
                  <a
                    @click.prevent="showAllUsers"
                    v-show="showActivities"
                    href="#"
                    class="btn power_a"
                    >view users</a
                  >
                  <a
                    @click.prevent="showAllActivities"
                    v-show="showUsers"
                    href="#"
                    class="btn power_a"
                    >view All Users Activities</a
                  >
                  <a
                    data-toggle="modal"
                    data-target="#myModal234"
                    class="btn power_a"
                    href="#"
                    >create new user</a
                  >
                </div>
                <div class="modal fade" id="myModal234">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">
                          Create New User
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true" class="text-danger"
                            ><i class="far fa-times-circle"></i
                          ></span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="delete_jb_form">
                          <input
                            type="text"
                            v-model="users.first_name"
                            placeholder="First Name"
                            required
                          />
                        </div>
                        <div class="delete_jb_form">
                          <input
                            type="text"
                            v-model="users.middle_name"
                            placeholder="Middle Name"
                            required
                          />
                        </div>
                        <div class="delete_jb_form">
                          <input
                            type="text"
                            v-model="users.last_name"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                        <div class="delete_jb_form">
                          <input
                            type="email"
                            v-model="users.email"
                            placeholder="Email "
                            required
                          />
                        </div>
                        <div class="delete_jb_form">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password *letters and numbers are compulsory"
                            v-model="users.password"
                            required
                          />
                        </div>
                        <div class="delete_jb_form">
                          <input
                            type="password"
                            id="confirm-password"
                            required
                            placeholder="Confirm Password *"
                            v-model="users.password_confirmation"
                          />
                        </div>
                        <div class="delete_jb_form">
                          <select
                            v-model="users.role"
                            class="form-control form-control-md"
                          >
                            <option>select a role</option>
                            <option value="editor">Editors</option>
                            <option value="admin">Admin</option>
                            <option value="reviewer">Reviewer</option>
                          </select>
                        </div>
                        <br />
                        <!-- <div>
                            <multiselect
                              v-model="value"
                              :options="options"
                              :multiple="true"
                              :close-on-select="false"
                              :clear-on-select="false"
                              :preserve-search="true"
                              placeholder="Pick some"
                              label="name"
                              track-by="name"
                              :preselect-first="true"
                            >
                              <template
                                slot="selection"
                                slot-scope="{ values, search, isOpen }"
                                ><span
                                  class="multiselect__single"
                                  v-if="values.length &amp;&amp; !isOpen"
                                  >{{ values.length }} options selected</span
                                ></template
                              >
                            </multiselect>
                          </div> -->
                      </div>
                      <div class="modal-footer">
                        <button
                          @click.prevent="saveNewUsers"
                          type="submit"
                          class="btn btn-primary"
                        >
                          Create User
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="showUsers"
                  class="jb_listing_left_fullwidth mt-0 jb_cover mb-5"
                >
                  <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12"></div>
                      <div class="col-sm-12">
                        <div class="jb_job_post_side_img ">
                          <avatar
                            class="img-responsive xs-col-12 sm-col-12 mb-2"
                            :username="companys.email"
                            :size="70"
                            :rounded="false"
                          >
                          </avatar>
                        </div>
                        <h5>
                          <a href="#"></a>
                        </h5>
                        <h4>Name:</h4>
                        <p>Role:</p>
                        <p>Privileges: <span>Post</span></p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                      <div class="jb_job_post_right_btn_wrapper">
                        <ul>
                          <li>
                            <div class="dropdown">
                              <button class="dropbtn btn btn-primary ">
                                Edit
                              </button>
                              <div class="dropdown-content">
                                <a @click.prevent="updateRole" href="#">Change Role</a>
                                <a href="#">User Activities</a>
                                <a href="#">Edit Privileges</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="showUsers"
                  class="jb_listing_left_fullwidth mt-0 jb_cover mb-5"
                >
                  <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12"></div>
                      <div class="col-sm-12">
                        <div class="jb_job_post_side_img ">
                          <avatar
                            class="img-responsive xs-col-12 sm-col-12 mb-2"
                            :username="companys.email"
                            :size="70"
                            :rounded="false"
                          >
                          </avatar>
                        </div>
                        <h5>
                          <a href="#"></a>
                        </h5>
                        <h4>Name:</h4>
                        <p>Role:</p>
                        <p>Privileges: <span>Post</span></p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                      <div class="jb_job_post_right_btn_wrapper">
                        <ul>
                          <li>
                            <div class="dropdown">
                              <button class="dropbtn btn btn-primary ">
                                Edit
                              </button>
                              <div class="dropdown-content">
                                <a href="#">Change Role</a>
                                <a href="#">User Activities</a>
                                <a href="#">Edit Privileges</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <!-- <div class="modal fade" id="myModal1">
                          <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title">
                                  More Description
                                </h4>
                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="modal"
                                >
                                  &times;
                                </button>
                              </div>

                              <div class="modal-body">
                                <div
                                  class="col-lg-12 col-md-12 col-sm-12 col-12 "
                                >
                                  <div class="row">
                                    <div
                                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                    >
                                      <div class="col-sm-12">
                                        <div class="jb_job_post_side_img ">
                                          <img
                                            src="images/lt1.png"
                                            alt="post_img"
                                          />
                                        </div>
                                        <h5>
                                          <a href="#">{{}}</a>
                                        </h5>
                                        <h6></h6>
                                      </div>
                                      <br />
                                      <br />
                                      <hr />
                                      <div class="col-sm-12 col-12">
                                        <div>
                                          <div>
                                            <span><h6>Job type:</h6></span>
                                          </div>
                                          <br />
                                          <div>
                                            <span><h6>Location:</h6></span>
                                          </div>
                                          <br />
                                          <div>
                                            <span
                                              ><h6>
                                                Educational Level:
                                              </h6></span
                                            >
                                          </div>
                                          <br />
                                          <span
                                            >Salary:
                                            <h6>
                                              <div></div></h6
                                          ></span>
                                          <br />
                                          <div>
                                            <span><h6>J.D:</h6></span>
                                          </div>
                                          <br />
                                          <div>
                                            <span
                                              ><h6>
                                                Minimum qulification:
                                              </h6></span
                                            >
                                          </div>
                                          <br />
                                          <div>
                                            <span><h6>Age:</h6></span>
                                          </div>
                                          <br />
                                          <div>
                                            <span><h6>Experience:</h6></span>
                                          </div>
                                          <br />
                                          <div>
                                            <span><h6>Working hours:</h6></span>
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
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="showUsers"
                  class="jb_listing_left_fullwidth mt-0 jb_cover mb-5"
                >
                  <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12"></div>
                      <div class="col-sm-12">
                        <div class="jb_job_post_side_img ">
                          <avatar
                            class="img-responsive xs-col-12 sm-col-12 mb-2"
                            :username="companys.email"
                            :size="70"
                            :rounded="false"
                          >
                          </avatar>
                        </div>
                        <h5>
                          <a href="#"></a>
                        </h5>
                        <h4>Name:</h4>
                        <p>Role:</p>
                        <p>Privileges: <span>Post</span></p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                      <div class="jb_job_post_right_btn_wrapper">
                        <ul>
                          <li>
                            <div class="dropdown">
                              <button class="dropbtn btn btn-primary ">
                                Edit
                              </button>
                              <div class="dropdown-content">
                                <a href="#">Change Role</a>
                                <a href="#">User Activities</a>
                                <a href="#">Edit Privileges</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div class="modal fade" id="myModal1">
                          <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title">
                                  More Description
                                </h4>
                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="modal"
                                >
                                  &times;
                                </button>
                              </div>

                              <div class="modal-body">
                                <div
                                  class="col-lg-12 col-md-12 col-sm-12 col-12 "
                                >
                                  <div class="row">
                                    <div
                                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                    >
                                      <div class="col-sm-12">
                                        <div class="jb_job_post_side_img ">
                                          <img
                                            src="images/lt1.png"
                                            alt="post_img"
                                          />
                                        </div>
                                        <h5>
                                          <a href="#">{{}}</a>
                                        </h5>
                                        <h6></h6>
                                      </div>
                                      <br />
                                      <br />
                                      <hr />
                                      <div class="col-sm-12 col-12">
                                        <div>
                                          <div>
                                            <span><h6>Job type:</h6></span>
                                          </div>
                                          <br />
                                          <div>
                                            <span><h6>Location:</h6></span>
                                          </div>
                                          <br />
                                          <div>
                                            <span
                                              ><h6>
                                                Educational Level:
                                              </h6></span
                                            >
                                          </div>
                                          <br />
                                          <span
                                            >Salary:
                                            <h6>
                                              <div></div></h6
                                          ></span>
                                          <br />
                                          <div>
                                            <span><h6>J.D:</h6></span>
                                          </div>
                                          <br />
                                          <div>
                                            <span
                                              ><h6>
                                                Minimum qulification:
                                              </h6></span
                                            >
                                          </div>
                                          <br />
                                          <div>
                                            <span><h6>Age:</h6></span>
                                          </div>
                                          <br />
                                          <div>
                                            <span><h6>Experience:</h6></span>
                                          </div>
                                          <br />
                                          <div>
                                            <span><h6>Working hours:</h6></span>
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
                <div
                  v-if="showActivities"
                  class="col-lg-12 col-md-12 col-sm-12 col-12"
                >
                  <div
                    class="job_filter_category_sidebar company_wrapper jb_cover"
                  >
                    <div class="job_filter_sidebar_heading jb_cover">
                      <h1>
                        All Users activities
                      </h1>
                    </div>
                    <div class="job_overview_header pdd jb_cover">
                      <ul>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="header_btn search_btn jb_cover">
                  <a href="#">save changes</a>
                </div>
              </div> -->
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
import Looking from "@/components/Looking.vue";
import Footer from "@/components/Footer.vue";
import DashboardHeader from "@/components/DashboardHeader.vue";
import CompanyDashboardSideBar from "@/components/CompanyDashboardSideBar.vue";
import Avatar from "vue-avatar";
import ChatBox from "@/components/ChatBox.vue";
import axios from "axios";
// import Multiselect from "vue-multiselect";
export default {
  data: function() {
    return {
      notChangeRole: true,
      changeRole: false,
      value: [{ name: "Javascript", code: "js" }],
      options: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Adonis", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP" },
        { name: "Phoenix", language: "Elixir" }
      ],
      successResponse: false,
      beforeResponse: false,
      showUsers: true,
      showActivities: false,
      onLine: navigator.onLine,
      showBackOnline: false,
      users: {
        first_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        middle_name: "",
        role: "",
        last_name: ""
      },
      companys: {
        name: "",
        email: "",
        category: "",
        phone_number: "",
        website: "",
        bio: "",
        address: ""
      }
    };
  },
  name: "Pages",
  components: {
    Looking,
    Footer,
    CompanyDashboardSideBar,
    DashboardHeader,
    Avatar,
    // Multiselect,
    ChatBox
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    updateRole: function() {
      this.changeRole = true;
      this.notChangeRole = false;

    },
    validateEmail(email) {
      const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
      return re.test(email);
    },
    saveNewUsers: function() {
      if (!this.onLine) {
        this.$toasted.error("Please check your internet connection");
        return false;
      }
      if (this.users.first_name == "") {
        this.$toasted.error("Please Fill First Name");
        return false;
      }
      if (this.users.middle_name == "") {
        this.$toasted.error("Please Fill Middle Name");
        return false;
      }
      if (this.users.last_name == "") {
        this.$toasted.error("Please Fill Last Name");
        return false;
      }
      if (this.users.email == "") {
        this.$toasted.error("Please Fill Email");
        return false;
      }
      if (this.users.password_confirmation == "") {
        this.$toasted.error("Please Fill Confirm Password");
        return false;
      }
      if (!this.validateEmail(this.users.email)) {
        this.$toasted.error(
          "Wrong email: Please enter at least 6 letters which includes at least number and letter"
        );
        return false;
      }
      if (this.users.password == "") {
        this.$toasted.error("Please Fill Password");
        return false;
      }
      if (this.users.password !== this.users.password_confirmation) {
        this.$toasted.error("Password and Confirm Password does not Match");
        return false;
      }
      this.beforeResponse = true;
      axios
        .post("", this.users)

        .then(response => {
          console.log(this.users);
          console.log(response);
          const token = response.data.accessToken;
          localStorage.setItem("token", token);
          if (response.status == "200") {
            this.$toasted.success("User Created");
            return true;
          } else {
            this.$toasted.error(
              "Oops, something went wrong, please try again later"
            );
            return false;
          }
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.log(error);
        });
      var accessToken = localStorage.getItem("token") || "";
      console.log(accessToken);
    },
    showAllActivities() {
      this.showUsers = false;
      this.showActivities = true;
    },
    showAllUsers: function() {
      this.showUsers = true;
      this.showActivities = false;
    }
  },
  watch: {
    onLine(v) {
      if (v) {
        this.showBackOnline = true;
        setTimeout(() => {
          this.showBackOnline = false;
        }, 1000);
      }
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
/* media screen 991  fa-spin */
@media (max-width: 991px) {
  .power_button {
    margin-top: 20px;
    margin-bottom: 5px;
    float: none;
  }
}
@media (max-width: 411px) {
  .power_button a {
    margin-bottom: 5px;
    width: 100%;
  }
}
.power_button a {
  margin-right: 10px;
}
.power_button {
  float: right;
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 10px;
}
.power_a {
  background: #990066;
  color: white;
}
.marg {
  margin-right: 5px;
}
/*  */

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  border: 0.5px solid #d5d5d5;
  border-radius: 3px;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}
.dropdown:hover .dropdown-content {
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: block;
}
.dropdown:hover .dropbtn {
  cursor: pointer;
  border-radius: 3px;
}
.activities {
  width: 100%;
  margin-top: 70px;
  border: 1px solid rgb(226, 226, 226);
  box-sizing: border-box;
}
</style>
