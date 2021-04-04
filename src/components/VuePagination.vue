<template>
  <div class="col-lg-9 col-md-12 col-sm-12 col-12 mt-3">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="job_main_overflow jb_cover">
          <div class="latest_job_overlow jb_cover">
            <div class="manage_jobs_wrapper jb_cover">
              <div class="job_list mange_list">
                <h6>job title</h6>
              </div>
              <div class="job_list_next mange_list">
                <h6>applications</h6>
              </div>
              <div class="job_list_next mange_list">
                <h6>status</h6>
              </div>
              <div class="job_list_next mange_list">
                <h6>action</h6>
              </div>
            </div>
            <div
              v-for="(p, post) in displayedPosts"
              :key="post"
              class="latest_job_box jb_cover"
            >
              <div class="job_list">
                <span class="float-left">{{ p.sasu }}</span>
                <h6>
                  <a href="#">{{ p.first }}</a>
                </h6>
                <p><i class="far fa-calendar"></i> {{ p.date }}</p>
              </div>
              <div class="job_list_next">
                <p>
                  <a href="#">{{ p.last }}</a>
                </p>
              </div>
              <div class="job_list_next">
                <p class="gn">{{ p.suffix }}</p>
              </div>
              <div class="job_list_next">
                <ul>
                  <li>
                    <a href="#"><i class="fas fa-eye"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fas fa-edit"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fas fa-trash-alt"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <table class="table table-bordered">
    <thead>
      <tr>
        <th>Job Title</th>
        <th>Applications</th>
        <th>Status</th>
        <th>Action</th>
        <th>User ID</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(p, post) in displayedPosts" :key="post">
        <td>{{ p.first }}</td>
        <td>{{ p.last }}</td>
        <td>{{ p.suffix }}</td>
        <td>{{ p.osas }}</td>
      </tr>
    </tbody>
  </table> -->

    <nav aria-label="Page navigation example">
      <ul class="pagination mt-3 justify-content-center">
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
export default {
  data() {
    return {
      posts: [],
      page: 1,
      perPage: 9,
      pages: [],
    };
  },
  methods: {
    getPosts() {
      for (let i = 0; i < 50; i++) {
        this.posts.push({
          first: "General Ledger Accountant ",
          last: "06 Applications",
          suffix: "Active",
          date: "Date Posted : 02 Oct 2017",
          sasu: i + 1,
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
    },
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.posts);
    },
  },
  watch: {
    posts() {
      this.setPages();
    },
  },
  created() {
    this.getPosts();
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
};
</script>

<style>
button.page-link {
  display: inline-block;
}
button.page-link {
  font-size: 20px;
  color: #29b3ed;
  font-weight: 500;
}
@media (max-width: 991px) {
  .offset {
    width: 600px !important;
    margin: 0px auto;
  }
}
</style>
