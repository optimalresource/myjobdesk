<template>
  <div>
    <div class="job_rivew_wrapper jb_cover">
      <div class="job_rivew_img mt-5">
        <img src="images/mockup3.png" alt="img" />
      </div>
      <div class="job_rivew_testimonial">
        <div class="jb_heading_wraper left_rivew_heading">
          <h3 class="">our job reviews</h3>

          <!-- <p>
            This are our reviews<br />
            check them out
          </p> -->
        </div>
        <div class="rivew_testimonial_slider jb_cover">
          <div class="carousel-reviews broun-block">
            <div class="container">
              <div class="row">
                <div
                  v-for="(review, index) in reviews"
                  :key="index"
                  class="card p-3"
                >
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="user d-flex flex-row align-items-center">
                      <img
                        src="https://i.imgur.com/hczKIze.jpg"
                        width="30"
                        class="user-img rounded-circle mr-2"
                      />
                      <span
                        ><small class="font-weight-bold text-success">{{
                          review.email
                        }}</small>
                        <br />
                        <p>
                          <small class="font-weight-bold">{{
                            review.body
                          }}</small>
                        </p>
                      </span>
                    </div>
                  </div>
                  <div
                    class="action d-flex justify-content-between mt-2 align-items-center"
                  >
                    <small class="text-info">{{ review.name }}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="owl-carousel owl-theme">
            <div class="item">
              <div class="jb_saying_content_wrapper jb_cover">
                <div class="saying_img">
                  <img src="images/testi.png" alt="img" />
                </div>
                <div class="rating_star">
                  <i class="flaticon-star-1"></i><i class="flaticon-star-1"></i
                  ><i class="flaticon-star-1"></i><i class="flaticon-star"></i
                  ><i class="flaticon-star"></i>
                </div>

                <p>
                  “ I don't always clap, but when I do, it'sbecause of Sella. We
                  can't understandhow we've been Sella. ”
                </p>
                <div class="jb_saying_img_name">
                  <h1><a href="#">Marita Irene</a></h1>
                  <p>Support Manager @ Echo</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="jb_saying_content_wrapper jb_cover">
                <div class="saying_img">
                  <img src="images/testi.png" alt="img" />
                </div>
                <div class="rating_star">
                  <i class="flaticon-star-1"></i><i class="flaticon-star-1"></i
                  ><i class="flaticon-star-1"></i><i class="flaticon-star"></i
                  ><i class="flaticon-star"></i>
                </div>

                <p>
                  “ I don't always clap, but when I do, it'sbecause of Sella. We
                  can't understandhow we've been Sella. ”
                </p>
                <div class="jb_saying_img_name">
                  <h1><a href="#">Marita Irene</a></h1>
                  <p>Support Manager @ Echo</p>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Review",
  data: function() {
    return {
      reviews: []
    };
  },
  methods: {
    populate: function() {
      var request = {};
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Fetch Available Jobs"
      };
      axios
        .get("https://jsonplaceholder.typicode.com/comments?_limit=3", {
          data: request,
          headers: headers
        })
        .then(response => {
          console.log(response);
          // this.index + 1;
          this.reviews = response.data;
          // for (let i = 0; i < this.latestJobs.length; i++) {
          //   this.job_discription.push(this.latestJob.albumId);
          //   console.log(this.job_discription);
          // }
        });
    }
  },
  created: function() {
    this.populate();
  }
};
</script>

<style scoped>
.card {
  border: none;
  box-shadow: 5px 6px 6px 2px #f5f4f4;
  border-radius: 4px;
  width: 100%;
}

.dots {
  height: 4px;
  width: 4px;
  margin-bottom: 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

.badge {
  padding: 7px;
  padding-right: 9px;
  padding-left: 16px;
  box-shadow: 5px 6px 6px 2px #e9ecef;
}

.check-icon {
  font-size: 17px;
  color: #c3bfbf;
  top: 1px;
  position: relative;
  margin-left: 3px;
}

.form-check-input {
  margin-top: 6px;
  margin-left: -24px !important;
  cursor: pointer;
}

.form-check-input:focus {
  box-shadow: none;
}

.icons i {
  margin-left: 8px;
}

.reply {
  margin-left: 12px;
}

.reply small {
  color: #b7b4b4;
}

.reply small:hover {
  color: green;
  cursor: pointer;
}
</style>
