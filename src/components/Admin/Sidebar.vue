<template>
  <div class="col-lg-3 col-md-12 col-sm-12 col-12">
    <div class="emp_dashboard_sidebar jb_cover">
      <div class="emp_web_profile jb_cover">
        <div class="avatar_center">
          <avatar
            class="img-responsive xs-col-12 sm-col-12 mb-2"
            :username="companys.email"
            :size="190"
            :rounded="true"
            :backgroundColor="'#c14c93'"
          >
          </avatar>
        </div>
        <h4>{{ companys.name }}</h4>
        <p>{{ companys.email }}</p>
        <div class="skills jb_cover">
          <div class="skill-item jb_cover">
            <h6>profile<span>70%</span></h6>
            <div class="skills-progress">
              <span data-value="70%"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="emp_follow_link jb_cover">
        <ul class="feedlist">
          <router-link tag="li" to="/adminDashboard">
            <a href="/adminDashboard"
              ><i class="fas fa-tachometer-alt"></i>dashboard
            </a>
          </router-link>
          <router-link tag="li" to="/adminEditProfile">
            <a href="/adminEditProfile">
              <i class="fas fa-edit"></i>edit profile
            </a>
          </router-link>
          <router-link tag="li" to="/adminPost">
            <a href="/adminPost"
              ><i class="fas fa-user-plus"></i>post interview Questions</a
            >
          </router-link>
          <router-link tag="li" to="/adminManage">
            <a href="/adminManage"><i class="fas fa-user"></i>Manage Users</a>
          </router-link>
          <router-link tag="li" to="/adminMessages">
            <a href="/adminMessages"><i class="fas fa-envelope"></i>messages</a>
          </router-link>
        </ul>
        <ul class="feedlist logout_link jb_cover">
          <router-link tag="li" to="/logout">
            <a href="/logout"><i class="fas fa-power-off"></i> log out </a>
          </router-link>
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
                    required
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
  data: function() {
    return {
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
  components: {
    Avatar
  }
};
</script>

<style></style>
