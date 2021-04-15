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
              <h1>Manage Account</h1>
            </div>
            <div class="col-xl-3 col-lg-5 col-md-5 col-12 col-sm-12">
              <div class="sub_title_section">
                <ul class="sub_title">
                  <li><a href="#"> Home </a>&nbsp; / &nbsp;</li>
                  <li>Manage Account</li>
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
          <pagination></pagination>
          <VuePagination />
          <!-- <div class="col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="job_main_overflow jb_cover">
                  <div class="latest_job_overlow jb_cover">
                    <div class="manage_jobs_wrapper jb_cover">
                      <div class="job_list mange_list">
                        <h6>job title</h6>
                      </div>
                      <div class="job_list_next mange_list">
                        <h6>applications</h6>
                      </div>
                      <div class="job_list_next mange_list">
                        <h6>status</h6>
                      </div>
                      <div class="job_list_next mange_list">
                        <h6>action</h6>
                      </div>
                    </div>

                    <div class="latest_job_box jb_cover">
                      <div class="job_list">
                        <h6><a href="#">General Ledger Accountant</a></h6>
                        <p>
                          <i class="far fa-calendar"></i> Date Posted : 02 Oct
                          2017
                        </p>
                      </div>
                      <div class="job_list_next">
                        <p><a href="#">06 Applications</a></p>
                      </div>
                      <div class="job_list_next">
                        <p class="gn">active</p>
                      </div>
                      <div class="job_list_next">
                        <ul>
                          <li>
                            <a href="#"><i class="fas fa-eye"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-edit"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-trash-alt"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="latest_job_box jb_cover">
                      <div class="job_list">
                        <h6><a href="#">General Ledger Accountant</a></h6>
                        <p>
                          <i class="far fa-calendar"></i> Date Posted : 02 Oct
                          2017
                        </p>
                      </div>
                      <div class="job_list_next">
                        <p><a href="#">12 Applications</a></p>
                      </div>
                      <div class="job_list_next">
                        <p class="pen">pending</p>
                      </div>
                      <div class="job_list_next">
                        <ul>
                          <li>
                            <a href="#"><i class="fas fa-eye"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-edit"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-trash-alt"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="latest_job_box jb_cover">
                      <div class="job_list">
                        <h6><a href="#">Land Development Marketer</a></h6>
                        <p>
                          <i class="far fa-calendar"></i> Date Posted : 02 Oct
                          2017
                        </p>
                      </div>
                      <div class="job_list_next">
                        <p><a href="#">07 Applications</a></p>
                      </div>
                      <div class="job_list_next">
                        <p class="ex">expired</p>
                      </div>
                      <div class="job_list_next">
                        <ul>
                          <li>
                            <a href="#"><i class="fas fa-eye"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-edit"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-trash-alt"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="latest_job_box jb_cover">
                      <div class="job_list">
                        <h6><a href="#">General Ledger Accountant</a></h6>
                        <p>
                          <i class="far fa-calendar"></i> Date Posted : 02 Oct
                          2017
                        </p>
                      </div>
                      <div class="job_list_next">
                        <p><a href="#">66 Applications</a></p>
                      </div>
                      <div class="job_list_next">
                        <p class="gn">active</p>
                      </div>
                      <div class="job_list_next">
                        <ul>
                          <li>
                            <a href="#"><i class="fas fa-eye"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-edit"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-trash-alt"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="latest_job_box jb_cover">
                      <div class="job_list">
                        <h6><a href="#">Designer Required </a></h6>
                        <p>
                          <i class="far fa-calendar"></i> Date Posted : 02 Oct
                          2017
                        </p>
                      </div>
                      <div class="job_list_next">
                        <p><a href="#">03 Applications</a></p>
                      </div>
                      <div class="job_list_next">
                        <p class="pen">pending</p>
                      </div>
                      <div class="job_list_next">
                        <ul>
                          <li>
                            <a href="#"><i class="fas fa-eye"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-edit"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-trash-alt"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="latest_job_box jb_cover">
                      <div class="job_list">
                        <h6><a href="#">General Ledger Accountant</a></h6>
                        <p>
                          <i class="far fa-calendar"></i> Date Posted : 02 Oct
                          2017
                        </p>
                      </div>
                      <div class="job_list_next">
                        <p><a href="#">66 Applications</a></p>
                      </div>
                      <div class="job_list_next">
                        <p class="gn">active</p>
                      </div>
                      <div class="job_list_next">
                        <ul>
                          <li>
                            <a href="#"><i class="fas fa-eye"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-edit"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-trash-alt"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="latest_job_box jb_cover">
                      <div class="job_list">
                        <h6><a href="#">Land Development Marketer</a></h6>
                        <p>
                          <i class="far fa-calendar"></i> Date Posted : 02 Oct
                          2017
                        </p>
                      </div>
                      <div class="job_list_next">
                        <p><a href="#">16 Applications</a></p>
                      </div>
                      <div class="job_list_next">
                        <p class="ex">expired</p>
                      </div>
                      <div class="job_list_next">
                        <ul>
                          <li>
                            <a href="#"><i class="fas fa-eye"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-edit"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-trash-alt"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="blog_pagination_section jb_cover">
                      <pagination
                        v-model="page"
                        :records="500"
                        @paginate="myCallback"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
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
// import Pagination from "@/components/Pagination.vue";
import Looking from "@/components/Looking.vue";
import Footer from "@/components/Footer.vue";
// import Pagination from "vue-pagination-2";
import ChatBox from "@/components/ChatBox.vue";
import VuePagination from "@/components/VuePagination.vue";
import DashboardHeader from "@/components/DashboardHeader.vue";
import CompanyDashboardSideBar from "@/components/CompanyDashboardSideBar.vue";
export default {
  name: "ManageJobs",
  data: function() {
    return {
      page: 1,
      company: this.$store.getters.StateCompanyDetails ?? ""
    };
  },
  components: {
    Looking,
    Footer,
    // Pagination,
    // Avatar,
    VuePagination,
    ChatBox,
    DashboardHeader,
    CompanyDashboardSideBar
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
