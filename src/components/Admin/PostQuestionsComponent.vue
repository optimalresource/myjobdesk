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
                      <ul class="ks-cboxtags">
                        <li>
                          <input
                            type="checkbox"
                            id="checkboxOne"
                            class="form-control interview_questions"
                            v-model="interview.difficult"
                          /><label for="checkboxOne">Difficult</label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="checkboxTwo"
                            class="form-control interview_questions"
                            v-model="interview.easy"
                          /><label for="checkboxTwo">Easy</label>
                        </li>
                      </ul>
                      <div class="contect_form3">
                        <h6 class="text-center mt-4 mb-2">Questions</h6>
                        <textarea
                          placeholder="Type Question"
                          class="form-control interview_questions"
                          required
                          v-model="interview.questions"
                          name="question"
                        ></textarea>
                        <br />
                        <h6 class="text-center mb-2">Options</h6>
                        <input
                          placeholder="option a"
                          v-model="interview.first"
                          type="text"
                          class="interview_questions"
                        />
                        <input
                          placeholder="option b"
                          v-model="interview.second"
                          type="text"
                          class="interview_questions"
                        />
                        <input
                          placeholder="option c"
                          v-model="interview.third"
                          type="text"
                          class="interview_questions"
                        />
                        <input
                          placeholder="option d"
                          v-model="interview.forth"
                          type="text"
                          class="interview_questions"
                        />
                        <input
                          placeholder="Answer to the question"
                          v-model="interview.answer"
                          type="text"
                          class="interview_questions"
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
                          <p class="text-dark div">
                            {{ allQuestion.questions }}
                          </p>
                          <br />
                          <p>(a) {{ allQuestion.first }}</p>
                          <p>(b) {{ allQuestion.second }}</p>
                          <p>(c) {{ allQuestion.third }}</p>
                          <p>(d) {{ allQuestion.forth }}</p>
                          <p>(ans) {{ allQuestion.answer }}</p>
                          <p class="text-danger">
                            Easy: {{ allQuestion.difficult }}
                          </p>
                          <p class="mb-3">Difficult: {{ allQuestion.easy }}</p>
                          <hr />
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
        difficult: "",
        easy: "",
        answer: ""
      },
      index: 1,
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
      if (this.interview.answer == "") {
        this.$toasted.error("Please set an answer");
        return false;
      }
      this.allQuestions.push(this.interview);
      // document.getElementsByClassName("interview_questions").value = "";
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.div {
  word-wrap: break-word;
}
.bttn {
  color: white;
  background: #990066;
}
ul.ks-cboxtags {
  list-style: none;
  padding: 0px;
  text-align: center;
}
ul.ks-cboxtags li {
  display: inline;
}
ul.ks-cboxtags li label {
  display: block;
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(139, 139, 139, 0.3);
  color: #adadad;
  border-radius: 25px;
  white-space: nowrap;
  margin: 3px 0px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.2s;
}

ul.ks-cboxtags li label {
  padding: 8px 12px;
  cursor: pointer;
}

ul.ks-cboxtags li label::before {
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 12px;
  padding: 2px 6px 2px 2px;
  content: "\f067";
  transition: transform 0.3s ease-in-out;
}

ul.ks-cboxtags li input[type="checkbox"]:checked + label::before {
  content: "\f00c";
  transform: rotate(-360deg);
  transition: transform 0.3s ease-in-out;
}

ul.ks-cboxtags li input[type="checkbox"]:checked + label {
  border: 2px solid #e9a1ff;
  background-color: #990066;
  color: #fff;
  transition: all 0.2s;
}

ul.ks-cboxtags li input[type="checkbox"] {
  display: absolute;
}
ul.ks-cboxtags li input[type="checkbox"] {
  position: absolute;
  opacity: 0;
}
ul.ks-cboxtags li input[type="checkbox"]:focus + label {
  border: 2px solid #e9a1ff;
}
</style>
