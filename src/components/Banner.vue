<template>
  <div>
    <div class="jb_banner_wrapper jb_cover">
      <div class="jb_banner_left">
        <h1>The Easy Way To Get Your New Job</h1>
        <p>Land your next job with ease and at your convenience.</p>
        <div class="contect_form3">
          <input
            type="text"
            name="Jobtitle"
            v-model="searchJob.job_title"
            placeholder="Keyword e.g. (Job Title, Description, Tags)"
          />
        </div>
        <div class="select_box">
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
        <div class="contect_form3">
          <input
            type="text"
            name="location"
            placeholder="Location"
            v-model="searchJob.location"
          />
        </div>

        <div class="select_box">
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

        <div class="header_btn search_btn jb_cover">
          <a @click.prevent="search" href="#"
            ><i class="fas fa-search"></i> search</a
          >
        </div>
        <div class="jb_btm_keyword">
          <ul>
            <li><i class="flaticon-tag"></i> Trending Keywords :</li>
            <li><a href="#">software developer,</a></li>
            <li><a href="#">ui designer,</a></li>
            <li><a href="#">marketer</a></li>
            <li><a href="#">it company,</a></li>
            <li><a href="#">accountant,</a></li>
            <li><a href="#">call center</a></li>
          </ul>
        </div>
      </div>
      <div
        class="jb_banner_right d-none d-sm-none d-md-none d-lg-none d-xl-block"
      >
        <div class="animation-circle-inverse"><i></i><i></i><i></i></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";
export default {
  name: "Banner",
  data: function() {
    return {
      jobResponse: 0,
      searchJob: {
        job_title: "",
        location: "",
        job_type: ""
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
        { name: "Utilities", code: "ut" }
      ]
    };
  },
  components: {
    Multiselect
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
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Fetch Available Jobs"
      };
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          data: request,
          headers: headers
        })
        .then(response => {
          console.log(response);
          this.index + 1;
          this.jobResponse = response.status;
          this.availableJobs = response.data;
          this.$router.push("/jobList");
        })
        .catch(error => {
          console.log("Failed to fetch Available Jobs " + error.message);
        });
    },
    created: function() {
      this.search();
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped></style>
