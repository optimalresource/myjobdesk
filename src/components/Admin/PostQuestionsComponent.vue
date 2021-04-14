<template>
  <div>
    <DashboardHeader />
    <div class="page_title_section">
      <div class="page_header">
        <div class="container">
          <div class="row">
            <div class="col-xl-9 col-lg-7 col-md-7 col-12 col-sm-12">
              <h1>interview Questions</h1>
            </div>
            <div class="col-xl-3 col-lg-5 col-md-5 col-12 col-sm-12">
              <div class="sub_title_section">
                <ul class="sub_title">
                  <li><a href="#"> Home </a>&nbsp; / &nbsp;</li>
                  <li>Interview Page</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="employe_dashboard_wrapper jb_cover">
      <div class="container">
        <div class="row">
          <Sidebar />
          <div class="col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="job_filter_sidebar_heading jb_cover">
                  <h1>Post Questions</h1>
                </div>
              </div>
            </div>
            <div v-if="firstStage" class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="job_listing_left_fullwidth jb_cover">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <h5 class="pb-3 text-center">Pick a Discipline</h5>
                      <multiselect
                        v-model="category"
                        :options="options"
                        :multiple="false"
                        :close-on-select="false"
                        :clear-on-select="false"
                        :preserve-search="true"
                        placeholder="Add discipline"
                        label="name"
                        track-by="language"
                        :preselect-first="false"
                      >
                      </multiselect>
                      <br />
                      <button
                        @click.prevent="nextphase"
                        class="btn bttn col-12"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="secondStage" class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="job_listing_left_fullwidth jb_cover">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <h5 class="pb-3 text-center">Step 2</h5>
                      <div class="contect_form3">
                        <textarea
                          placeholder="Type Question"
                          class="form-control"
                          required
                          v-model="interview.questions"
                          id="interview_questions"
                        ></textarea>
                        <br />
                        <h6 class="text-center mb-2">Options</h6>
                        <input
                          placeholder="option a"
                          v-model="interview.first"
                          type="text"
                          id="interview_questions"
                        />
                        <input
                          placeholder="option b"
                          v-model="interview.second"
                          type="text"
                          id="interview_questions"
                        />
                        <input
                          placeholder="option c"
                          v-model="interview.third"
                          type="text"
                          id="interview_questions"
                        />
                        <input
                          placeholder="option d"
                          v-model="interview.forth"
                          type="text"
                          id="interview_questions"
                        />
                        <input
                          placeholder="Answer to the question"
                          v-model="interview.answer"
                          type="text"
                          id="interview_questions"
                        />
                        <button
                          class="btn bttn col-12"
                          @click.prevent="paste"
                          :disabled="spin"
                        >
                          <span v-if="notSpin">Add question</span
                          ><i v-if="spin" class="fa fa-spinner fa-spin"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="job_listing_left_fullwidth jb_cover">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="contect_form3">
                        <h6 class="text-center">Question Preview</h6>
                        <div
                          v-for="(allQuestion, index) in allQuestions"
                          :key="index"
                          class="container"
                        >
                          <p>Question {{ index++ }}</p>
                          <p class="text-info">{{ allQuestion.questions }}</p>
                          <p>(a) {{ allQuestion.first }}</p>
                          <p>(b) {{ allQuestion.second }}</p>
                          <p>(c) {{ allQuestion.third }}</p>
                          <p>(d) {{ allQuestion.forth }}</p>
                          <p>(ans) {{ allQuestion.answer }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import DashboardHeader from "@/components/DashboardHeader.vue";
import Sidebar from "@/components/Admin/Sidebar.vue";
export default {
  data: function() {
    return {
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
      firstStage: true,
      secondStage: false,
      spin: false,
      notSpin: true,
      interview: {
        questions: "",
        dicipline: "",
        first: "",
        second: "",
        third: "",
        forth: "",
        number: "",
        answer: ""
      },
      index: 0,
      allQuestions: []
    };
  },
  components: {
    Sidebar,
    DashboardHeader,
    Multiselect
  },
  methods: {
    nextphase: function() {
      // auth codes first
      this.firstStage = false;
      this.secondStage = true;
    },
    paste: function() {
      if (this.interview.questions == "") {
        this.$toasted.error("Please enter a skill");
        return false;
      }
      if (this.interview.first == "") {
        this.$toasted.error("Please set an option one");
        return false;
      }
      if (this.interview.second == "") {
        this.$toasted.error("Please set an option two");
        return false;
      }
      if (this.interview.third == "") {
        this.$toasted.error("Please set an option three");
        return false;
      }
      if (this.interview.forth == "") {
        this.$toasted.error("Please set an option four");
        return false;
      }
      if (this.interview.answer == "") {
        this.$toasted.error("Please set an answer");
        return false;
      }
      this.allQuestions.push(this.interview);
      // document.getElementById("interview_questions").value = "";
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.bttn {
  color: white;
  background: #990066;
}
</style>
