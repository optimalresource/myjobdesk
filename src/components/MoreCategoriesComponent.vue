<template>
  <div>
    <MainNavigation />
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
        <div>
          <multiselect
            v-model="category"
            :options="options"
            :multiple="true"
            :close-on-select="false"
            :clear-on-select="false"
            :preserve-search="true"
            placeholder="Pick some"
            label="name"
            track-by="language"
            :preselect-first="false"
          >
          </multiselect>
        </div>
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
    <div class="jb_category_wrapper jb_cover">
      <div class="container">
        <div class="row">
          <div
            v-for="(category, index) in categories"
            :key="index"
            class="col-lg-3 col-md-6 col-sm-12"
          >
            <div class="jb_browse_category jb_cover">
              <a @click.prevent="showCategory" href="#">
                <div class="hover-block"></div>
                <i class="fas fa-money-check-alt"></i>
                <h3>{{ category.title }}</h3>
                <p>({{ category.id }} jobs)</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      catgories: [],
      searchJob: {
        job_title: "",
        location: "",
        job_type: ""
      },
      categories: [],
      category: [],
      value: [],
      options: [
        { name: "​Construction/ Real Estate", language: "Re|Co" },
        { name: "​​Consumer Goods", language: "go" },
        { name: "Financial Services", language: "fi" },
        { name: "​Healthcare", language: "he" },
        { name: "​Information & Communications Technology", language: "it" },
        { name: "​Natural Resources", language: "na" },
        { name: "​​​Oil & Gas", language: "oi" },
        { name: "Services", language: "se" },
        { name: "Conglomerates", language: "se" },
        { name: "Utilities", language: "ut" }
      ]
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
    search: function() {
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Fetch Available Jobs"
      };
      axios
        .get("https://jsonplaceholder.typicode.com/todos", {
          headers: headers
        })
        .then(response => {
          console.log(response);
          this.categories = response.data;
        })
        .catch(error => {
          console.log("Failed to fetch Available Jobs " + error.message);
        });
    }
  },
  created: function() {
    this.search();
  },
  components: {
    MainNavigation,
    Multiselect
  }
};
</script>
<style scoped>
.search_div {
  background: rgb(243, 243, 243);
  border-radius: 4px;
  padding: 15px;
}
.keywords-tags {
  display: inline-block;
}
</style>
