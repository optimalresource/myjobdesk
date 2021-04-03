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
              <h1>post new job</h1>
            </div>
            <div class="col-xl-3 col-lg-5 col-md-5 col-12 col-sm-12">
              <div class="sub_title_section">
                <ul class="sub_title">
                  <li><a href="#"> Home </a>&nbsp; / &nbsp;</li>
                  <li>post new job</li>
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
                <div class="job_filter_category_sidebar pd0 jb_cover">
                  <div class="job_filter_sidebar_heading jb_cover">
                    <h1>About this Job</h1>
                  </div>
                  <div class="job_overview_header jb_cover">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12 mt-4">
                        <div class="contect_form3">
                          <input
                            type="text"
                            name="name"
                            placeholder="job title.... eg 'Graphic Designer'"
                            v-model="posts.job_title"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="contect_form3">
                          <input
                            type="text"
                            name="name"
                            placeholder="job Type.... eg 'Graduate Trainee, Full-Time'"
                            v-model="posts.job_type"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="contect_form3">
                          <input
                            type="text"
                            name="name"
                            placeholder="working hours....eg 40hrs/ week"
                            v-model="posts.working_hours"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="contect_form3">
                          <input
                            type="text"
                            name="name"
                            placeholder="salary range"
                            v-model="posts.salary"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="contect_form3">
                          <input
                            type="text"
                            name="name"
                            placeholder="Year(s) of experience"
                            v-model="posts.experience"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="mb-4">
                          <h5 class="text-color text-center mt-3 mb-3">
                            write something about the job
                          </h5>
                          <textarea
                            placeholder="Job Description"
                            class="form-control"
                            rows="3"
                            v-model="posts.job_description"
                          ></textarea>
                        </div>
                      </div>
                      <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="contect_form3">
                          <input
                            type="text"
                            name="name"
                            placeholder="Type Keywords.... eg'ui designer, doctor'"
                          />
                        </div>
                        <div class="jb_btm_keyword jb_cover">
                          <ul>
                            <li>
                              <i class="flaticon-tag"></i> Trending Keywords :
                            </li>
                            <li><a href="#">ui designer,</a></li>
                            <li><a href="#">developer,</a></li>
                            <li><a href="#">senior</a></li>
                            <li><a href="#">it company,</a></li>
                            <li><a href="#">design,</a></li>
                            <li><a href="#">call center</a></li>
                          </ul>
                        </div>
                      </div> -->
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <h5 class="text-color text-center mt-3 mb-3">
                          Job Location
                        </h5>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="contect_form3">
                          <input
                            type="text"
                            name="name"
                            placeholder="Country"
                            v-model="posts.country"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="contect_form3">
                          <input
                            type="text"
                            name="name"
                            v-model="posts.city"
                            placeholder="City"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="contect_form3">
                          <textarea
                            placeholder="Full Address"
                            class="form-control"
                            rows="3"
                            v-model="posts.address"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <h5 class="text-color text-center mt-3 mb-3">
                          Requirements
                        </h5>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="contect_form3">
                          <input
                            type="text"
                            name="name"
                            v-model="posts.age"
                            placeholder="age range... eg 24-36"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="contect_form3">
                          <input
                            type="text"
                            name="name"
                            v-model="posts.educational_level"
                            placeholder="educational level.... BSc, HND, PHd"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="contect_form3">
                          <input
                            type="text"
                            name="name"
                            v-model="posts.specific_qualificaion"
                            placeholder="specific qualificaions"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                        <label class="typo__label">Groups</label>
                        <multiselect
                          v-model="value"
                          tag-placeholder="Add this as new skill"
                          placeholder="Add Special Skills"
                          group-values="libs"
                          group-label="language"
                          :group-select="true"
                          label="name"
                          track-by="name"
                          :options="options"
                          :multiple="true"
                          :taggable="true"
                          @tag="addTag"
                        >
                          <span slot="noResult"
                            >Oops! Consider changing the search query or add
                            skills.</span
                          >
                        </multiselect>
                      </div>
                      <div class="mt-4 header_btn search_btn applt_pop_btn">
                        <a @click.prevent="PostJob" href="#">save & preview</a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="job_filter_category_sidebar jb_cover">
                    <div class="job_filter_sidebar_heading jb_cover">
                      <h1>address / location</h1>
                    </div>
                    <div class="job_overview_header jb_cover">
                      <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div class="map_wrapper jb_cover">
                            <div id="map"></div>
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
  </div>
</template>

<script>
// import VueFroala from "vue-froala-wysiwyg";
// import { VueEditor } from "vue2-editor";
import Looking from "@/components/Looking.vue";
import Footer from "@/components/Footer.vue";
import Multiselect from "vue-multiselect";
import ChatBox from "@/components/ChatBox.vue";
import DashboardHeader from "@/components/DashboardHeader.vue";
import CompanyDashboardSideBar from "@/components/CompanyDashboardSideBar.vue";
// import Avatar from "vue-avatar";
import axios from "axios";
export default {
  name: "EditProfile",
  data: function () {
    return {
      config: {
        events: {
          initialized: function () {
            console.log("initialized");
          },
        },
      },
      options: [
        {
          language: "Office and Administrative Skills",
          libs: [
            { name: "Data Entry", category: "Data Entry" },
            {
              name: "Microsoft Office",
              category: "Microsoft Office",
            },
            {
              name: "Operating Office Equipment",
              category: "Office Equipment",
            },
            { name: "Welcoming Visitors", category: "Welcoming Visitors" },
            { name: "Salesforce", category: "Salesforce" },
            {
              name: "Calendar Management Skills",
              category: "Calendar Management",
            },
          ],
        },
        {
          language: "IT Skills",
          libs: [
            {
              name: "Programming Languages",
              category: "Programming Languages",
            },
            { name: "Web Development", category: "Web Development" },
            { name: "Data Structures", category: "Data Structures" },
            {
              name: "Open Source Experience",
              category: "Open Source Experience",
            },
            { name: "CodingJava Script", category: "CodingJava Script" },
            { name: "Security", category: "Security" },
            { name: "Machine Learning", category: "Machine Learning" },
            { name: "Debugging", category: "Debugging" },
            { name: "UX/UI", category: "UX/UI" },
            {
              name: "Front-End Development",
              category: "Front-End Development",
            },
            { name: "Back-End Development", category: "Back-End Development" },
            { name: "Cloud Management", category: "Cloud Management" },
            { name: "Agile Development", category: "Agile Development" },
          ],
        },
        {
          language: "Nursing and Healthcare Skills",
          libs: [
            {
              name: "General Nursing Skills",
              category: "General Nursing Skills",
            },
            { name: "Patient Assessment", category: "Patient Assessment" },
            { name: "Taking Vital Signs", category: "Taking Vital Signs" },
            { name: "Patient Care", category: "Patient Care" },
            {
              name: "Recording Patient Medical History",
              category: "Recording Patient Medical History",
            },
            {
              name: "Wound Dressing and Care",
              category: "Wound Dressing and Care",
            },
            {
              name: "Urgent and Emergency Care",
              category: "Urgent and Emergency Care",
            },
            { name: "Record-Keeping", category: "Record-Keeping" },
            { name: "Patient Education", category: "Patient Education" },
            {
              name: "NIH Stroke Scale Patient Assessment",
              category: "NIH Stroke Scale Patient Assessment",
            },
            { name: "Electronic Medical Record (EMR)", category: "EMR" },
            {
              name: "Medicine Administration",
              category: "Medicine Administration",
            },
            {
              name: "Blood Pressure Monitoring",
              category: "Blood Pressure Monitoring",
            },
            { name: "Phlebotomy", category: "Phlebotomy" },
            {
              name: "Rehabilitation Therapy",
              category: "Rehabilitation Therapy",
            },
            { name: "Hygiene Assistance", category: "Hygiene Assistance" },
            {
              name: "Use of X-Ray, MRI, CAT Scans",
              category: "Use of X-Ray, MRI, CAT Scans",
            },
            { name: "Meditech", category: "Meditech" },
            { name: "Glucose Checks", category: "Glucose Checks" },
            { name: "Electronic Heart Record (EHR)", category: "EHR" },
          ],
        },
        {
          language: "Sales, Retail, and Customer Service Skills ",
          libs: [
            { name: "Product Knowledge", category: "Product Knowledge" },
            { name: "Lead Qualification", category: "Lead Qualification" },
            { name: "Lead Prospecting ", category: "Lead Prospecting" },
            {
              name: "Customer Needs Analysis",
              category: "Customer Needs Analysis",
            },
            { name: "Referral Marketing", category: "Referral Marketing" },
            { name: "Contract Negotiation", category: "Contract Negotiation" },
            { name: "Self Motivation", category: "Self Motivation" },
            {
              name: "Increasing Customer Lifetime Value (CLV)",
              category: "CLV",
            },
            {
              name: "Reducing Customer Acquisition Cost (CAC)",
              category: "CAC",
            },
            {
              name: "CRM Software (Salesforce, Hubspot, Zoho, Freshsales)",
              category: "CRM",
            },
            { name: "POS Skills", category: "POS Skills" },
            { name: "Cashier Skills", category: "Cashier Skills" },
            {
              name: "Good Communication Skills",
              category: "Good Communication Skills",
            },
          ],
        },
        {
          language: "Engineering & Technical Skills",
          libs: [
            { name: "STEM Skills", category: "STEM Skills" },
            { name: "CAD", category: "CAD" },
            { name: "Design", category: "Design" },
            { name: "Prototyping", category: "Prototyping" },
            { name: "Testing", category: "Testing" },
            { name: "Troubleshooting", category: "Troubleshooting" },
            { name: "Lean Manufacturing", category: "Lean Manufacturing" },
            { name: "Workflow Development", category: "Workflow Development" },
            { name: "Computer Skills", category: "Computer Skills" },
            { name: "Budgeting Skills", category: "Budgeting" },
            { name: "Technical Report Writing Skills", category: "TRWS" },
          ],
        },
      ],
      value: [],
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
        address: "",
      },
      model: [],
      posts: {
        category: "",
        job_title: "",
        job_type: "",
        working_hours: "",
        country: "",
        address: "",
        educational_level: "",
        salary: "",
        specific_qualificaion: "",
        age: "",
        skills: "",
        experience: "",
      },
    };
  },
  components: {
    Looking,
    DashboardHeader,
    Footer,
    CompanyDashboardSideBar,
    // VueEditor,
    // Avatar,
    Multiselect,
    ChatBox,
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    PostJob() {
      if (this.posts.job_title == "") {
        this.$toasted.error("Please Fill Job Title");
        return false;
      }
      if (this.posts.job_type == "") {
        this.$toasted.error("Please Fill Job Type");
        return false;
      }
      if (this.posts.working_hours == "") {
        this.$toasted.error("Please Fill Working Hours");
        return false;
      }
      if (this.posts.country == "") {
        this.$toasted.error("Please Fill Country");
        return false;
      }
      if (this.posts.address == "") {
        this.$toasted.error("Please Fill Your Address");
        return false;
      }
      if (this.posts.job_description == "") {
        this.$toasted.error("Please Fill Your Job description");
        return false;
      }
      if (this.posts.salary == "") {
        this.$toasted.error("Please Fill Salary");
        return false;
      }
      if (this.posts.experience == "") {
        this.$toasted.error("Please Fill");
        return false;
      }
      this.$router.push("/preview");
    },
  },
  created() {
    var accessToken = localStorage.getItem("token") || "";
    const headers = {
      Authorization: "Bearer " + accessToken,
      "My-Custom-Header": "Register step 2",
    };
    axios
      .get("", {
        headers,
      })
      .then((response) => {
        console.log(response);
        this.companys.name = response.data.name;
        this.companys.email = response.data.email;
        this.companys.category = response.data.category;
        this.companys.email = response.data.email;
        this.companys.phone_number = response.data.phone_number;
        this.companys.website = response.data.website;
        this.companys.job_description = response.data.job_description;
        this.companys.country = response.data.country;
        this.companys.state = response.data.state;
        this.companys.address = response.data.address;
        this.companys.city = response.data.city;
      })
      .catch((error) => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
@media (max-width: 10000px) {
  .avatar_center {
    margin-left: 10px !important;
    box-sizing: border-box !important;
  }
}
@media (max-width: 1195px) {
  .avatar_center {
    margin-left: -15% !important;
    box-sizing: border-box !important;
  }
}
@media (max-width: 991px) {
  .avatar_center {
    margin-left: 34% !important;
    box-sizing: border-box !important;
  }
}
@media (max-width: 765px) {
  .avatar_center {
    margin-left: 27% !important;
    box-sizing: border-box !important;
  }
}
.text-color {
  color: #990066 !important;
}
</style>
