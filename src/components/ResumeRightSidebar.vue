<template>
  <div class="col-lg-9 col-md-12 col-sm-12 col-12">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="job_filter_category_sidebar company_wrapper jb_cover">
          <div class="job_filter_sidebar_heading jb_cover">
            <h1>
              my resume
            </h1>
          </div>
          <div class="job_overview_header jb_cover">
            <div class="row">
              <div class="container-fluid  p-5">
                <h4 class="text-center">
                  {{ inputs.first_name }} {{ inputs.middle_name }}
                  {{ inputs.last_name }}
                </h4>
                <hr class="bg-light w-50" />
                <h6 class=" text-center">{{ inputs.email }}</h6>
                <p>{{ forms.phone }}</p>
                <br />
                <br />
                <div class="row">
                  <div class="container ">
                    <h6 class="">
                      Personal Data
                    </h6>
                    <br />
                    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                      <ul>
                        <li>Date of Birth: {{ forms.dob }}</li>
                        <br />
                        <li>Nationality: {{ forms.Country }}</li>
                        <br />
                        <li>Gender: {{ forms.gender }}</li>
                        <br />
                        <li>Marital Status: {{ forms.marital_status }}</li>
                        <br />
                        <li>Phone number: {{ forms.phone }}</li>
                        <br />
                      </ul>
                    </div>
                    <hr />
                    <h6>
                      Experience
                    </h6>
                    <ul
                      v-for="updatedForm in updatedForms"
                      :key="updatedForm.id"
                    >
                      <div>
                        <h6 class="">
                          {{ updatedForm.school }}
                        </h6>
                        <p>
                          {{ updatedForm.degree, }}
                          {{ updatedForm.course_of_study }}
                          {{ updatedForm.grade }}
                        </p>
                      </div>
                    </ul>
                    <br />
                    <hr />
                    <h6>
                      Bio
                    </h6>
                    <div>
                      <p>{{ edit.bio }}</p>
                    </div>
                    <br />
                    <hr />
                    <h6>
                      Referees
                    </h6>
                    <div></div>
                    <br />
                    <hr />
                    <h6>Certificates</h6>
                    <div>
                      <p>{{ row.title }}</p>
                      <p>{{ row.discription }}</p>
                    </div>
                    <!-- <br />
                    <hr />
                    <h6>Special Skills</h6>
                    <div>
                      <p>{{ edit.special_skills }}</p>
                    </div> -->
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <!-- This would be the left part of the cv -->
              </div>

              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <!-- This should be the left part of the cv -->
              </div>
            </div>
          </div>
        </div>
        <div class="job_filter_category_sidebar company_wrapper jb_cover">
          <div class="job_filter_sidebar_heading jb_cover">
            <h1>
              personal information
              <span
                ><a href="#" data-toggle="modal" data-target="#myModal1"
                  ><i class="fas fa-edit"></i></a
              ></span>
            </h1>
          </div>
          <div
            class="modal fade delete_popup company_popup"
            id="myModal1"
            role="dialog"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="delett_cntn jb_cover">
                      <h1>
                        <i class="fas fa-edit"></i>Edit personal information
                      </h1>
                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>First Name :</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form">
                              <input v-model="inputs.first_name" type="text" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>Middle Name :</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form">
                              <input v-model="inputs.middle_name" type="text" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>Last Name :</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form">
                              <input v-model="inputs.last_name" type="text" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>address :</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form">
                              <textarea
                                class="form-control"
                                name=""
                                id=""
                                rows="3"
                                v-model="forms.address"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>phone :</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form">
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                v-model="forms.phone"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>email :</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form">
                              <input
                                v-model="inputs.email"
                                required
                                type="email"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>Date of Birth</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form">
                              <input v-model="forms.dob" required type="date" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>Gender</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form">
                              <select
                                required
                                name="Gender"
                                class="custom-select"
                                v-model="forms.gender"
                              >
                                <option value="none"></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>Nationality</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form">
                              <input
                                placeholder="example... Nigerian*"
                                required
                                type="text"
                                v-model="forms.nationality"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>Marital Status</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form">
                              <select
                                required
                                name="marital_status"
                                class="custom-select"
                                v-model="forms.marital_status"
                              >
                                <option value="Single"></option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="padder_top jb_cover"></div>
                      <div class="header_btn search_btn applt_pop_btn">
                        <button @submit.prevent="updateForm">
                          update
                        </button>
                      </div>
                      <div class="cancel_wrapper">
                        <a href="#" data-dismiss="modal">cancel</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="job_overview_header jb_cover">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="jp_listing_overview_list_main_wrapper jb_cover">
                  <div class="jp_listing_list_icon">
                    <i class="fas fa-user"></i>
                  </div>
                  <div class="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>First Name:</li>
                      <li>
                        <a href="#">{{ inputs.first_name }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="jp_listing_overview_list_main_wrapper jb_cover">
                  <div
                    class="jp_listing_overview_list_main_wrapper dcv jb_cover"
                  >
                    <div class="jp_listing_list_icon">
                      <i class="far fa-calendar"></i>
                    </div>
                    <div class="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>date of birth:</li>
                        <li>
                          <a href="#">{{ forms.dob }}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="jp_listing_overview_list_main_wrapper jb_cover">
                  <div
                    class="jp_listing_overview_list_main_wrapper dcv jb_cover"
                  >
                    <div class="jp_listing_list_icon">
                      <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>marital status:</li>
                        <li>
                          <a href="#">{{ forms.marital_status }}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="jp_listing_overview_list_main_wrapper jb_cover">
                  <div class="jp_listing_list_icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Address:</li>
                      <li>{{ forms.address }}</li>
                    </ul>
                  </div>
                </div>
                <div class="jp_listing_overview_list_main_wrapper jb_cover">
                  <div class="jp_listing_list_icon">
                    <i class="fas fa-genderless"></i>
                  </div>
                  <div class="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Gender:</li>
                      <li>{{ forms.gender }}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="jp_listing_overview_list_main_wrapper jb_cover">
                  <div class="jp_listing_list_icon">
                    <i class="fas fa-user"></i>
                  </div>
                  <div class="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Last Name:</li>
                      <li>
                        <a href="#">{{ inputs.last_name }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="jp_listing_overview_list_main_wrapper jb_cover">
                  <div class="jp_listing_list_icon">
                    <i class="fas fa-user"></i>
                  </div>
                  <div class="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Middle Name:</li>
                      <li>
                        <a href="#">{{ inputs.middle_name }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="jp_listing_overview_list_main_wrapper jb_cover">
                  <div class="jp_listing_list_icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>email:</li>
                      <li>
                        <a href="#">{{ inputs.email }}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="jp_listing_overview_list_main_wrapper jb_cover">
                  <div class="jp_listing_list_icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>phone:</li>
                      <li>{{ forms.phone }}</li>
                    </ul>
                  </div>
                </div>

                <div class="jp_listing_overview_list_main_wrapper jb_cover">
                  <div
                    class="jp_listing_overview_list_main_wrapper dcv jb_cover"
                  >
                    <div class="jp_listing_list_icon">
                      <i class="fas fa-flag"></i>
                    </div>
                    <div class="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>nationality:</li>
                        <li>
                          <a href="#">{{ forms.nationality }}</a>
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
      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="job_filter_category_sidebar company_wrapper jb_cover">
          <div class="job_filter_sidebar_heading jb_cover">
            <h1>
              Certifications
              <span
                ><a href="#" data-toggle="modal" data-target="#myModal5"
                  ><i class="fas fa-edit"></i></a
              ></span>
            </h1>
          </div>
          <div
            class="modal fade delete_popup company_popup"
            id="myModal5"
            role="dialog"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="delett_cntn jb_cover">
                      <h1><i class="fas fa-edit"></i>add certificates</h1>
                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>title :</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form">
                              <input
                                v-model="certifications.input"
                                type="text"
                                name="title_certificate"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>description :</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form">
                              <input
                                type="text"
                                name="description_certificates"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>description :</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form">
                              <input
                                accept="application/pdf, application/vnd.ms-excel"
                                type="file"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="padder_top jb_cover"></div>
                      <div class="header_btn search_btn applt_pop_btn">
                        <a href="#">save updates</a>
                      </div>
                      <div class="cancel_wrapper">
                        <a href="#" data-dismiss="modal">cancel</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="job_overview_header jb_cover">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="jp_listing_overview_list_main_wrapper jb_cover">
                  <div
                    class="jp_listing_overview_list_main_wrapper dcv jb_cover"
                  >
                    <div class="jp_listing_list_icon">
                      <i class="fas fa-certificate"></i>
                    </div>
                    <div class="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>Certifications:</li>
                        <li>
                          <a href="#">{{ certifications.input }}</a>
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
      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="job_filter_category_sidebar company_wrapper jb_cover">
          <div class="job_filter_sidebar_heading jb_cover">
            <h1>
              Referees:
              <span
                ><a href="#" data-toggle="modal" data-target="#myModal9"
                  ><i class="fas fa-edit"></i></a
              ></span>
            </h1>
          </div>
          <div
            class="modal fade delete_popup company_popup"
            id="myModal9"
            role="dialog"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="delett_cntn jb_cover">
                      <h1><i class="fas fa-edit"></i>Add Referees</h1>
                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12"></div>
                        </div>
                      </div>
                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>Referree's Name :</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form">
                              <input type="text" name="Referrer_name" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>phone :</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form">
                              <input type="tel" name="name" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>email :</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form">
                              <input
                                type="email"
                                name="email"
                                placeholder="digital@example.com"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="padder_top jb_cover"></div>
                      <div class="header_btn search_btn applt_pop_btn">
                        <a href="#">save updates</a>
                      </div>
                      <div class="cancel_wrapper">
                        <a href="#" data-dismiss="modal">cancel</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="job_overview_header jb_cover">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="jp_listing_overview_list_main_wrapper jb_cover">
                  <div
                    class="jp_listing_overview_list_main_wrapper dcv jb_cover"
                  >
                    <div class="jp_listing_list_icon">
                      <i class="fas fa-users"></i>
                    </div>
                    <div class="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>Referees:</li>
                        <li>
                          <a href="#">{{ referrers.name }}</a>
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

      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="job_filter_category_sidebar company_wrapper jb_cover">
          <div class="job_filter_sidebar_heading jb_cover">
            <h1>
              Tell us a little about yourself<span
                ><a href="#" data-toggle="modal" data-target="#myModal2"
                  ><i class="fas fa-edit"></i></a
              ></span>
            </h1>
            <div
              class="modal fade delete_popup company_popup"
              id="myModal2"
              role="dialog"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="delett_cntn jb_cover">
                        <h1>
                          <i class="fas fa-edit"></i>Write something about
                          yourself
                        </h1>

                        <div class="category_wrapper jb_cover">
                          <div class="row">
                            <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                              <div class="category_lavel jb_cover">
                                <p>no more than 250 words</p>
                              </div>
                            </div>
                            <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                              <div class="delete_jb_form">
                                <textarea
                                  class="require"
                                  name="message"
                                  rows="5"
                                  placeholder="Write About Yourself"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="padder_top jb_cover"></div>
                        <div class="header_btn search_btn applt_pop_btn">
                          <a href="#">save updates</a>
                        </div>
                        <div class="cancel_wrapper">
                          <a href="#" data-dismiss="modal">cancel</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="job_overview_header pdd jb_cover">
            <p></p>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="job_filter_category_sidebar company_wrapper jb_cover">
          <div class="job_filter_sidebar_heading jb_cover">
            <h1>
              education background<span
                ><a href="#" data-toggle="modal" data-target="#myModal4"
                  ><i class="fas fa-edit"></i></a
              ></span>
            </h1>
          </div>
          <div
            class="modal fade delete_popup company_popup"
            id="myModal4"
            role="dialog"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="delett_cntn jb_cover">
                      <h1><i class="fas fa-edit"></i>education</h1>

                      <div class="category_wrapper gallery_browse jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover"></div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form gallery_link">
                              <input
                                type="text"
                                name="name"
                                placeholder="Course Name"
                                required
                              />
                            </div>
                            <div class="delete_jb_form gallery_link">
                              <input
                                type="text"
                                name="name"
                                placeholder="Institute"
                                required
                              />
                            </div>
                            <div class="delete_jb_form gallery_link">
                              <ValidationProvider
                                name="Year"
                                rules="numeric"
                                v-slot="{ errors }"
                              >
                                <label for="to">From: </label>
                                <input type="text" name="from" required />
                                <div id="blk">{{ errors[0] }}</div>
                              </ValidationProvider>
                            </div>
                            <div class="delete_jb_form gallery_link">
                              <ValidationProvider
                                name="Year"
                                rules="numeric"
                                v-slot="{ errors }"
                              >
                                <label for="to">To: </label>
                                <input type="text" name="to" required />
                                <div id="blk">{{ errors[0] }}</div>
                              </ValidationProvider>
                            </div>
                            <div class="delete_jb_form gallery_link">
                              <textarea
                                name="message"
                                rows="2"
                                placeholder="Program Type*  e.g. HnD, BSc, PhD "
                                required
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="header_btn search_btn applt_pop_btn">
                        <a href="#">save updates</a>
                      </div>
                      <div class="cancel_wrapper">
                        <a href="#" data-dismiss="modal">cancel</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="job_overview_header jb_cover">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="jp_listing_list_icon">
                  <i class="fas fa-graduation-cap"></i>
                </div>
                <div
                  class="jp_listing_overview_list_main_wrapper jb_cover"
                  v-for="updatedForm in updatedForms"
                  :key="updatedForm"
                >
                  <div class="jp_listing_list_icon_cont_wrapper">
                    <p>
                      <!--  -->
                      {{ updatedForm.degree }}
                      <a href="#"> {{ updatedForm.school }}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="job_filter_category_sidebar company_wrapper jb_cover">
          <div class="job_filter_sidebar_heading jb_cover">
            <h1>
              work experience
              <span
                ><a href="#" data-toggle="modal" data-target="#myModal6"
                  ><i class="fas fa-edit"></i></a
              ></span>
            </h1>
          </div>
          <div
            class="modal fade delete_popup company_popup"
            id="myModal6"
            role="dialog"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <button
                  type="button"
                  class="close"
                  @click="addExperience"
                  data-dismiss="modal"
                >
                  &times;
                </button>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="delett_cntn jb_cover">
                      <h1><i class="fas fa-edit"></i>experience</h1>

                      <div class="category_wrapper jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>add experience :</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form gallery_link">
                              <input
                                type="text"
                                name="name"
                                placeholder="Title"
                                v-model="title"
                              />
                            </div>
                            <div class="delete_jb_form gallery_link">
                              <input
                                type="text"
                                name="name"
                                placeholder="Company's name"
                                v-model="company_name"
                              />
                            </div>
                            <div class="delete_jb_form gallery_link">
                              <input type="month" v-model="dateFrom" />
                            </div>
                            <div class="delete_jb_form gallery_link">
                              <input type="month" v-model="dateTo" />
                            </div>
                            <div class="delete_jb_form gallery_link">
                              <input
                                type="text"
                                v-model="description"
                                placeholder="Description"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="header_btn search_btn applt_pop_btn">
                        <a href="#">save updates</a>
                      </div>
                      <div class="cancel_wrapper">
                        <a href="#" data-dismiss="modal">cancel</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="job_overview_header jb_cover">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div
                  class="jp_listing_overview_list_main_wrapper education_board jb_cover"
                >
                  <div class="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>
                        <div class="jp_listing_list_icon">
                          <i class="fas fa-suitcase"></i>
                        </div>
                        {{ experiences.dateFrom }}
                      </li>
                      <li>
                        {{ experiences.title }}
                        <a href="#"> {{ experiences.company_name }}</a>
                      </li>
                    </ul>
                    <p>
                      {{ experiences.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="job_filter_category_sidebar company_wrapper jb_cover">
          <div class="job_filter_sidebar_heading jb_cover">
            <h1>
              special qualification
              <span
                ><a href="#" data-toggle="modal" data-target="#myModal7"
                  ><i class="fas fa-edit"></i></a
              ></span>
            </h1>
          </div>
          <div
            class="modal fade delete_popup company_popup"
            id="myModal7"
            role="dialog"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="delett_cntn jb_cover">
                      <h1><i class="fas fa-edit"></i>qualification</h1>

                      <div class="category_wrapper gallery_browse jb_cover">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div class="category_lavel jb_cover">
                              <p>type here:</p>
                            </div>
                          </div>
                          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div class="delete_jb_form gallery_link">
                              <input type="text" name="name" placeholder="01" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="header_btn search_btn applt_pop_btn">
                        <a href="#">save updates</a>
                      </div>
                      <div class="cancel_wrapper">
                        <a href="#" data-dismiss="modal">cancel</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="job_overview_header jb_cover">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <ul class="speical_qualification_wrapper">
                  <li>
                    <i class="fas fa-check-square"></i>{{ edit.special_skills }}
                  </li>
                  <li>
                    <i class="fas fa-check-square"></i>Skilled at any Kind
                    Design Tools.
                  </li>
                  <li>
                    <i class="fas fa-check-square"></i>Passion for
                    people-centered design, solid intuition.
                  </li>
                  <li>
                    <i class="fas fa-check-square"></i>Hard Worker & Quick
                    Lerner.
                  </li>
                </ul>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="header_btn search_btn jb_cover">
          <a href="#">save changes</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import axios from "axios";
export default {
  name: "ResumeRightSidebar",
  data: function() {
    return {
      edit: {
        bio: ""
        // special_skills: ""
      },
      inputs: {
        first_name: "",
        last_name: "",
        middle_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      forms: {
        age: "",
        phone: "",
        gender: "",
        marital_status: "",
        nationality: "",
        address: "",
        dob: ""
      },
      updatedForms: {
        school: "",
        degree: "",
        course_of_study: "",
        grade: "",
        from: "",
        to: ""
      },
      experiences: [],
      certifications: {
        images: [],
        input: ""
      },
      row: {
        title: "",
        discription: ""
      },
      referrers: [],
      education: {}
    };
  },
  methods: {
    updateForm: function() {
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Register step 2"
      };
      axios
        .put("https://api.myjobdesk.com/api/user", {
          headers
        })
        .then({});
    },
    addExperience: function() {
      this.experiences.push({
        title: "",
        description: "",
        company_name: "",
        dateFrom: "",
        dateTo: ""
      });
    },
    addRow: function() {
      this.rows.push({
        title: "",
        description: "",
        file: {
          name: "Choose File"
        }
      });
    }
  },
  created() {
    var accessToken = localStorage.getItem("token") || "";
    const headers = {
      Authorization: "Bearer " + accessToken,
      "My-Custom-Header": "Register step 2"
    };
    axios
      .get("https://api.myjobdesk.com/api/user", {
        headers
      })
      .then(response => {
        console.log(response);
        this.inputs.first_name = response.data.first_name;
        this.inputs.last_name = response.data.last_name;
        this.inputs.middle_name = response.data.middle_name;
        this.inputs.email = response.data.email;
        this.forms.state_of_origin = response.data.state_of_origin;
        this.forms.age = response.data.age;
        this.forms.phone = response.data.phone;
        this.forms.gender = response.data.gender;
        this.forms.marital_status = response.data.marital_status;
        this.forms.nationality = response.data.nationality;
        this.forms.address = response.data.address;
        this.updatedForm.school = response.data.school;
        this.updatedForm.degree = response.data.degree;
        this.updatedForm.course_of_study = response.data.course_of_study;
        this.updatedForm.grade = response.data.grade;
        this.updatedForm.to = response.data.to;
        this.updatedForm.from = response.data.from;
      })
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });

    axios
      .get("https://api.myjobdesk.com/api/user")
      // .then(response => {
      //   this.inputs = response.data;
      //   this.forms = response.data;
      //   this.updatedForms = response.data;
      .then(function(data) {
        console.log(data);
      });
  }
};
</script>

<style>
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
