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
          <CompanyDashboardSideBar :comp="company" />
          <div class="col-lg-9 col-md-12 col-sm-12 col-12">
            <!-- <Chat /> -->
            <div class="dashboard-message-wrapper">
              <!-- <div class="message-lists">
                <form action="#" class="message-search">
                  <div>
                    <Select2
                      v-model="myValue"
                      :options="myOptions"
                      :settings="{ settingOption: value, settingOption: value }"
                      @change="myChangeEvent($event)"
                      @select="mySelectEvent($event)"
                    />
                    <p>Value: {{ myValue }}</p>
                  </div>
                </form>
                <ul v-for="(myoption, opt) in myOptions" :key="opt">
                  <li>
                    <a href="#" class="message-single">
                      <avatar
                        :username="companys.email"
                        :size="30"
                        :rounded="true"
                      >
                      </avatar>
                      <div class="body">
                        <h6 class="username">Carlos {{ companys.name }}</h6>
                        <span class="text-number">
                          16 min {{ companys.time_sent }}</span
                        >
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="message-single active">
                      <div class="thumb">
                        <avatar
                          :username="companys.email"
                          :size="30"
                          :rounded="true"
                        >
                        </avatar>
                      </div>
                      <div class="body">
                        <h6 class="username">Carlos</h6>
                        <span class="text-number">16 min</span>
                      </div>
                    </a>
                  </li>
                </ul>

                <a href="#" class="message-single">
                  <div class="thumb">
                    <img src="images/rc2.png" class="img-fluid" alt="" />
                  </div>
                  <div class="body">
                    <h6 class="username">Paul Cox</h6>
                    <span class="send-time">22 min</span>
                  </div>
                </a>
                <a href="#" class="message-single active">
                  <div class="thumb">
                    <img src="images/rc3.png" class="img-fluid" alt="" />
                  </div>
                  <div class="body">
                    <h6 class="username">Carlos</h6>
                    <span class="text-number">16 min</span>
                  </div>
                </a>
                <a href="#" class="message-single">
                  <div class="thumb">
                    <img src="images/rc4.png" class="img-fluid" alt="" />
                  </div>
                  <div class="body">
                    <h6 class="username">Dahlia</h6>
                    <span class="send-time">45 min</span>
                  </div>
                </a>
                <a href="#" class="message-single">
                  <div class="thumb">
                    <img src="images/rs5.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="body">
                    <h6 class="username">Nathan</h6>
                    <span class="send-time">45 min</span>
                  </div>
                </a>
                <a href="#" class="message-single">
                  <div class="thumb">
                    <img src="images/rs4.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="body">
                    <h6 class="username">nicloss</h6>
                    <span class="send-time">26 min</span>
                  </div>
                </a>
              </div> -->
              <div class="message-box">
                <div class="message-box-header">
                  <h5>Admin</h5>
                  <!-- <div class="navbar navbar-expand-sm drop">
                    <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          id="navbardrop1"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="fa fa-ellipsis-h"></i>
                        </a>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="#"
                            ><i class="fa fa-link"></i>&nbsp;&nbsp;Copy this
                            link</a
                          >
                          <a class="dropdown-item" href="#"
                            ><i class="fa fa-tag"></i>&nbsp;&nbsp;Report</a
                          >
                          <a class="dropdown-item" href="#"
                            ><i class="fa fa-flag"></i>&nbsp;&nbsp;Hide</a
                          >
                        </div>
                      </li>
                    </ul>
                  </div> -->
                </div>
                <ul class="dashboard-conversation">
                  <li class="conversation out">
                    <div class="avater">
                      <img src="images/rc1.png" class="img-fluid" alt="" />
                    </div>
                    <div class="">
                      <p class="reciever">
                        This is Photoshop's version of Lom Ipsum. Proin gravida
                        nibh vel velit auctor aliquet. Aenean sollicitudin,
                        lorem quis This is Photoshop's version of Lom Ipsum.
                        Proin gravida nibh vel velit auctor aliquet. Aenean
                        sollicitudin, lorem quis This is Photoshop's version of
                        Lom Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis This is Photoshop's
                        version of Lom Ipsum. Proin gravida nibh vel velit
                        auctor aliquet. Aenean sollicitudin, lorem quis
                      </p>
                    </div>
                    <span class="send-time">2.34 am</span>
                  </li>
                  <li class="conversation in">
                    <div class="">
                      <p class="sender">
                        This is Photoshop's version of Lom Ipsum. Proin gravida
                        nibh vel velit auctor aliquet. Aenean sollicitudin,
                        lorem quis This is Photoshop's version of Lom Ipsum.
                        Proin gravida nibh vel velit auctor aliquet. Aenean
                        sollicitudin, lorem quis This is Photoshop's version of
                        Lom Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis This is Photoshop's
                        version of Lom Ipsum. Proin gravida nibh vel velit
                        auctor aliquet. Aenean sollicitudin, lorem quis
                      </p>
                    </div>
                    <span class="send-time">2.34 am</span>
                  </li>
                </ul>
                <div class="conversation-write-wrap">
                  <form action="#">
                    <froala
                      id="edit"
                      :tag="'textarea'"
                      :config="config"
                      v-model="model"
                    ></froala>
                    <button class="send-message">
                      <i class="fas fa-location-arrow"></i>
                    </button>
                  </form>
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
// import Chat from "@/components/Chat.vue";
import Looking from "@/components/Looking.vue";
import Footer from "@/components/Footer.vue";
import DashboardHeader from "@/components/DashboardHeader.vue";
import ChatBox from "@/components/ChatBox.vue";
// import VueFroala from 'vue-froala-wysiwyg';
// import Select2 from "v-select2-component";
// import Avatar from "vue-avatar";
import CompanyDashboardSideBar from "@/components/CompanyDashboardSideBar.vue";
export default {
  name: "EditProfile",
  data: function() {
    return {
      config: {
        events: {
          initialized: function() {
            console.log("initialized");
          }
        }
      },
      model: {},
      company: this.$store.getters.StateCompanyDetails ?? "",
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
        experience: ""
      }
    };
  },
  methods: {
    myChangeEvent(val) {
      console.log(val);
    },
    mySelectEvent({ id, text }) {
      console.log({ id, text });
    }
  },
  components: {
    Looking,
    Footer,
    DashboardHeader,
    // Select2,
    // Avatar,
    ChatBox,
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
.sender {
  background: #990066;
  color: white;
  border-radius: 10px;
  padding: 10px;
  font-weight: 300;
}
.reciever {
  /* background: rgb(243, 243, 243); */
  color: #990066;
  border-radius: 10px;
  border: 1px dotted rgb(115, 115, 214);
  padding: 10px;
}
</style>
