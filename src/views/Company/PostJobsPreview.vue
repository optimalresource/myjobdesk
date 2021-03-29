<template>
  <div>
    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="job_filter_category_sidebar pd0 jb_cover">
            <div class="job_filter_sidebar_heading jb_cover">
              <h1 class="text-center">Preview Section</h1>
            </div>
          </div>
          <div class="body">
            <h6>
              <span class="float-left">
                <avatar
                  class="img-responsive xs-col-12 sm-col-12 mb-2"
                  :username="companys.email"
                  :size="50"
                  :rounded="false"
                >
                </avatar>
              </span>
              &nbsp; This is the company's name and all {{ companys.name }}
            </h6>
            <div class="mt-5">
              ilhbvilaedhkbviukajdblivtk.jbadltuk.fhjbaelukrjhbfgfuij
            </div>
          </div>
          <div class="footer">
            <span class="col-lg-4 col-md-12 col-sm-12 col-12 hover"
              ><i class="fas fa-calendar-week"></i>
              {{ moment(new Date()).format("DD-MM-YYYY") }}
            </span>
            <span class="col-lg-4 col-md-12 col-sm-12 col-12 hover"
              ><i class="fas fa-users"></i> this will represent the company's
              name {{ companys.name }}</span
            >
            <span
              @click="back"
              class="col-lg-4 col-md-12 col-sm-12 col-12 hover last"
              ><i class="fas fa-edit"></i> Edit</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "vue-avatar";
import Vue from "vue";
import axios from "axios";
import moment from "moment";
Vue.prototype.moment = moment;
export default {
  name: "PostJobsPreview",
  data: function() {
    return {
      showBackOnline: false,
      companys: {
        name: "",
        email: "",
        category: "",
        phone_number: "",
        website: "",
        bio: "",
        address: ""
      },
      postResponse: 0,
      model: [],
      posts: {
        category: "",
        job_title: "",
        job_type: "",
        working_hours: "",
        country: "",
        address: "",
        salary: "",
        experience: ""
      }
    };
  },
  methods: {
    updateOnlineStatus(e) {
      const { type } = e;
      this.onLine = type === "online";
    },
    back() {
      if (!this.onLine) {
        this.$toastr.e("Please check your internet connection");
        return false;
      }
      this.$router.push("/companyPost");
    },
    SendPost() {
      var exp = {};
      exp.category = this.posts.category;
      exp.job_title = this.posts.job_title;
      exp.job_type = this.posts.job_type;
      exp.working_hours = this.posts.working_hours;
      exp.country = this.posts.country;
      exp.address = this.posts.address;
      exp.salary = this.posts.salary;
      exp.experience = this.posts.experience;
      exp.model = this.model;
      if (!this.onLine) {
        this.$toastr.e("Please check your internet connection");
        return false;
      }
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Submitting Job to be Posted "
      };
      axios
        .post("https://api.myjobdesk.com/api/experiences", exp, {
          headers
        })
        .then(response => {
          console.log(response);
          console.log(response.data);
          this.postResponse = response.status;
          if (response.status == "200") {
            this.$toastr.s("Job Posted");
            return true;
          } else {
            this.$toastr.e(
              "Oops, something went wrong, please try again later"
            );
            return false;
          }
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.log(error);
        });
    }
  },
  components: {
    Avatar
  },
  watch: {
    onLine(v) {
      if (v) {
        this.showBackOnline = true;
        setTimeout(() => {
          this.showBackOnline = false;
        }, 1000);
      }
    }
  }
};
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(223, 223, 223);
  color: rgb(99, 99, 99);
  text-align: center;
}
.last:hover {
  color: #990066;
  cursor: pointer;
}
</style>
