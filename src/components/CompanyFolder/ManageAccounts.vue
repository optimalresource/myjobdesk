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
              <h1>Company Page</h1>
            </div>
            <div class="col-xl-3 col-lg-5 col-md-5 col-12 col-sm-12">
              <div class="sub_title_section">
                <ul class="sub_title">
                  <li><a href="#"> Home </a>&nbsp; / &nbsp;</li>
                  <li>Company Page</li>
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
                <div
                  class="job_filter_category_sidebar company_wrapper jb_cover"
                >
                  <div class="job_filter_sidebar_heading jb_cover">
                    <h1>
                      basic information
                      <span
                        ><a href="#" data-toggle="modal" data-target="#myModal1"
                          ><i class="fas fa-edit"></i></a
                      ></span>
                    </h1>
                    <div
                      class="modal fade delete_popup company_popup"
                      id="myModal1"
                      role="dialog"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                          >
                            &times;
                          </button>
                          <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div class="delett_cntn jb_cover">
                                <h1>
                                  <i class="fas fa-edit"></i>basic information
                                </h1>

                                <div class="category_wrapper jb_cover">
                                  <div class="row">
                                    <div
                                      class="col-lg-3 col-md-3 col-sm-12 col-12"
                                    >
                                      <div class="category_lavel jb_cover">
                                        <p>category :</p>
                                      </div>
                                    </div>
                                    <div
                                      class="col-lg-9 col-md-9 col-sm-12 col-12"
                                    >
                                      <div class="delete_jb_form">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="Design & creative"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="category_wrapper jb_cover">
                                  <div class="row">
                                    <div
                                      class="col-lg-3 col-md-3 col-sm-12 col-12"
                                    >
                                      <div class="category_lavel jb_cover">
                                        <p>location :</p>
                                      </div>
                                    </div>
                                    <div
                                      class="col-lg-9 col-md-9 col-sm-12 col-12"
                                    >
                                      <div class="delete_jb_form">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="loss angles"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="category_wrapper jb_cover">
                                  <div class="row">
                                    <div
                                      class="col-lg-3 col-md-3 col-sm-12 col-12"
                                    >
                                      <div class="category_lavel jb_cover">
                                        <p>phone :</p>
                                      </div>
                                    </div>
                                    <div
                                      class="col-lg-9 col-md-9 col-sm-12 col-12"
                                    >
                                      <div class="delete_jb_form">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="+91 983622711"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="category_wrapper jb_cover">
                                  <div class="row">
                                    <div
                                      class="col-lg-3 col-md-3 col-sm-12 col-12"
                                    >
                                      <div class="category_lavel jb_cover">
                                        <p>email :</p>
                                      </div>
                                    </div>
                                    <div
                                      class="col-lg-9 col-md-9 col-sm-12 col-12"
                                    >
                                      <div class="delete_jb_form">
                                        <input
                                          type="email"
                                          name="email"
                                          placeholder="myjobdesk@example.com"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="category_wrapper jb_cover">
                                  <div class="row">
                                    <div
                                      class="col-lg-3 col-md-3 col-sm-12 col-12"
                                    >
                                      <div class="category_lavel jb_cover">
                                        <p>company size :</p>
                                      </div>
                                    </div>
                                    <div
                                      class="col-lg-9 col-md-9 col-sm-12 col-12"
                                    >
                                      <div class="delete_jb_form">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="100"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="padder_top jb_cover"></div>
                                <div
                                  class="header_btn search_btn applt_pop_btn"
                                >
                                  <a href="#">save updates</a>
                                </div>
                                <div class="cancel_wrapper">
                                  <a href="#" data-dismiss="modal">cancel</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job_overview_header jb_cover">
                    <div class="row">
                      <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div
                          class="jp_listing_overview_list_main_wrapper jb_cover"
                        >
                          <div class="jp_listing_list_icon">
                            <i class="far fa-calendar"></i>
                          </div>
                          <div class="jp_listing_list_icon_cont_wrapper">
                            <ul>
                              <li>categories:</li>
                              <li>Design & Creative</li>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="jp_listing_overview_list_main_wrapper jb_cover"
                        >
                          <div class="jp_listing_list_icon">
                            <i class="fas fa-map-marker-alt"></i>
                          </div>
                          <div class="jp_listing_list_icon_cont_wrapper">
                            <ul>
                              <li>Location:</li>
                              <li>Wuse, Abuja</li>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="jp_listing_overview_list_main_wrapper jb_cover"
                        >
                          <div class="jp_listing_list_icon">
                            <i class="fa fa-info-circle"></i>
                          </div>
                          <div class="jp_listing_list_icon_cont_wrapper">
                            <ul>
                              <li>Hotline::</li>
                              <li>08093312225:</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div
                          class="jp_listing_overview_list_main_wrapper jb_cover"
                        >
                          <div class="jp_listing_list_icon">
                            <i class="fas fa-envelope"></i>
                          </div>
                          <div class="jp_listing_list_icon_cont_wrapper">
                            <ul>
                              <li>email:</li>
                              <li><a href="#">admin@myjobdesk.com</a></li>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="jp_listing_overview_list_main_wrapper jb_cover"
                        >
                          <div class="jp_listing_list_icon">
                            <i class="flaticon-man-user"></i>
                          </div>
                          <div class="jp_listing_list_icon_cont_wrapper">
                            <ul>
                              <li>company size:</li>
                              <li>20-50</li>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="jp_listing_overview_list_main_wrapper dcv jb_cover"
                        >
                          <div class="jp_listing_list_icon">
                            <i class="fas fa-globe-asia"></i>
                          </div>
                          <div class="jp_listing_list_icon_cont_wrapper">
                            <ul>
                              <li>website:</li>
                              <li><a href="#">www.myjobdesk.com</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="header_btn search_btn jb_cover">
                  <a href="#">save changes</a>
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
import Looking from "@/components/Looking.vue";
import Footer from "@/components/Footer.vue";
import DashboardHeader from "@/components/DashboardHeader.vue";
import CompanyDashboardSideBar from "@/components/CompanyDashboardSideBar.vue";
import ChatBox from "@/components/ChatBox.vue";
export default {
  name: "Pages",
  components: {
    Looking,
    Footer,
    CompanyDashboardSideBar,
    DashboardHeader,
    ChatBox
  }
};
</script>

<style></style>
