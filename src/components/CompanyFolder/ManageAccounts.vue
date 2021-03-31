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

          <div class="col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                <div class="power_button ">
                  <div class="header_btn search_btn jb_cover marg">
                    <a href="#">view activeties</a>
                  </div>
                  <div class="header_btn search_btn jb_cover">
                    <a data-toggle="modal" data-target="#myModal234" href="#"
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
                              v-model="First_name"
                              placeholder="First Name"
                              required
                            />
                          </div>
                          <div class="delete_jb_form">
                            <input
                              type="text"
                              v-model="middle_name"
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
                              v-model="email"
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
                              v-model="password"
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
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="jb_listing_left_fullwidth mt-0 jb_cover mb-5">
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
                        <p>Priveleges: <span>Post</span></p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                      <div class="jb_job_post_right_btn_wrapper">
                        <ul>
                          <li>
                            <div class="dropdown">
                              <button class="dropbtn btn btn-danger ">
                                Edit
                              </button>
                              <div class="dropdown-content">
                                <a href="#">Change Role</a>
                                <a href="#">User Activities</a>
                                <a href="#">Edit Priveleges</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="jb_listing_left_fullwidth mt-0 jb_cover mb-5">
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
                        <p>Priveleges: <span>Post</span></p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                      <div class="jb_job_post_right_btn_wrapper">
                        <ul>
                          <li>
                            <div class="dropdown">
                              <button class="dropbtn btn btn-danger ">
                                Edit
                              </button>
                              <div class="dropdown-content">
                                <a href="#">Change Role</a>
                                <a href="#">User Activities</a>
                                <a href="#">Edit Priveleges</a>
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
                <div class="jb_listing_left_fullwidth mt-0 jb_cover mb-5">
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
                        <p>Priveleges: <span>Post</span></p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                      <div class="jb_job_post_right_btn_wrapper">
                        <ul>
                          <li>
                            <div class="dropdown">
                              <button class="dropbtn btn btn-danger ">
                                Edit
                              </button>
                              <div class="dropdown-content">
                                <a href="#">Change Role</a>
                                <a href="#">User Activities</a>
                                <a href="#">Edit Priveleges</a>
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
export default {
  data: function() {
    return {
      users: {
        first_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        middle_name: "",
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
    ChatBox
  }
};
</script>

<style scoped>
.power_button {
  float: right;
  display: flex;
  margin-bottom: 10px;
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
</style>
