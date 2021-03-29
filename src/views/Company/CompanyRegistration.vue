<template>
  <div>
    <div class="cursor"></div>

    <a href="javascript:" id="return-to-top"
      ><i class="fas fa-angle-double-up"></i
    ></a>
    <div class="company_registration mb-5">
      <h4 class="text-center mb-3">Company Registration</h4>
      <div class="container">
        <ValidationProvider
          name="Company Name"
          rules="required|alpha"
          v-slot="{ errors }"
        >
          <div class="form-group icon_form comments_form">
            <input
              type="text"
              class="form-control require"
              placeholder="Company's Name*"
              required
              v-model="companys.name"
            />
            <i class="fas fa-user"></i>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          name="Company Email"
          rules="required|email"
          v-slot="{ errors }"
        >
          <div class="form-group icon_form comments_form">
            <input
              id="email"
              type="email"
              class="form-control  require"
              required
              autocomplete="email"
              autofocus
              placeholder="Email Address*"
              v-model="companys.email"
            />
            <i class="fas fa-envelope"></i>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="Company Regisration Number"
          v-slot="{ errors }"
        >
          <div class="form-group icon_form comments_form">
            <input
              type="text"
              class="form-control"
              placeholder="Company's Reg Number*"
              required
              v-model="companys.reg_number"
            />
            <i class="fas fa-registered"></i>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="Company's Contact Number'"
          v-slot="{ errors }"
        >
          <div class="form-group icon_form comments_form">
            <input
              type="text"
              class="form-control"
              placeholder="Contact Number*"
              required
              v-model="companys.contact_number"
            />
            <i class="fas fa-phone-volume"></i>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider name="Company's Website" v-slot="{ errors }">
          <div class="form-group icon_form comments_form">
            <input
              type="text"
              class="form-control"
              placeholder="Contact website*"
              required
              v-model="companys.website"
            />
            <i class="fas fa-globe"></i>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          name="Company Address"
          rules="required"
          v-slot="{ errors }"
        >
          <div class="form-group icon_form comments_form">
            <textarea
              class="form-control  require"
              required
              autofocus
              placeholder="Company's Address*"
              v-model="companys.address"
            >
            </textarea>
            <i class="fas fa-map-marker-alt"></i>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationObserver>
          <ValidationProvider
            :rules="{
              required: true,
              regex: /^(?=.*\d)(?=.*[a-zA-Z]).{6,100}$/,
              confirmed: 'confirmation'
            }"
            v-slot="{ errors }"
            name="Password"
          >
            <div class="form-group icon_form comments_form input-group">
              <input
                v-bind:type="[showPassword ? 'text' : 'password']"
                id="Company Password"
                class="form-control "
                placeholder="Password * ex. letters and numbers are compulsory"
                v-model="companys.password"
              />
              <div class="input-group-append">
                <span
                  class="input-group-text"
                  @click="showPassword = !showPassword"
                >
                  <i
                    class="fa"
                    :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
            </div>
            <div id="blk">{{ errors[0] }}</div>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            vid="confirmation"
            name="Confirm Password"
          >
            <div class="form-group icon_form comments_form input-group">
              <input
                v-bind:type="[showConfirmPassword ? 'text' : 'password']"
                id="company_confirm-password"
                required
                class="form-control short "
                placeholder="Confirm Password *"
                v-model="companys.password_confirmation"
              />
              <div class="input-group-append">
                <span
                  class="input-group-text"
                  @click="showConfirmPassword = !showConfirmPassword"
                >
                  <i
                    class="fa"
                    :class="[showConfirmPassword ? 'fa-eye' : 'fa-eye-slash']"
                    aria-hidden="true"
                  ></i>
                </span>
                <div></div>
              </div>
            </div>
            <div id="blk">{{ errors[0] }}</div>
          </ValidationProvider>
        </ValidationObserver>
        <div class="select_dropdown">
          <multiselect
            v-model="companys.category"
            tag-placeholder="Add this as new Category"
            placeholder="Add a Sector"
            label="name"
            track-by="code"
            :options="options"
            :multiple="true"
            :taggable="true"
            @tag="addTag"
            tag-position="auto"
          ></multiselect>
        </div>
        <br />
        <div class="jb_newslwtteter_button">
          <div class="header_btn search_btn news_btn jb_cover">
            <button class="col-12" @click="registercompany" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="chat-circle" class="btn btn-raised">
      <i class="fas fa-comment-alt"></i>
    </div>

    <!-- <ChatBox /> -->
  </div>
</template>

<script>
// import ChatBox from "@/components/ChatBox.vue";
import Multiselect from "vue-multiselect";
import axios from "axios";
// import Timer from "@/components/Timer.vue";
// import MainNavigation from "@/components/MainNavigation.vue";
// import Navigation from "@/components/Navigation.vue";
export default {
  name: "SignUpDiv",
  components: {
    // ChatBox,
    Multiselect
    // Timer
    // Navigation,
    // MainNavigation
  },
  data: function() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      regResponse: 0,
      options: [
        { name: "​Construction/ Real Estate", code: "Re|Co" },
        { name: "​​Consumer Goods", code: "go" },
        { name: "Financial Services", code: "fi" },
        { name: "​Healthcare", code: "he" },
        { name: "​Information & Communications Technology", code: "it" },
        { name: "​Natural Resources", code: "na" },
        { name: "​​​Oil & Gas", code: "oi" },
        { name: "Services", code: "se" },
        { name: "Conglomerates", code: "se" },
        { name: "Utilities", code: "ut" }
      ],
      companys: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        sector: "",
        address: "",
        reg_number: "",
        contact_number: "",
        category: "",
        website: ""
        // reg_number: ""
      }
    };
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.options.push(tag);
      this.category.push(tag);
    },
    updateOnlineStatus(e) {
      const { type } = e;
      this.onLine = type === "online";
    },
    validateEmail(email) {
      const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
      return re.test(email);
    },
    registercompany() {
      if (this.companys.name == "") {
        this.$toastr.e("Please Fill Company's Name");
        return false;
      }
      if (!this.validateEmail(this.companys.email)) {
        this.$toastr.e("Please enter a valid Email");
        return false;
      }
      if (this.companys.email == "") {
        this.$toastr.e("Please Fill Company's Email");
        return false;
      }
      if (this.companys.address == "") {
        this.$toastr.e("Please Fill Company's Address");
        return false;
      }
      if (this.companys.password == "") {
        this.$toastr.e("Please Fill Password");
        return false;
      }
      if (this.companys.password_confirmation == "") {
        this.$toastr.e("Please Fill Confirm Password");
        return false;
      }
      if (this.companys.password !== this.inputs.password_confirmation) {
        this.$toastr.e("Password and Confirm Password does not Match");
        return false;
      }
      if (this.companys.category.length < 1) {
        this.$toastr.e("please pick a category");
        return false;
      }
      if (!this.onLine) {
        this.$toastr.e("Please check your internet connection");
        return false;
      }
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Submitting Company's Details",
        "Content-Type": "application/json"
      };
      axios
        .post("#", this.companys, {
          headers
        })

        .then(response => {
          console.log(this.companys);
          console.log(response);
          this.regResponse = response.status;
          if (response.status == "200") {
            this.$toastr.s("Account Created");
            this.$router.push("/employerDashboard");
          } else {
            this.$toastr.e(
              "Oops, something went wrong, please try again later"
            );
            return false;
          }
          const token = response.data.accessToken;
          localStorage.setItem("token", token);
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.log(error);
        });
      // return true;
    }
  },
  mounted() {
    window.addEventListener("online", this.updateOnlineStatus);
    window.addEventListener("offline", this.updateOnlineStatus);
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.company_registration {
  padding: 20px 300px;
  /* margin:; */
  margin-top: 10px;
  width: 100%;
}
@media (max-width: 1125px) {
  .company_registration {
    padding: 30px 150px;
  }
}
@media (max-width: 797px) {
  .company_registration {
    padding: 30px 75px;
  }
}
@media (max-width: 526px) {
  .company_registration {
    padding: 30px 35px;
  }
}
@media (max-width: 445px) {
  .company_registration {
    padding: 30px 15px;
  }
}
@media (max-width: 405px) {
  .company_registration {
    padding: 30px 7px;
  }
}
@media (max-width: 389px) {
  .company_registration {
    padding: 30px 3.5px;
  }
}
@media (max-width: 383px) {
  .company_registration {
    padding: 30px 1px;
  }
}
@media (max-width: 286px) {
  .company_registration {
    padding: 30px 0px;
  }
}
h4 {
  color: #990066;
}
</style>
