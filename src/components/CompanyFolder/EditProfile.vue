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
              <h1>Edit Profile</h1>
            </div>
            <div class="col-xl-3 col-lg-5 col-md-5 col-12 col-sm-12">
              <div class="sub_title_section">
                <ul class="sub_title">
                  <li><a href="#"> Home </a>&nbsp; / &nbsp;</li>
                  <li>Edit Profile</li>
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
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="browse jb_cover">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div
                        class="job_filter_category_sidebar company_wrapper jb_cover"
                      ></div>
                    </div>
                  </div>
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
// import Avatar from "vue-avatar";
import Looking from "@/components/Looking.vue";
import Footer from "@/components/Footer.vue";
import DashboardHeader from "@/components/DashboardHeader.vue";
import ChatBox from "@/components/ChatBox.vue";
import CompanyDashboardSideBar from "@/components/CompanyDashboardSideBar.vue";
export default {
  name: "EditProfile",
  data: function() {
    return {
      companys: {
        name: "",
        email: "",
        category: "",
        phone_number: "",
        website: "",
        job_description: "",
        country: "",
        state: "",
        city: "",
        address: ""
      }
    };
  },
  components: {
    Looking,
    Footer,
    // Avatar,
    CompanyDashboardSideBar,
    DashboardHeader,
    ChatBox
  },
  methods: {
    saveProfile() {
      //calling axios here to save profile
    },
    saveSocialMedia() {
      //saving social media handles
    }
  }
};
</script>

<style>
@media (max-width: 10000px) {
  .avatar_center {
    margin-left: 10px;
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
