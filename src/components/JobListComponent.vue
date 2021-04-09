<template>
  <div>
    <MainNavigation />
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="row search_div">
          <!--  -->
          <div class="col-lg-3 col-md-12 col-sm-12 mt-2">
            <input
              type="text"
              name="Jobtitle"
              v-model="searchJob.job_title"
              class="form-control "
              placeholder="Keyword e.g. (Job Title, Description, Tags)"
            />
          </div>
          <div class="col-lg-2 col-md-12 col-sm-12 mt-2">
            <input
              class="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Job Type"
              required
              v-model="searchJob.job_type"
            />
            <datalist id="datalistOptions">
              <option value="Graduate Trainee"> </option>
              <option value="Full time"> </option>
              <option value="Part-time"> </option>
              <option value="Weekends"> </option>
              <option value="Remotely"> </option>
            </datalist>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-12 mt-2">
            <input
              type="text"
              name="location"
              class="form-control"
              placeholder="Location"
              v-model="searchJob.location"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 mt-2 ">
            <multiselect
              v-model="category"
              tag-placeholder="Add this as new category"
              placeholder="Search or add a category"
              label="name"
              track-by="code"
              :options="options"
              :multiple="true"
              :taggable="true"
              @tag="addTag"
              tag-position="top"
            ></multiselect>
          </div>
          <div
            class=" col-lg-2 col-md-12 col-sm-12 mt-2 header_btn search_btn jb_cover mb-2"
          >
            <a @click.prevent="search" href="#"
              ><i class="fas fa-search"></i> search</a
            >
          </div>
          <ul class="ml-3">
            <li class="keywords-tags mr-2">
              <i class="flaticon-tag"></i> Trending Keywords :
            </li>
            <li class="keywords-tags mr-2">
              <a href="#">software developer,</a>
            </li>
            <li class="keywords-tags mr-2"><a href="#">ui designer,</a></li>
            <li class="keywords-tags mr-2"><a href="#">marketer</a></li>
            <li class="keywords-tags mr-2"><a href="#">it company,</a></li>
            <li class="keywords-tags mr-2"><a href="#">accountant,</a></li>
            <li class="keywords-tags mr-2"><a href="#">call center...</a></li>
          </ul>
        </div>
      </div>
    </div>

    <h5 class="text-center mt-2">Jobs Available</h5>
    <ul v-for="(availableJob, index) in availableJobs" :key="index" class="p-3">
      <li class="job_available_div">
        <button class="btn bttn float-right mt-1">
          Apply
        </button>
        <h5 class="mt-1 text-info mr-2">
          <strong>{{ availableJob.title }}</strong>
        </h5>
        <h6></h6>
        <p class="mt-1">
          <strong>Location</strong>:
          {{ availableJob.body }}
        </p>
        <p class="mt-1"><strong>Job Type</strong>:</p>
        <p class="mt-1">
          <strong>Min- Qualification</strong>:
          {{ availableJob.title }}
        </p>
      </li>
    </ul>
    <!-- <div class="header_btn search_btn load_btn jb_cover">
      <a href="#">load more</a>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";
import MainNavigation from "@/components/MainNavigation.vue";
export default {
  name: "JobListComponent",
  data: function() {
    return {
      availableJobs: [],
      searchJob: {
        job_title: "",
        location: "",
        job_type: "",
      },
      category: [],
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
        { name: "Utilities", code: "ut" },
      ],
    };
  },
  components: {
    Multiselect,
    MainNavigation,
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.category.push(tag);
    },
    search: function() {
      if (this.searchJob.job_title == "") {
        this.$toasted.error("Please Fill a Job Title");
        return false;
      }
      if (this.searchJob.location == "") {
        this.$toasted.error("Please Fill location");
        return false;
      }
      if (this.searchJob.job_type == "") {
        this.$toasted.error("Please Fill Job type");
        return false;
      }
      var request = { category: [] };
      if (this.category.length < 1) {
        this.$toasted.error("please pick a category");
        return false;
      }
      for (let i = 0; i < this.category.length; i++) {
        request.category.push({ name: this.category[i].name });
      }
      // var accessToken = localStorage.getItem("token") || "";
      // const headers = {
      //   Authorization: "Bearer " + accessToken,
      //   "My-Custom-Header": "Submitting Seeker Categories",
      //   "Content-Type": "application/json",
      // };
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Fetch Available Jobs",
      };
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          data: request,
          headers: headers,
        })
        .then((response) => {
          console.log(response);
          this.index + 1;
          this.availableJobs = response.data;
        })
        .catch((error) => {
          console.log("Failed to fetch Available Jobs " + error.message);
        });
    },
  },
  created: function() {
    this.search();
  },
};
</script>

<style scoped>
.job_available_div {
  padding: 20px;
  border: 1px solid rgb(235, 235, 235);
  margin-top: 5px;
  box-sizing: border-box;
  word-wrap: break-word;
  border-radius: 4px;
}
.bttn {
  background: #990066;
  color: white;
}

@media (max-width: 991px) {
  .break {
    margin-top: 5px;
  }
}
.search_div {
  background: rgb(243, 243, 243);
  border-radius: 4px;
  padding: 15px;
}
.keywords-tags {
  display: inline-block;
}
</style>
