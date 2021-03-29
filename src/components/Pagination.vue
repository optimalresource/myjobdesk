<template>
  <div>
    <div class="col-lg-9 col-md-12 col-sm-12 col-12">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="job_main_overflow jb_cover">
            <div class="latest_job_overlow jb_cover">
              <div class="manage_jobs_wrapper jb_cover">
                <div class="job_list mange_list applications_recent">
                  <h6>recent applications</h6>
                </div>
              </div>
              <div
                v-for="(p, post) in displayedPosts"
                :key="post"
                class="latest_job_box jb_cover"
              >
                <div class="job_list recent_app_1">
                  <div class="recent_img">{{ p.suffix }}.</div>
                  <div class="recent_cntnt">
                    <h6>
                      <span class="float-left">
                        <avatar
                          class="img-responsive mb-2"
                          :username="companys.email"
                          :size="60"
                          :rounded="false"
                        >
                        </avatar>
                      </span>
                      <a href="#">{{ p.first }}</a>
                    </h6>
                    <ul>
                      <li>
                        <i class="fas fa-suitcase"></i>&nbsp; {{ p.osas }}
                      </li>
                      <li>
                        <i class="flaticon-location-pointer"></i>&nbsp;
                        {{ p.sasu }}
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="job_list_next recent_app_1">
                  <div class="header_btn download_btn_wrapper jb_cover">
                    <ul>
                      <li>
                        <a href="#"
                          ><i class="fas fa-file-download"></i>accept</a
                        >
                      </li>
                      <li>
                        <a href="#"> <i class="fas fa-envelope"></i>send</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination mt-3">
        <li class="page-item">
          <button
            type="button"
            class="page-link"
            v-if="page != 1"
            @click="page--"
          >
            Previous
          </button>
        </li>
        <li class="page-item">
          <button
            type="button"
            class="page-link"
            v-for="(pageNumber, pg) in pages.slice(page - 1, page + 5)"
            :key="pg"
            @click="page = pageNumber"
          >
            {{ pageNumber }}
          </button>
        </li>
        <li class="page-item">
          <button
            type="button"
            @click="page++"
            v-if="page < pages.length"
            class="page-link"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Avatar from "vue-avatar";
// import HereAddressLookup from "./HereAddressLookup.vue";
export default {
  // components: { HereAddressLookup },
  data() {
    return {
      companys: {
        name: "",
        email: "",
        category: "",
        phone_number: "",
        website: "",
        job_description: "",
        country: "",
        state: "",
        city: "",
        address: ""
      },
      posts: [],
      page: 1,
      perPage: 10,
      pages: []
    };
  },
  components: {
    Avatar
  },
  methods: {
    getPosts() {
      for (let i = 0; i < 50; i++) {
        this.posts.push({
          first: "Luca Wallace",
          last: "06 Applications",
          suffix: i + 1,
          osas: "Web Designer",
          sasu: " Los Angeles"
        });
      }
    },
    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    }
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.posts);
    }
  },
  watch: {
    posts() {
      this.setPages();
    }
  },
  created() {
    this.getPosts();
  },
  filters: {
    trimWords(value) {
      return (
        value
          .split(" ")
          .splice(0, 20)
          .join(" ") + "..."
      );
    }
  }
};
</script>
<style>
button.page-link {
  font-size: 20px;
  color: #990066;
  font-weight: 500;
  display: inline-block;
  justify-content: right;
}
@media (max-width: 991px) {
  .button.page-link {
    width: 100% !important;
  }
}
.pagination {
  position: relative;
  width: 100%;
}
</style>
