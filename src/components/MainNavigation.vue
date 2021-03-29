<template>
  <div>
    <div class="cp_navi_main_wrapper jb_cover">
      <div class="container-fluid">
        <div class="cp_logo_wrapper">
          <a href="/">
            <img src="images/logo13.png" alt="logo" />
          </a>
        </div>
        <!-- mobile menu area start -->
        <header
          class="mobail_menu d-block d-sm-block d-md-block d-lg-none d-xl-none"
        >
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="cd-dropdown-wrapper">
                  <a class="house_toggle" href="#0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 31.177 31.177"
                      style="enable-background:new 0 0 31.177 31.177;"
                      xml:space="preserve"
                      width="25px"
                      height="25px"
                    >
                      <g>
                        <g>
                          <path
                            class="menubar"
                            d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z"
                            fill="#004165"
                          />
                        </g>
                        <g>
                          <path
                            class="menubar"
                            d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z"
                            fill="#004165"
                          />
                        </g>
                        <g>
                          <path
                            class="menubar"
                            d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z"
                            fill="#004165"
                          />
                        </g>
                        <g>
                          <path
                            class="menubar"
                            d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z"
                            fill="#004165"
                          />
                        </g>
                        <g>
                          <path
                            class="menubar"
                            d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z"
                            fill="#004165"
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                  <!-- .cd-dropdown -->
                </div>
              </div>
            </div>
          </div>
          <!-- .cd-dropdown-wrapper -->
        </header>
        <div class=" menu_btn_box header_btn jb_cover join_us">
          <ul class="navbar-nav ml-auto">
            <li v-if="!loggedIn">
              <a href="/register">join us</a>
            </li>
            <li v-if="!loggedIn">
              <a href="/login">sign in</a>
            </li>
            <li v-if="loggedIn">
              <a href="/logout">log out</a>
            </li>
          </ul>
        </div>

        <div class="jb_navigation_wrapper">
          <!--<div class="mainmenu d-xl-block d-lg-block d-md-none d-sm-none d-none">
                        <ul class="main_nav_ul">
                            <li class="has-mega gc_main_navigation"><a href="#" class="gc_main_navigation active_class">How it Works</a>
                                <ul class="navi_2_dropdown">
                                    <li class="parent">
                                        <a href="index.html"><i class="fas fa-square"></i>home I </a>
                                    </li>
                                    <li class="parent">
                                        <a href="index_II.html"><i class="fas fa-square"></i>home II</a>
                                    </li>
                                    <li class="parent">
                                        <a href="index_III.html"><i class="fas fa-square"></i> home III</a>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </div> -->
          <!-- mainmenu end -->
          <div
            class="jb_search_btn_wrapper d-none d-sm-none d-md-none d-lg-block d-xl-block"
          >
            <!-- extra nav -->
            <div class="extra-nav">
              <div class="extra-cell">
                <button
                  id="quik-search-btn"
                  type="button"
                  class="site-button radius-xl"
                >
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>

            <!-- Quik search -->
            <div class="dez-quik-search bg-primary-dark">
              <form action="#">
                <input
                  name="search"
                  value=""
                  type="text"
                  class="form-control"
                  placeholder="Type to search..."
                />
                <span id="quik-search-remove"
                  ><i class="fas fa-times"></i
                ></span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
  name: "MainNavigation",
};
</script>

<style scoped>
/* @media (max-width: 1198px) {
  .join_us li a {
    display: inline-block  !important; 
  }
} */
@media (max-width: 500px) {
  .join_us li a {
    display: none !important;
  }
}
@media (max-width: 991px) {
  .join_us li a {
    display: none !important;
  }
}

@media (max-width: 1197px) {
  .join_us {
    /* margin-left: -350px; */
  }
}
</style>
