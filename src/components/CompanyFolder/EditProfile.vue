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
          <CompanyDashboardSideBar :comp="company" />
          <div class="col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="job_filter_sidebar_heading jb_cover">
                  <h1>Edit Section</h1>
                </div>
              </div>
            </div>
            <div class="row ">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="job_listing_left_fullwidth jb_cover ">
                  <div class="change_prodile_pics_div">
                    <a href="#" class="btn"
                      >Change Profile Picture <i class="fas fa-cog fa-spin"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="job_listing_left_fullwidth jb_cover">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="contect_form3">
                        <input
                          type="text"
                          placeholder="Company's Name"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="contect_form3">
                        <input
                          type="email"
                          placeholder="Email e.g 'webstrot@example.com'"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="contect_form3">
                        <input
                          type="number"
                          placeholder="Phone e.g  '+91 9098085819'"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="contect_form3">
                        <input type="text" placeholder="Website" required />
                      </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="contect_form3">
                        <input
                          type="email"
                          name="email"
                          placeholder="email "
                          required
                        />
                      </div>
                    </div>
                    <br />
                    <br />
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="contect_form3">
                        <textarea
                          class="form-control"
                          placeholder="Company's Address"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12 mt-4">
                      <div class="contect_form3">
                        <textarea
                          class="form-control"
                          placeholder="About Us..."
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12 mt-4">
                      <input
                        class="form-control"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="Country"
                        required
                      />
                      <datalist id="datalistOptions">
                        <option value="San Francisco"> </option>
                        <option value="New York"> </option>
                        <option value="Seattle"> </option>
                        <option value="Los Angeles"> </option>
                        <option value="Chicago"> </option>
                      </datalist>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12 mt-4">
                      <input
                        class="form-control"
                        list="datalistOptions"
                        id="exampleDataList1"
                        placeholder="State..."
                        required
                      />
                      <datalist id="datalistOptions">
                        <option value="San Francisco"> </option>
                        <option value="New York"> </option>
                        <option value="Seattle"> </option>
                        <option value="Los Angeles"> </option>
                        <option value="Chicago"> </option>
                      </datalist>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12 mt-4">
                      <input
                        class="form-control"
                        list="datalistOptions"
                        id="exampleDataList2"
                        placeholder="City..."
                        required
                      />
                      <datalist id="datalistOptions">
                        <option value="San Francisco"> </option>
                        <option value="New York"> </option>
                        <option value="Seattle"> </option>
                        <option value="Los Angeles"> </option>
                        <option value="Chicago"> </option>
                      </datalist>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12 mt-4">
                      <input
                        class="form-control"
                        list="datalistOptions"
                        id="exampleDataList3"
                        placeholder="Local Government..."
                        required
                      />
                      <datalist id="datalistOptions">
                        <option value="San Francisco"> </option>
                        <option value="New York"> </option>
                        <option value="Seattle"> </option>
                        <option value="Los Angeles"> </option>
                        <option value="Chicago"> </option>
                      </datalist>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12 mt-4">
                      <input
                        class="form-control"
                        list="datalistOptions"
                        id="exampleDataList4"
                        placeholder="Company size"
                        required
                      />
                      <datalist id="datalistOptions">
                        <option value="1-10">1-10</option>
                        <option value="10-50">10-50</option>
                        <option value="50-200">50-200</option>
                        <option value="200-1000">200-1000</option>
                        <option value="1000 and above">1000 and above</option>
                      </datalist>
                      <br />
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <h5 class="text-center mt-5 mb-3 header">
                          Social Networks
                        </h5>
                      </div>
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div class="contect_form3">
                            <label>google</label>
                            <input
                              type="text"
                              placeholder="https://instagram.com/webstrot"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div class="contect_form3">
                            <label>facebook</label>
                            <input
                              type="text"
                              placeholder="https://www.facebook.com/webstrot"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div class="contect_form3">
                            <label>twitter</label>
                            <input
                              type="text"
                              placeholder="https://www.twitter.com/webstrot"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div class="contect_form3">
                            <label>linkedin</label>
                            <input
                              type="text"
                              placeholder="https://www.linkedin.com/webstrot"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                          <h5 class="text-center mt-3 mb-3 header">
                            Password & Security
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div class="contect_form3">
                            <input
                              type="email"
                              name="email"
                              placeholder="email"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div class="contect_form3">
                            <input
                              type="password"
                              name="password"
                              placeholder="password"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div class="contect_form3">
                            <input
                              type="password"
                              name="password"
                              placeholder="new password"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div class="contect_form3">
                            <input
                              type="password"
                              name="password"
                              placeholder="repeat new pasword"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- <div class="browse jb_cover">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="job_filter_category_sidebar jb_cover">
                        <div class="job_filter_sidebar_heading jb_cover">
                          <h1>password & security</h1>
                        </div>
                        <div class="job_overview_header jb_cover"></div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="login_remember_box jb_cover">
                        <label class="control control--checkbox"
                          >Enable Two Step Verification Via Email
                          <input type="checkbox" />
                          <span class="control__indicator"></span>
                        </label>
                        <div class="header_btn search_btn jb_cover">
                          <a href="#">save changes</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="header_btn search_btn jb_cover">
                  <a class=" col-12" href="#">save changes</a>
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
import ChatBox from "@/components/ChatBox.vue";
import CompanyDashboardSideBar from "@/components/CompanyDashboardSideBar.vue";

export default {
  name: "EditProfile",
  data: function() {
    return {
      company: this.$store.getters.StateCompanyDetails ?? "",
      image_name: null,
      selectedFile: true,
      imgSrc: null
    };
  },
  components: {
    Looking,
    Footer,
    CompanyDashboardSideBar,
    DashboardHeader,
    ChatBox
  },
  computed: {},
  methods: {},
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
.header {
  color: #990066;
}
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
.change_prodile_pics_div {
  padding: 20px;
  text-align: center;
}
.change_prodile_pics_div a {
  color: white;
  background: #000000;
}
.change_prodile_pics_div a:hover {
  color: white;
}
.user {
  width: 140px;
  height: 140px;
  border-radius: 100%;
  border: 3px solid #2e7d32;
  position: relative;
}
.profile-img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
.icon {
  position: absolute;
  top: 10px;
  right: 0;
  background: #e2e2e2;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  text-align: center;
  color: #0000ff;
  font-size: 14px;
  cursor: pointer;
}
</style>
