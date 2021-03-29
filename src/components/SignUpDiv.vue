<template>
  <div>
    <div class="car mb-3">
      <h4 class="text-center mb-4">
        <i class="fas fa-user-edit"></i> Register as
      </h4>
      <div class="register_div">
        <div class="justify-content-center text-center">
          <div class="reg_btn applt_pop_btn col-lg-6 col-md-12 col-xs-12 ">
            <router-link to="/companyRegistration" class="reg_button">
              Company <i class="fas fa-users"></i>
            </router-link>
            <p></p>
          </div>
          <div class="reg_btn applt_pop_btn col-lg-6 col-md-12 col-xs-12 ">
            <router-link to="/applicant" class="reg_button">
              Applicant <i class="fas fa-user-edit"></i>
            </router-link>
          </div>
          <p class="mt-5">
            <a href="/" class="col-lg-6 col-md-12 col-xs-12 "
              ><i class="fas fa-home"></i> <strong>Home</strong></a
            >
          </p>
          <p>
            Already have an account??
            <a href="/login"> <strong>login</strong></a>
          </p>
        </div>
      </div>
      <div class="foot text-center">
        <hr />
        <p>
          <span><i class="far fa-copyright"></i> Myjobdesk 2021</span>
        </p>
        <div class=""></div>
        <div class="mt-2">
          <a class="circle" href="#"><i class="fab fa-facebook"></i></a> &nbsp;
          <a class="circle" href="#"><i class="fab fa-twitter-square"></i></a>
          &nbsp;
          <a class="circle" href="#"><i class="fab fa-linkedin"></i></a> &nbsp;
          <a class="circle" href="#"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
      <!-- Company Registration -->
    </div>
  </div>
</template>

<style scoped>
h4 {
  color: #990066;
}
@media only screen and (max-width: 481px) {
  /* .applt_pop_btn {
    margin: 10px;
  } */

  .register_div {
    margin-top: 35px;
    padding: 12%;
  }
}
.register_div {
  margin-top: 35px;
  /* padding: 2%; */
}
@media only screen and (max-width: 478px) {
  .register_div {
    margin-top: 35px;
    padding: 0%;
  }
  .car {
    margin-top: -30px;
  }
}

.applt_pop_btn {
  display: inline-block;
}

@media only screen and (max-width: 298px) {
  .car {
    margin-top: -30px;
  }
  .search_btn .applt_pop_btn .col-md-12,
  .search_btn .applt_pop_btn .col-xs-12 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .reg_button {
    width: 100%;
  }

  .card {
    border: 0 !important;
  }

  .applt_pop_btn {
    padding: 0 10px 15px 10px;
  }

  .register_div > .justify-content-center .col-12 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
}

.search_btn a,
.search_btn button {
  width: 100%;
}

.reg_btn a,
.reg_btn button {
  width: 100%;
  height: 50px;
  background: #990066;
  float: left;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-size: 16px;
  color: #fff;
  border: 1px solid transparent;
  line-height: 48px;
  text-transform: capitalize;
  -webkit-backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color 0.6s, color 0.6s;
  -webkit-transition: all 0.6s;
  -o-transition: all 0.6s;
  -ms-transition: all 0.6s;
  -moz-transition: all 0.6s;
  transition: all 0.6s;
}
.reg_btn a::before,
.reg_btn button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #990066;
  border-radius: inherit;
  opacity: 0;
  -webkit-transform: scale3d(0.6, 0.6, 1);
  transform: scale3d(0.6, 0.6, 1);
  -webkit-transition: -webkit-transform 0.6s, opacity 0.6s;
  transition: transform 0.6s, opacity 0.6s;
  -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
}
.reg_btn a:hover,
.reg_btn button:hover {
  background-color: transparent;
  color: #990066;
  -webkit-transition: all 0.6s;
  -o-transition: all 0.6s;
  -ms-transition: all 0.6s;
  -moz-transition: all 0.6s;
  transition: all 0.6s;
}
.reg_btn a:hover::before,
.reg_btn button:hover::before {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  opacity: 1;
  -webkit-transition: all 0.6s;
  -o-transition: all 0.6s;
  -ms-transition: all 0.6s;
  -moz-transition: all 0.6s;
  transition: all 0.6s;
}
.reg_btn a i,
.reg_btn button i {
  margin-right: 5px;
}
.crd {
  border: 1px solid grey;
  padding: 10px;
}
.foot {
  height: auto;
  margin-top: 200px;
}
.circle {
  padding: 5px 7px;
  border: 1px solid #990066;
  border-radius: 50%;
}
</style>
