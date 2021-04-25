<template>
  <div>
    <div class="jb_category_wrapper jb_cover">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
            <div class="jb_heading_wraper">
              <h3>Browse Jobs By Category</h3>

              <p>These are the top searched categories</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a @click.prevent="showCategory" href="#">
                <div class="hover-block"></div>
                <i class="fas fa-money-check-alt"></i>
                <h3>Financial Services</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a @click.prevent="showCategory" href="#">
                <div class="hover-block"></div>
                <i class="fas fa-building"></i>
                <h3>Real Estate</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a @click.prevent="showCategory" href="#">
                <div class="hover-block"></div>
                <i class="fas fa-oil-can "></i>
                <h3>oil & gas</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a @click.prevent="showCategory" href="#">
                <div class="hover-block"></div>
                <i class="fas fa-tv"></i>
                <h3>I.C.T</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <!-- <div
            v-if="showDiv"
            class="col-lg-10 offset-lg-1 col-md-12 col-sm-12 pd5"
          >
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="jb_browse_category jb_cover">
                  <a href="/jobFilter">
                    <div class="hover-block"></div>
                    <i class="fas fa-concierge-bell"></i>
                    <h3>services</h3>
                    <p>({{}} jobs)</p>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="jb_browse_category jb_cover">
                  <a href="/jobFilter">
                    <div class="hover-block"></div>
                    <i class="fas fa-warehouse"></i>
                    <h3>consumer goods</h3>
                    <p>({{}} jobs)</p>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="jb_browse_category jb_cover">
                  <a href="/jobFilter">
                    <div class="hover-block"></div>
                    <i class="fas fa-bullhorn"></i>
                    <h3>marketing</h3>
                    <p>({{}} jobs)</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div v-if="showDiv" class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a href="/jobFilter">
                <div class="hover-block"></div>

                <i class="fas fa-code"></i>
                <h3>soft-ware developer</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div v-if="showDiv" class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a href="/jobFilter">
                <div class="hover-block"></div>
                <i class="fas fa-tools"></i>
                <h3>construction</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div v-if="showDiv" class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a href="/jobFilter">
                <div class="hover-block"></div>
                <i class="fas fa-chart-bar"></i>
                <h3>accounting</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div v-if="showDiv" class="col-lg-3 col-md-6 col-sm-12">
            <div class="jb_browse_category jb_cover">
              <a href="/jobFilter">
                <div class="hover-block"></div>
                <i class="fas fa-user-md"></i>
                <h3>medical</h3>
                <p>({{}} jobs)</p>
              </a>
            </div>
          </div>
          <div
            v-if="showDiv"
            class="col-lg-10 offset-lg-1 col-md-12 col-sm-12 pd5"
          >
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="jb_browse_category jb_cover">
                  <a href="/jobFilter">
                    <div class="hover-block"></div>
                    <i class="fas fa-university"></i>
                    <h3>goverment</h3>
                    <p>({{}} jobs)</p>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="jb_browse_category jb_cover">
                  <a href="/jobFilter">
                    <div class="hover-block"></div>
                    <i class="far fa-newspaper"></i>
                    <h3>media & news</h3>
                    <p>({{}} jobs)</p>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="jb_browse_category jb_cover">
                  <a href="/jobFilter">
                    <div class="hover-block"></div>
                    <i class="fas fa-utensils"></i>
                    <h3>restaurents</h3>
                    <p>({{}} jobs)</p>
                  </a>
                </div>
              </div>
            </div>
          </div> -->
          <div class="float-right">
            <a class="btn bttn" href="/moreCategories">view more categories</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  // props: [],
  data: function() {
    return {
      showDiv: false,
      showCategoryDiv: false
    };
  },
  methods: {
    showMore: function() {
      this.showDiv = true;
    },
    showCategory: function() {
      this.showCategoryDiv = true;
    }
  }
};
</script>

<style scoped>
.bttn {
  background: #990066;
  color: white;
  margin-left: 20px;
}
</style>
