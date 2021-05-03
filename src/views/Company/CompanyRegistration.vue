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
          rules="required"
          v-slot="{ errors }"
        >
          <div class="form-group icon_form comments_form">
            <input
              type="text"
              class="form-control require"
              placeholder="Company's Name*"
              required
              v-model="company.name"
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
              class="form-control require"
              required
              autocomplete="email"
              autofocus
              placeholder="Email Address*"
              v-model="company.email"
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
              v-model="company.reg_number"
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
              v-model="company.contact_number"
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
              v-model="company.website"
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
              class="form-control require"
              required
              autofocus
              placeholder="Company's Address*"
              v-model="company.address"
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
                class="form-control"
                placeholder="Password * ex. letters and numbers are compulsory"
                v-model="company.password"
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
                class="form-control short"
                placeholder="Confirm Password *"
                v-model="company.password_confirmation"
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
        <!--<div class="select_dropdown">
          <multiselect
            v-model="company.category"
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
        </div>-->
        <br />
        <div class="jb_newslwtteter_button">
          <div class="header_btn search_btn news_btn jb_cover">
            <button
              class="col-12"
              @click="registercompany"
              type="submit"
              :disabled="spin"
            >
              <span v-if="notSpin">submit</span
              ><i v-if="spin" class="fa fa-spinner fa-spin"></i>
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
// import Multiselect from "vue-multiselect";
// import axios from "axios";
// import Timer from "@/components/Timer.vue";
// import MainNavigation from "@/components/MainNavigation.vue";
// import Navigation from "@/components/Navigation.vue";
export default {
  name: "SignUpDiv",
  components: {
    // ChatBox,
    // Multiselect
    // Timer
    // Navigation,
    // MainNavigation
  },
  data: function() {
    return {
      showPassword: false,
      spin: false,
      notSpin: true,
      showConfirmPassword: false,
      regResponse: 0,
      options: this.$store.getters.StateJobCategories ?? [],
      company: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        sector: "",
        address: "",
        reg_number: "",
        contact_number: "",
        category: "",
        website: "",
        user_type: "company"
      },
      isHidden: true,
      successResponse: false,
      beforeResponse: false,
      onLine: navigator.onLine,
      showBackOnline: false,
      agreeSelected: ""
    };
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
        user_defined: 1
      };
      this.options.push(tag);

      this.$store
        .dispatch("AddJobCategory", tag)
        .then(response => {
          this.company.category.push(response.data.job_category);
          if (response.data.existed == 1) {
            this.$toasted.success("You can use the added category now");
          } else {
            this.$toasted.success("You successfully added new category");
          }
        })
        .catch(error => {
          this.handleAxiosErrors(error);
        });
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
      this.spin = true;
      this.notSpin = false;

      if (this.company.name == "") {
        this.$toasted.error("Please Fill Company's Name");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (!this.validateEmail(this.company.email)) {
        this.$toasted.error("Please enter a valid Email");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.company.email == "") {
        this.$toasted.error("Please Fill Company's Email");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.company.address == "") {
        this.$toasted.error("Please Fill Company's Address");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.company.password == "") {
        this.$toasted.error("Please Fill Password");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.company.password_confirmation == "") {
        this.$toasted.error("Please Fill Confirm Password");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.company.password !== this.company.password_confirmation) {
        this.$toasted.error("Password and Confirm Password does not Match");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      // if (this.company.category.length < 1) {
      //   this.$toasted.error("please pick a category");
      //   this.spin = false;
      //   this.notSpin = true;
      //   return false;
      // }
      // if (!this.onLine) {
      //   this.$toasted.error("Please check your internet connection");
      //   this.spin = false;
      //   this.notSpin = true;
      //   return false;
      // }

      this.beforeResponse = true;

      this.$store
        .dispatch("RegisterCompany", {
          details: this.company
        })
        .then(() => {
          this.$toasted.success("Your registration is successful");
          this.$router.push({ name: "EmployerDashboard" });
        })
        .catch(error => {
          this.spin = false;
          this.notSpin = true;
          this.handleAxiosErrors(error);
        });
    }
  },
  mounted() {
    // window.addEventListener("online", this.updateOnlineStatus);
    // window.addEventListener("offline", this.updateOnlineStatus);
  },
  watch: {
    onLine(v) {
      if (v) {
        this.showBackOnline = true;
        setTimeout(() => {
          this.showBackOnline = false;
        }, 1000);
      }
    },

    beforeResponse() {
      if (this.beforeResponse) {
        this.$toasted.info("Your form is being submitted, please wait");
      }
    },

    successResponse() {
      if (this.successResponse == 200) {
        this.$toasted.success("Your registration is successfull");
        this.step++;
        this.successResponse = false;
        this.beforeResponse = false;
      }
    }
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
