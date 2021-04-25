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
          <CompanyDashboardSideBar :comp="company" />
          <div v-if="changeRole" class="col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                <a
                  href="#"
                  @click.prevent="back"
                  class="text-danger float-right"
                >
                  <i class="far fa-times-circle"></i>
                </a>
                <h4 class="text-center mb-3">Update Role</h4>
                <input
                  v-model="users.role"
                  class="form-control"
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="Change Role"
                />
                <datalist id="datalistOptions">
                  <option value="editor"> </option>
                  <option value="admin"> </option>
                  <option value="reviewer"> </option>
                </datalist>

                <button class="btn power_a mt-2 col-12">
                  update
                </button>
              </div>
            </div>
          </div>
          <div
            v-if="givePrivilegesDiv"
            class="col-lg-9 col-md-12 col-sm-12 col-12"
          >
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12 privileges ">
                <a
                  href="#"
                  @click.prevent="backest"
                  class="text-danger float-right p-3"
                >
                  <i class="far fa-times-circle"></i>
                </a>
                <h5 class="p-3 text-center">Edit Privileges</h5>
                <ul class="ks-cboxtags">
                  <li>
                    <input
                      type="checkbox"
                      id="checkboxOne"
                      v-model="updatePrivileges.manage_users"
                    /><label for="checkboxOne">Can Manage Users</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="checkboxTwo"
                      v-model="updatePrivileges.send_messages"
                    /><label for="checkboxTwo">Can Send Messages</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="checkboxThree"
                      v-model="updatePrivileges.view_all_user_activities"
                    /><label for="checkboxThree">Can view all activities</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="checkboxFour"
                      v-model="updatePrivileges.post_jobs"
                    /><label for="checkboxFour">Can Post Jobs</label>
                  </li>
                  <li>
                    <input
                      v-model="updatePrivileges.post_interview_questions"
                      type="checkbox"
                      id="checkboxFive"
                    /><label for="checkboxFive"
                      >Can Post Interview Questions</label
                    >
                  </li>
                  <li>
                    <input
                      v-model="updatePrivileges.edit_profile"
                      type="checkbox"
                      id="checkboxSix"
                    /><label for="checkboxSix">Can Edit Profile</label>
                  </li>
                  <li>
                    <button
                      @click.prevent="editUserPrivileges"
                      class="btn power_a mt-2 mb-4 col-12"
                    >
                      update
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div v-if="userActivity" class="col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                <div
                  class="job_filter_category_sidebar company_wrapper jb_cover"
                >
                  <div class="job_filter_sidebar_heading jb_cover">
                    <a
                      href="#"
                      @click.prevent="backer"
                      class="text-white float-right"
                    >
                      <i class="far fa-times-circle"></i>
                    </a>
                    <h1>
                      User activities
                    </h1>
                  </div>
                  <div class="job_overview_header pdd jb_cover">
                    <ul class="mb-2">
                      <p class="text-info">
                        sfkhaesriuheisub@dfbs;fnde.com
                      </p>
                      <li>
                        Action Type: sdveadedartedrtbbbbbbrved
                      </li>
                      <li>
                        Browser: Chrome
                      </li>
                      <li>
                        Ip Address: 136782345
                      </li>
                      <li><small>Time: 2:00 gmt</small></li>
                    </ul>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="notChangeRole" class="col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                <div class="power_button float-right">
                  <a
                    @click.prevent="showAllActivities"
                    v-if="showUsers"
                    href="#"
                    class="btn power_a"
                    >view all users activities</a
                  >
                  <a
                    v-if="showUsers"
                    @click.prevent="creatNewUser"
                    class="btn power_a"
                    href="#"
                    >create new user</a
                  >
                </div>
                <div v-if="showUsers">
                  <h5 class="text-center mt-5 mb-2">All Users</h5>

                  <div class="jb_listing_left_fullwidth mt-0 jb_cover margin">
                    <div class="row">
                      <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12"></div>
                        <div class="col-sm-12">
                          <div class="jb_job_post_side_img">
                            <avatar
                              class="img-responsive xs-col-12 sm-col-12 mb-2"
                              :size="70"
                              :rounded="false"
                            >
                            </avatar>
                          </div>
                          <h5>
                            <a href="#"></a>
                          </h5>
                          <h4>Name: {{}}</h4>
                          <p>Role: {{}}</p>
                          <p>
                            Privileges: {{}}
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-3 float-right">
                        <div class="jb_job_post_right_btn_wrapper">
                          <ul>
                            <li>
                              <div class="dropdown">
                                <div class="dropbtn">
                                  <button class="btn power_a">
                                    Edit <i class="fas fa-edit "></i>
                                  </button>
                                </div>
                                <div class="dropdown-content">
                                  <a @click.prevent="updateRole" href="#"
                                    >Change Role</a
                                  >
                                  <a @click.prevent="viewactivities" href="#"
                                    >User Activities</a
                                  >
                                  <a @click.prevent="viewPrivileges" href="#"
                                    >Edit Privileges</a
                                  >
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="showCreateNewUserDiv" class="create_user_div">
                  <div>
                    <a
                      @click.prevent="removeshowCreateNewUserDiv"
                      href="#"
                      class="text-danger float-right"
                    >
                      <i class="far fa-times-circle"></i>
                    </a>
                    <h5 class="modal-title">Create New User</h5>
                  </div>
                  <div>
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
                    <input
                      class="form-control"
                      list="datalistOptions"
                      v-model="users.role"
                      id="exampleDataList"
                      placeholder="Assign Role"
                    />
                    <datalist id="datalistOptions">
                      <option value="editor"></option>
                      <option value="admin"></option>
                      <option value="reviewer"></option>
                    </datalist>
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
                  <hr />
                  <button
                    @click.prevent="saveNewUsers"
                    type="submit"
                    class="btn power_a col-12"
                  >
                    Create User
                  </button>
                </div>
                <div
                  v-if="showActivities"
                  class="col-lg-12 col-md-12 col-sm-12 col-12"
                >
                  <div
                    class="job_filter_category_sidebar company_wrapper jb_cover"
                  >
                    <div class="job_filter_sidebar_heading jb_cover">
                      <a
                        @click.prevent="showAllUsers"
                        v-if="showActivities"
                        href="#"
                        class="text-white float-right"
                        ><i class="fas fa-times-circle"></i
                      ></a>
                      <h1>All Users activities</h1>
                    </div>
                    <div class="job_overview_header pdd jb_cover">
                      <ul
                        v-for="(activity, index) in activities"
                        :key="index"
                        class="mb-2"
                      >
                        <h5>
                          {{ activity.email }}
                        </h5>
                        <li>Action Type: {{ activity.action_type }}</li>
                        <li>Browser: {{ activity.browser }}</li>
                        <li>Ip Address: {{ activity.ip_address }}</li>
                        <li>
                          <small>Time: {{ activity.time }}</small>
                        </li>
                      </ul>
                      <hr />
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
      givePrivilegesDiv: false,
      editPrivileges: false,
      notChangeRole: true,
      changeRole: false,
      userActivity: false,
      successResponse: false,
      beforeResponse: false,
      showUsers: true,
      showActivities: false,
      onLine: navigator.onLine,
      showBackOnline: false,
      showCreateNewUserDiv: false,
      activities: [],
      users: {
        first_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        middle_name: "",
        role: "",
        last_name: ""
      },
      newUsers: [],
      updatePrivileges: {
        manage_users: null,
        send_messages: null,
        edit_profile: null,
        post_interview_questions: null,
        post_jobs: null,
        view_all_user_activities: null
      },
      company: this.$store.getters.StateCompanyDetails ?? ""
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
    editUserPrivileges: function() {
      var request = {};
      request.manage_users = this.updatePrivileges.manage_users;
      request.send_messages = this.updatePrivileges.send_messages;
      request.edit_profile = this.updatePrivileges.edit_profile;
      request.post_interview_questions = this.updatePrivileges.post_interview_questions;
      request.post_jobs = this.updatePrivileges.post_jobs;
      request.view_all_user_activities = this.updatePrivileges.view_all_user_activities;
      this.$store
        .dispatch("UpdateUserPrivileges", request)
        .then(response => {
          this.pDResponse = response.status;
          this.$toasted.success("Personal details Saved");
          this.spin = false;
          this.notSpin = true;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
        });
     
    },
    getAllUserActivities: function() {
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Fetch Available Jobs"
      };
      axios
        .get("", {
          headers: headers
        })
        .then(response => {
          console.log(response);
          this.activities = response.data;
        });
    },
    getAllUsers: function() {
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Fetch Available Jobs"
      };
      axios
        .get("", {
          headers: headers
        })
        .then(response => {
          console.log(response);
          this.newUsers = response.data;
        });
    },
    removeshowCreateNewUserDiv: function() {
      this.showCreateNewUserDiv = false;
      this.showUsers = true;
    },
    creatNewUser: function() {
      this.showCreateNewUserDiv = true;
      this.showUsers = false;
    },
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
    back: function() {
      this.changeRole = false;
      this.notChangeRole = true;
    },
    viewactivities: function() {
      this.notChangeRole = false;
      this.userActivity = true;
    },
    backer: function() {
      this.notChangeRole = true;
      this.userActivity = false;
    },
    viewPrivileges: function() {
      this.notChangeRole = false;
      this.givePrivilegesDiv = true;
    },
    backest: function() {
      this.notChangeRole = true;
      this.givePrivilegesDiv = false;
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
  created: function() {
    this.getAllUserActivities();
    this.getAllUsers();
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
  /* float: right; */
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

/* 575 */

@media (max-width: 575px) {
  .dropdown {
    display: block;
    margin-top: -75px;
  }
}
@media (max-width: 400px) {
  .dropdown {
    margin-top: 0;
  }
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
ul.ks-cboxtags {
  list-style: none;
  padding: 20px;
}
ul.ks-cboxtags li {
  display: inline;
}
ul.ks-cboxtags li label {
  display: block;
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(139, 139, 139, 0.3);
  color: #adadad;
  border-radius: 25px;
  white-space: nowrap;
  margin: 3px 0px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.2s;
}

ul.ks-cboxtags li label {
  padding: 8px 12px;
  cursor: pointer;
}

ul.ks-cboxtags li label::before {
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 12px;
  padding: 2px 6px 2px 2px;
  content: "\f067";
  transition: transform 0.3s ease-in-out;
}

ul.ks-cboxtags li input[type="checkbox"]:checked + label::before {
  content: "\f00c";
  transform: rotate(-360deg);
  transition: transform 0.3s ease-in-out;
}

ul.ks-cboxtags li input[type="checkbox"]:checked + label {
  border: 2px solid #e9a1ff;
  background-color: #990066;
  color: #fff;
  transition: all 0.2s;
}

ul.ks-cboxtags li input[type="checkbox"] {
  display: absolute;
}
ul.ks-cboxtags li input[type="checkbox"] {
  position: absolute;
  opacity: 0;
}
ul.ks-cboxtags li input[type="checkbox"]:focus + label {
  border: 2px solid #e9a1ff;
}
.privileges {
  -webkit-box-shadow: 0 2px 3px #777;
  -moz-box-shadow: 0 2px 3px #777;
  box-shadow: 0 2px 3px #777;
  box-sizing: border-box;
  border-radius: 5px;
  border: 0.5px solid rgb(232, 232, 232);
}
.margin {
  margin-bottom: 55px;
}
.create_user_div {
  border: 1px solid rgb(230, 230, 230);
  padding: 20px;
}
</style>
