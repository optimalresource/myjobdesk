<template>
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
            <a href="/dashboard"
              ><i class="fas fa-tachometer-alt"></i> dashboard
            </a>
          </li>
          <li>
            <a href="/resume"><i class="fas fa-file"></i>resume </a>
          </li>
          <li>
            <a href="/applied" class="link_active"
              ><i class="fas fa-check-square"></i>Available jobs</a
            >
          </li>
        </ul>
        <ul class="feedlist logout_link jb_cover">
          <li>
            <a href="/logout"><i class="fas fa-power-off"></i> log out </a>
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
                    >You accepts our <a href="#">Terms and Conditions </a> and
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
</template>

<script>
import Avatar from "vue-avatar";
export default {
  name: "DashboardSideBar",
  components: {
    Avatar
  },
  data: function() {
    return {
      inputs: {
        first_name: "",
        last_name: "",
        middle_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
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
.badge1[data-badge]:after {
  content: attr(data-badge);
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 0.7em;
  background: #990066;
  color: white;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 18px;
  border-radius: 50%;
  box-shadow: 0 0 1px #333;
}
</style>
