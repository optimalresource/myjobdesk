<template>
  <div>
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
            <div>
              <multiselect
                v-model="category"
                :options="options"
                :multiple="true"
                :close-on-select="false"
                :clear-on-select="false"
                :preserve-search="true"
                placeholder="Add Category"
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
      </div>
    </div>
    <div class="jb_category_wrapper jb_cover">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a @click.prevent="showCategories" href="#">
                <div class="hover-block"></div>
                <i class="fas fa-money-check-alt"></i>
                <h3>Financial Services</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div class="container">
            <h6 class="mb-2">Financial Services</h6>
            <ul>
              <li></li>
            </ul>
          </div>
          <!-- <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a href="/jobFilter">
                <div class="hover-block"></div>
                <i class="fas fa-building"></i>
                <h3>Real Estate</h3>
                <p>({{}}jobs)</p>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a href="/jobFilter">
                <div class="hover-block"></div>
                <i class="fas fa-oil-can "></i>
                <h3>oil & gas</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a href="/jobFilter">
                <div class="hover-block"></div>
                <i class="fas fa-tv"></i>
                <h3>I.C.T</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a href="/jobFilter">
                <div class="hover-block"></div>

                <i class="fas fa-code"></i>
                <h3>soft-ware developer</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a href="/jobFilter">
                <div class="hover-block"></div>
                <i class="fas fa-tools"></i>
                <h3>construction</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a href="/jobFilter">
                <div class="hover-block"></div>
                <i class="fas fa-chart-bar"></i>
                <h3>accounting</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a href="/jobFilter">
                <div class="hover-block"></div>
                <i class="fas fa-user-md"></i>
                <h3>medical</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a href="/jobFilter">
                <div class="hover-block"></div>
                <i class="fas fa-concierge-bell"></i>
                <h3>services</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a href="/jobFilter">
                <div class="hover-block"></div>
                <i class="fas fa-warehouse"></i>
                <h3>consumer goods</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a href="/jobFilter">
                <div class="hover-block"></div>
                <i class="fas fa-bullhorn"></i>
                <h3>marketing</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a href="/jobFilter">
                <div class="hover-block"></div>
                <i class="fas fa-university"></i>
                <h3>goverment</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a href="/jobFilter">
                <div class="hover-block"></div>
                <i class="far fa-newspaper"></i>
                <h3>media & news</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a href="/jobFilter">
                <div class="hover-block"></div>
                <i class="fas fa-utensils"></i>
                <h3>restaurents</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div> -->
          <!-- <div class="header_btn search_btn load_btn jb_cover">
            <a @click.prevent="showMore" href="#">view more categories</a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  name: "JobFilter",
  data: function() {
    return {
      availableJobs: [],
      searchJob: {
        job_title: "",
        location: "",
        job_type: ""
      },
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
  components: {
    Multiselect
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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
