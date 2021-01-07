<template>
  <div>
    <div class="cursor"></div>
    <a href="javascript:" id="return-to-top"
      ><i class="fas fa-angle-double-up"></i
    ></a>
    <ResumeNavBar />
    <div class="candidate_dashboard_wrapper jb_cover">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="emp_dashboard_sidebar jb_cover">
              <img src="" class="img-responsive" alt="post_img" />
              <div class="emp_web_profile candidate_web_profile jb_cover">
                <h4>
                  {{ inputs.first_name }}
                  {{ inputs.last_name }}
                </h4>
                <p>{{ inputs.email }}</p>
                <!-- <div class="skills jb_cover">
                  <div class="skill-item jb_cover">
                    <h6>profile<span>70%</span></h6>
                    <div class="skills-progress">
                      <span data-value="70%"></span>
                    </div>
                  </div>
                </div> -->
              </div>
              <div class="emp_follow_link jb_cover">
                <ul class="feedlist">
                  <li>
                    <a href="/dashboard"
                      ><i class="fas fa-tachometer-alt"></i> dashboard
                    </a>
                  </li>
                  <li>
                    <!-- <a href="/editProfile">
                      <i class="fas fa-edit"></i>edit profile
                    </a> -->
                  </li>
                  <li>
                    <a href="/resume" class="link_active"
                      ><i class="fas fa-file"></i>resume
                    </a>
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
          <ResumeRightSidebar />
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
    <ChatBox />
    <Footer />
  </div>
</template>

<script>
import Looking from "@/components/Looking.vue";
import ResumeRightSidebar from "@/components/ResumeRightSidebar.vue";
import ResumeNavBar from "@/components/ResumeNavBar.vue";
import Footer from "@/components/Footer.vue";
import ChatBox from "@/components/ChatBox.vue";
import axios from "axios";
export default {
  name: "CandidateResume",
  components: {
    Looking,
    Footer,
    ResumeRightSidebar,
    ResumeNavBar,
    ChatBox
  },
  data() {
    return {
      inputs: {
        first_name: "",
        email: "",
        last_name: ""
      }
    };
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
        this.inputs.email = response.data.email;
      })
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });

    axios.get("https://api.myjobdesk.com/api/user").then(function(data) {
      console.log(data);
    });
  }
};
</script>

<style></style>
