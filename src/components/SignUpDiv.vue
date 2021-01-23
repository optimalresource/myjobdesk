/* eslint-disable prettier/prettier */
<template>
  <div>
    <div class="card mb-3">
      <div class="pt-5 d-flex justify-content-center">
        <div class=" header_btn search_btn applt_pop_btn">
          <button
            data-toggle="modal"
            data-target="#myModal"
            @click.prevent="showSecondDiv = !showSecondDiv"
          >
            Company <i class="fas fa-users"></i>
          </button>
        </div>
        <div class="header_btn search_btn applt_pop_btn">
          <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            @click.prevent="showDiv = !showDiv"
            data-backdrop="static"
            data-keyboard="false"
          >
            Applicant <i class="fas fa-user-edit"></i>
          </button>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title " id="exampleModalCenterTitle">
                Applicant Registration
              </h5>
              <!-- <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button> -->
            </div>
            <div class="modal-body">
              <div class="step">
                <div v-if="step == 1" class="container p-5">
                  <!-- <h5 class="text-center mb-5 mt-5">Register</h5> -->

                  <ValidationProvider
                    name="Firstname"
                    rules="required|alpha"
                    v-slot="{ errors }"
                  >
                    <div class="form-group icon_form comments_form">
                      <input
                        type="text"
                        class="form-control require"
                        placeholder="First Name*"
                        required
                        v-model="inputs.first_name"
                      />
                      <i class="fas fa-user"></i>
                      <span>{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>

                  <ValidationProvider
                    name="Middlename"
                    rules="required|alpha"
                    v-slot="{ errors }"
                  >
                    <div class="form-group icon_form comments_form ">
                      <input
                        type="text"
                        class="form-control require"
                        required
                        placeholder="Middle Name*"
                        v-model="inputs.middle_name"
                      />
                      <i class="fas fa-user"></i>
                      <span>{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>

                  <ValidationProvider
                    name="Lastname"
                    rules="required|alpha"
                    v-slot="{ errors }"
                  >
                    <div class="form-group icon_form comments_form">
                      <input
                        type="text"
                        class="form-control require"
                        required
                        placeholder="Last Name*"
                        v-model="inputs.last_name"
                      />
                      <i class="fas fa-user"></i>
                      <span>{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>

                  <ValidationProvider
                    name="Email"
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <div class="form-group icon_form comments_form">
                      <input
                        id="email"
                        type="email"
                        class="form-control  require"
                        required
                        autocomplete="email"
                        autofocus
                        placeholder="Email Address*"
                        v-model="inputs.email"
                      />
                      <i class="fas fa-envelope"></i>
                      <span>{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>

                  <ValidationObserver>
                    <ValidationProvider
                      :rules="{
                        required: true,
                        regex: /^(?=.*\d)(?=.*[a-zA-Z]).{6,100}$/,
                        confirmed: 'confirmation'
                      }"
                      v-slot="{ errors }"
                      name="Password"
                    >
                      <div
                        class="form-group icon_form comments_form input-group"
                      >
                        <input
                          v-bind:type="[showPassword ? 'text' : 'password']"
                          id="password"
                          class="form-control "
                          name="password"
                          placeholder="Password *letters and numbers are compulsory"
                          v-model="inputs.password"
                        />
                        <div class="input-group-append">
                          <span
                            class="input-group-text"
                            @click="showPassword = !showPassword"
                          >
                            <i
                              class="fa"
                              :class="[
                                showPassword ? 'fa-eye' : 'fa-eye-slash'
                              ]"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                      </div>
                      <div id="blk">{{ errors[0] }}</div>
                    </ValidationProvider>

                    <ValidationProvider
                      v-slot="{ errors }"
                      vid="confirmation"
                      name="Confirm Password"
                    >
                      <div
                        class="form-group icon_form comments_form input-group"
                      >
                        <input
                          v-bind:type="[
                            showConfirmPassword ? 'text' : 'password'
                          ]"
                          id="confirm-password"
                          required
                          class="form-control short "
                          placeholder="Confirm Password *"
                          v-model="inputs.password_confirmation"
                        />
                        <div class="input-group-append">
                          <span
                            class="input-group-text"
                            @click="showConfirmPassword = !showConfirmPassword"
                          >
                            <i
                              class="fa"
                              :class="[
                                showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'
                              ]"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                      </div>
                      <div id="blk">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </ValidationObserver>
                  <div class="jb_newslwtteter_button">
                    <div class="header_btn search_btn news_btn jb_cover">
                      <button type="submit" @click="register">
                        Next Step
                      </button>
                    </div>
                  </div>

                  <!-- <div>
                    <ul class="bill">
                      <li>
                        <a class="fbook" href="#">
                          <i class="fab fa-facebook-f"></i>
                          <span class="space"></span> Register with Facebook</a
                        >
                      </li>
                      <li>
                        <a class="linkedin" href="#">
                          <i class="fab fa-linkedin-in"></i
                          ><span class="space"></span> Register with Linkedin</a
                        >
                      </li>
                      <li>
                        <a class="google" href="#"
                          ><i class="fab fa-google"></i
                          ><span class="space"></span> Register with Google</a
                        >
                      </li>
                    </ul>
                  </div> -->
                </div>
                <transition name="slide-fade">
                  <div v-if="step == 2" class="container">
                    <div class="card-body">
                      <div class="personal_details_div p-5">
                        <h5 class="text-center pb-3">Lets Get To Know You</h5>

                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <div class="form-group icon_form comments_form">
                            <label for="date">Date of Birth:</label>
                            <input
                              v-model="forms.dob"
                              type="date"
                              name="date"
                              class="form-control"
                              placeholder="Date of birth"
                              required
                            />
                            <div id="">{{ errors[0] }}</div>
                          </div>
                        </ValidationProvider>
                        <br />
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <div class="form-group icon_form comments_form">
                            <label for="gender">gender</label>
                            <select
                              v-model="forms.gender"
                              name="gender"
                              class="custom-select form-control"
                            >
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="others">Others</option>
                            </select>
                            <div id="">{{ errors[0] }}</div>
                          </div>
                        </ValidationProvider>
                        <br />
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <div class="form-group icon_form comments_form">
                            <label for="marital_status">Marital Status</label>
                            <select
                              v-model="forms.marital_status"
                              name="marital_status"
                              class="custom-select form-control"
                            >
                              <option value="Single">Single</option>
                              <option value="Married">Married</option>
                            </select>
                            <div id="">{{ errors[0] }}</div>
                          </div>
                        </ValidationProvider>
                        <br />
                        <ValidationProvider
                          name="phone-number"
                          rules="required|numeric"
                          v-slot="{ errors }"
                        >
                          <div class="form-group icon_form comments_form">
                            <input
                              type="text"
                              placeholder="Phone Number*.... )0701"
                              class="form-control"
                              v-model="forms.phone"
                            />
                            <div id="">{{ errors[0] }}</div>
                          </div>
                        </ValidationProvider>
                        <br />
                        <ValidationProvider
                          name="address"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <div class="form-group icon_form comments_form">
                            <input
                              type="text"
                              placeholder="Your address*..."
                              class="form-control"
                              v-model="forms.address"
                            />
                            <div id="">{{ errors[0] }}</div>
                          </div>
                        </ValidationProvider>
                        <br />
                        <ValidationProvider>
                          <div class="form-group icon_form comments_form">
                            <label>Select Country:</label>
                            <select
                              class="form-control"
                              v-model="forms.nationality"
                            >
                              <option value="Nigeria">Nigeria</option>
                            </select>
                            <div id="">{{ errors[0] }}</div>
                          </div>
                        </ValidationProvider>
                        <br />
                        <ValidationProvider
                          name="State of Origin"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <div class="form-group icon_form comments_form">
                            <label>Select State:</label>
                            <select
                              class="form-control"
                              v-model="forms.selectedState"
                              @change="changeState"
                            >
                              <option value="0">Select State</option>
                              <option
                                v-for="state in states"
                                :key="state"
                                :value="state"
                                >{{ state }}</option
                              >
                            </select>
                            <div id="">{{ errors[0] }}</div>
                          </div>
                        </ValidationProvider>
                        <br />
                        <ValidationProvider
                          name="Local Government"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <div class="form-group icon_form comments_form">
                            <label>Select Local Government:</label>
                            <select
                              class="form-control"
                              v-model="forms.selectedLGA"
                              @change="changeLGA"
                            >
                              <option value="0">Select Local Government</option>
                              <option
                                v-for="lg in lga.lgas"
                                :key="lg"
                                :value="lg"
                                >{{ lg }}</option
                              >
                            </select>
                            <div id="">{{ errors[0] }}</div>
                          </div>
                        </ValidationProvider>
                        <div class="container">
                          <button
                            @click="savePersonalDetails"
                            class="submit-edu"
                            type="submit"
                          >
                            Save Personal Details
                          </button>
                        </div>
                      </div>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <div class="add_educational_details_div">
                        <button
                          @click.prevent="showForm"
                          class="btn btn-primary"
                        >
                          Add Education
                        </button>
                        <div class="mb-3 col-12">
                          <div
                            class="edu-prev mb-3 mt-3"
                            v-for="(updatedForm, up) in updatedForms"
                            :key="up"
                          >
                            <span
                              @click="removeupdatedForms(up)"
                              class="ml-4 text-danger float-right"
                              ><i class="far fa-times-circle"></i
                            ></span>
                            <h6 class="">
                              {{ updatedForm.school_name }}
                            </h6>
                            {{ updatedForm.degree }},
                            {{ updatedForm.course_of_study }},
                            {{ updatedForm.grade }},
                            {{ updatedForm.start_date }} to
                            {{ updatedForm.end_date }}
                          </div>
                        </div>

                        <div class="edu-form  background">
                          <h5 class="card-title p-5">
                            Add Education
                            <span
                              class="float"
                              style="cursor:pointer"
                              @click.prevent="hideForm"
                              ><i class="fas fa-times"></i
                            ></span>
                          </h5>
                          <transition name="fade">
                            <div class="employee-form">
                              <ValidationProvider
                                name="School"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <div class="form-group icon_form comments_form">
                                  <input
                                    type="text"
                                    placeholder="School*... e.g. University of ..."
                                    class="form-control { 'form-group--error': $v.school.$error }"
                                    v-model="forms.school_name"
                                  />
                                </div>
                                <span>{{ errors[0] }}</span>
                              </ValidationProvider>
                              <br />
                              <ValidationProvider
                                name="Degree"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <div class="form-group icon_form comments_form">
                                  <input
                                    type="text"
                                    placeholder="Degree*... e.g. BSc, BA, HNd, SSCE..."
                                    class="form-control { 'form-group--error': $v.degree.$error }"
                                    v-model="forms.degree"
                                  />
                                </div>
                                <span>{{ errors[0] }}</span>
                              </ValidationProvider>
                              <br />
                              <ValidationProvider
                                name="Course"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <div class="form-group icon_form comments_form">
                                  <input
                                    type="text"
                                    placeholder="Field of study *... e.g. Agricultural Science"
                                    class="form-control"
                                    v-model="forms.course_of_study"
                                  />
                                </div>
                                <div id="blk">{{ errors[0] }}</div>
                              </ValidationProvider>
                              <br />
                              <ValidationProvider
                                name="Grade"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <div class="form-group icon_form comments_form">
                                  <input
                                    type="text"
                                    placeholder="Grade*... e.g. Second class upper division"
                                    class="form-control"
                                    v-model="forms.grade"
                                  />
                                </div>
                                <div id="blk">{{ errors[0] }}</div>
                              </ValidationProvider>

                              <br />
                              <ValidationProvider
                                name="Year"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <label for="start_date">From: </label>
                                <div class="form-group icon_form comments_form">
                                  <input
                                    type="month"
                                    id="start"
                                    class="form-control"
                                    name="start_date"
                                    v-model="forms.start_date"
                                    min="1930-01"
                                  />
                                </div>
                                <div id="blk">{{ errors[0] }}</div>
                              </ValidationProvider>
                              <br />

                              <ValidationProvider
                                name="Year"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <label for="to">To: </label>
                                <div class="form-group icon_form comments_form">
                                  <input
                                    type="month"
                                    id="start"
                                    class="form-control"
                                    name="start_date"
                                    v-model="forms.end_date"
                                    min="1930-01"
                                  />
                                </div>
                                <div id="blk">{{ errors[0] }}</div>
                              </ValidationProvider>
                              <br />
                              <div class="form-group col-md-12">
                                <label for="logo" class="control-label"
                                  >Please Upload Relevant Documents</label
                                >
                                <br />
                                <div class="input-group mb-3">
                                  <div class="custom-file">
                                    <input
                                      ref="educational_details_file"
                                      type="file"
                                      name="educational_details_file"
                                      accept="application/pdf,.doc,.docx,application/msword"
                                      multiple
                                      id="educational_details_file"
                                      @change="uploadFieldChange"
                                      class="negative-margin-left custom-file-input"
                                    />
                                    <label
                                      class="custom-file-label"
                                      for="inputGroupFile01"
                                      >Upload Document</label
                                    >
                                  </div>
                                </div>
                                <div>
                                  <hr />
                                  <div class="col-md-12">
                                    <div
                                      class="attachment-holder animated fadeIn"
                                      v-cloak
                                      v-for="attachment in attachments"
                                      :key="attachment"
                                    >
                                      <span class="label label-primary">{{
                                        attachment.name +
                                          " (" +
                                          Number(
                                            (
                                              attachment.size /
                                              1024 /
                                              1024
                                            ).toFixed(1)
                                          ) +
                                          "MB)"
                                      }}</span>
                                      <span
                                        class=""
                                        style="background: white; cursor: pointer;"
                                        @click="removeAttachment(attachment)"
                                        ><button class="btn btn-xs btn-danger">
                                          <i class="fas fa-times"></i></button
                                      ></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <button
                                class="submit-edu"
                                @click.prevent="submitEducationalDetails"
                              >
                                Save Info
                              </button>
                            </div>
                          </transition>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div class="certification_div">
                      <div class="text-center p-3 mb-3">
                        <h5>Certifications</h5>
                        <p class="text-danger">(Optional)</p>
                        <span
                          class="float cert"
                          style="cursor:pointer"
                          @click.prevent="hideCertificateForm"
                          ><i class="fas fa-times"></i
                        ></span>
                      </div>
                      <!-- <div class="p-3 certification_preview">
                        <span><i class="far fa-times-circle"></i></span>
                        <div
                          v-for="(certification, cert) in certifications"
                          :key="cert"
                        >
                          <div class="text-success">
                            <p style="white-space: pre-line;">
                              {{ certifications.title }}
                            </p>
                            <p style="white-space: pre-line;">
                              {{ certifications.discription }}
                            </p>
                          </div>
                        </div>
                      </div> -->
                      <div class="certify">
                        <div class="form-group icon_form comments_form">
                          <input
                            v-model="certifications.title"
                            class="form-control"
                            type="text"
                            placeholder="Certification Title"
                          />
                        </div>
                        <div class="form-group icon_form comments_form">
                          <textarea
                            v-model="certifications.discription"
                            class="form-control"
                            type="text"
                            placeholder="Discription..."
                          >
                          </textarea>
                        </div>
                        <div class="custom-file">
                          <input
                            type="file"
                            accept=".pdf, .xlsx, .xls, .csv"
                            class="custom-file-input"
                            id="certification_file"
                            ref="files"
                            @change="handleFiles"
                          />
                          <label class="custom-file-label" for="customFile"
                            >Choose file</label
                          >
                        </div>
                        <div class="container">
                          <button
                            @click.prevent="save_certificate"
                            class=" p-2 mt-2 submit-edu"
                          >
                            Save Certifications
                          </button>
                        </div>
                      </div>
                      <div class="p-3">
                        <button
                          @click.prevent="showCertificate"
                          class="btn btn-primary m-3"
                        >
                          Add Certification
                        </button>
                      </div>
                    </div>

                    <div class=" col-12 d-flex justify-content-center">
                      <div class="jb_newslwtteter_button">
                        <div class="header_btn search_btn news_btn jb_cover">
                          <button @click.prevent="secondStep" type="submit">
                            Next Step
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                </transition>

                <div v-if="step == 3" class="container p-5">
                  <div>
                    <div class="certification_div">
                      <span
                        class="Referees text-danger float-right"
                        style="cursor: pointer"
                      >
                        <i
                          @click.prevent="removeReferres"
                          class="far fa-times-circle"
                        ></i>
                      </span>
                      <h5 class="text-center mb-3">Referees</h5>
                      <div class="referees">
                        <div class="form-group icon_form comments_form ">
                          <input
                            type="text"
                            class="form-control require"
                            required
                            placeholder="Full Name* please add the Title"
                            v-model="referrers.full_name"
                          />
                        </div>
                        <div class="form-group icon_form comments_form ">
                          <input
                            type="email"
                            class="form-control require"
                            required
                            placeholder="Emial Address*"
                            v-model="referrers.email"
                          />
                        </div>
                        <div class="form-group icon_form comments_form ">
                          <input
                            type="text"
                            class="form-control require"
                            required
                            placeholder="Referrer's Company Name*"
                            v-model="referrers.company_name"
                          />
                        </div>
                        <div class="form-group icon_form comments_form ">
                          <input
                            type="text"
                            class="form-control require"
                            required
                            placeholder="Position of The Referrer*"
                            v-model="referrers.company_position"
                          />
                        </div>
                        <div class="form-group icon_form comments_form ">
                          <input
                            input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number* e.g..080..070.."
                            class="form-control require"
                            required
                            v-model="referrers.phone"
                          />
                        </div>
                        <button @click="savereferrers" class="submit-edu p-2">
                          Save Referrers
                        </button>
                      </div>
                      <br />
                      <br />
                      <br />
                      <button
                        @click.prevent="addReferrer"
                        class="btn btn-primary mr-5"
                      >
                        Add Referrers
                      </button>
                    </div>
                  </div>

                  <br />
                  <br />
                  <br />
                  <div class="certification_div">
                    <h5 class="text-center mb-3">
                      Experiences<span
                        style="cursor: pointer"
                        class="experience text-danger float-right"
                      >
                        <i
                          @click.prevent="removeExperience"
                          class="far fa-times-circle"
                        ></i>
                      </span>
                    </h5>
                    <div class="form-group icon_form comments_form">
                      <input
                        type="text"
                        class="form-control require"
                        required
                        placeholder="Job Title..."
                        v-model="experiences.job_title"
                      />
                    </div>
                    <div class=" Experience mb-3">
                      <div class="form-group icon_form comments_form">
                        <input
                          type="text"
                          class="form-control require"
                          required
                          placeholder="Job Discription..."
                          v-model="experiences.job_description"
                        />
                      </div>
                      <div class="form-group icon_form comments_form ">
                        <input
                          type="text"
                          class="form-control require"
                          required
                          placeholder="Company's Name"
                          v-model="experiences.company_name"
                        />
                      </div>
                      <div class="form-group icon_form comments_form ">
                        <input
                          type="text"
                          class="form-control require"
                          required
                          placeholder="Company's Location"
                          v-model="experiences.company_location"
                        />
                      </div>
                      <div class="form-group icon_form comments_form ">
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id=""
                              >Years Worked</span
                            >
                          </div>
                          <input
                            placeholder="Start Date... e.g 1994"
                            v-model="experiences.date_from"
                            type="tel"
                            class="form-control"
                            required
                          />
                          <input
                            type="tel"
                            class="form-control require"
                            required
                            placeholder="End Date....e.g 2001"
                            v-model="experiences.date_to"
                          />
                        </div>
                      </div>

                      <button @click="saveExperience" class="submit-edu p-2">
                        Save Experiences
                      </button>
                    </div>
                    <button
                      @click.prevent="addExperience"
                      class="btn btn-primary m-3"
                    >
                      Add Experiences
                    </button>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div class="certification_div">
                    <div class="mb-2 text-center justify-content-center">
                      <h5 class>Add Skill</h5>
                      <p class="text-danger">Optional</p>
                    </div>
                    <div class="p-1">
                      <div class="skills">
                        <span
                          class="text-danger float-right"
                          style="cursor: pointer"
                        >
                          <i
                            @click.prevent="removeskills"
                            class="far fa-times-circle"
                          ></i>
                        </span>
                        <div class="input-group">
                          <textarea
                            class="form-control"
                            placeholder="Write a Short Discription"
                            v-model="skills.discription"
                          ></textarea>
                        </div>
                        <button class="submit-edu mt-2 p-2">
                          Save Skills
                        </button>
                      </div>
                      <br />
                      <button
                        @click.prevent="addskills"
                        class="btn btn-primary ml-2 mb-2"
                      >
                        Add Skills
                      </button>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div
                    class="container justify-content-center certification_div"
                  >
                    <h5 class="text-center mt-4 mb-2">
                      Upload Curriculum Vitae
                    </h5>
                    <h6 class="text-center mb-2">CV</h6>
                    <div
                      class="form-group icon_form comments_form  input-group"
                    >
                      <div class="custom-file">
                        <input
                          ref="cv"
                          type="file"
                          name="cv"
                          accept="application/pdf,.doc,.docx,application/msword"
                          id="cv"
                          class="custom-file-input"
                        />
                        <label class="custom-file-label" for="inputGroupFile04"
                          >Choose file</label
                        >
                      </div>
                      <div class="input-group-append">
                        <button class="btn cv_button" type="button">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class=" col-12 d-flex justify-content-center">
                      <div class="jb_newslwtteter_button">
                        <div class="header_btn search_btn news_btn jb_cover">
                          <button @click.prevent="nextStep" type="submit">
                            Final Step
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="step == 4">
                  <h3 class="text-center p-4">Pick A Category</h3>
                  <div class="container">
                    <multiselect
                      v-model="value"
                      tag-placeholder="Add this as new tag"
                      placeholder="Search or add a tag"
                      label="name"
                      track-by="code"
                      :options="options"
                      :multiple="true"
                      :taggable="true"
                      @tag="addTag"
                    ></multiselect>
                  </div>
                  <div class="m-3 col-12 d-flex justify-content-center">
                    <div class="jb_newslwtteter_button">
                      <div class="header_btn search_btn news_btn jb_cover">
                        <button @click="goToDashBoard" type="button">
                          Lets Go
                        </button>
                      </div>
                    </div>
                  </div>
                  <p>
                    <a href="#">
                      <span style="cursor:pointer" class="text-light"
                        ><u
                          >Click here if you were not automatically redirected
                        </u></span
                      ></a
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>

      <!-- Company Registration -->
      <div class="modal fade" id="myModal" role="dialog">
        <div
          class="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Company Register</h5>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div class="modal-body">
              <div class="container p-5">
                <ValidationProvider
                  name="Company Name"
                  rules="required|alpha"
                  v-slot="{ errors }"
                >
                  <div class="form-group icon_form comments_form">
                    <input
                      type="text"
                      class="form-control require"
                      placeholder="Company's Name*"
                      required
                      v-model="companys.company_name"
                    />
                    <i class="fas fa-user"></i>
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <ValidationProvider
                  name="Company Email"
                  rules="required|email"
                  v-slot="{ errors }"
                >
                  <div class="form-group icon_form comments_form">
                    <input
                      id="email"
                      type="email"
                      class="form-control  require"
                      required
                      autocomplete="email"
                      autofocus
                      placeholder="Email Address*"
                      v-model="companys.company_email"
                    />
                    <i class="fas fa-envelope"></i>
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <ValidationProvider
                  name="Company Address"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <div class="form-group icon_form comments_form">
                    <textarea
                      class="form-control  require"
                      required
                      autofocus
                      placeholder="Company's Address*"
                      v-model="companys.company_address"
                    >
                    </textarea>
                    <i class="fas fa-map-marker-alt"></i>
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <ValidationObserver>
                  <ValidationProvider
                    :rules="{
                      required: true,
                      regex: /^(?=.*\d)(?=.*[a-zA-Z]).{6,100}$/,
                      confirmed: 'confirmation'
                    }"
                    v-slot="{ errors }"
                    name="Password"
                  >
                    <div class="form-group icon_form comments_form input-group">
                      <input
                        v-bind:type="[showPassword ? 'text' : 'password']"
                        id="Company Password"
                        class="form-control "
                        placeholder="Password * ex. letters and numbers are compulsory"
                        v-model="companys.company_password"
                      />
                      <div class="input-group-append">
                        <span
                          class="input-group-text"
                          @click="showPassword = !showPassword"
                        >
                          <i
                            class="fa"
                            :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>
                    </div>
                    <div id="blk">{{ errors[0] }}</div>
                  </ValidationProvider>

                  <ValidationProvider
                    v-slot="{ errors }"
                    vid="confirmation"
                    name="Confirm Password"
                  >
                    <div class="form-group icon_form comments_form input-group">
                      <input
                        v-bind:type="[
                          showConfirmPassword ? 'text' : 'password'
                        ]"
                        id="company_confirm-password"
                        required
                        class="form-control short "
                        placeholder="Confirm Password *"
                        v-model="companys.company_password_confirmation"
                      />
                      <div class="input-group-append">
                        <span
                          class="input-group-text"
                          @click="showConfirmPassword = !showConfirmPassword"
                        >
                          <i
                            class="fa"
                            :class="[
                              showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'
                            ]"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <div></div>
                      </div>
                    </div>
                    <div id="blk">{{ errors[0] }}</div>
                  </ValidationProvider>
                </ValidationObserver>
                <br />

                <div class="jb_newslwtteter_button">
                  <div class="header_btn search_btn news_btn jb_cover">
                    <button @click="registercompany" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
// import VueToastr from "vue-toastr";
// import { EventBus } from "@/components/eventBus.js";
// import Uploader from "@/components/Uploader.vue";
// import StepFour from "@/components/StepFour.vue";
import axios from "axios";
import NaijaStates from "naija-state-local-government";
import "vue-input-search/dist/vue-search.css";
// import VueSearch from "vue-input-search/dist/vue-search.common";
import Multiselect from "vue-multiselect";

export default {
  components: {
    // Uploader
    // StepFour
    // "vue-search": VueSearch,
    Multiselect
    // VueToastr
  },
  name: "SignUpDiv",
  // props: ["EventBus"],
  data: function() {
    return {
      uploadedFiles: [],
      isHidden: true,
      successResponse: false,
      beforeResponse: false,
      // certification_div_none: false,
      // showexperience_div: false,
      // showreferrers: false,
      // showskill: false,
      value: [],
      onLine: navigator.onLine,
      showBackOnline: false,
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
      educational_details_file: {},
      attachments: [],
      data: new FormData(),
      errors: {},
      percentCompleted: 0,
      users: [],
      country: 0,
      countries: [],
      state: 0,
      states: NaijaStates.states(),
      lga: "",
      showSecondDiv: false,
      showDiv: false,
      companys: {
        company_name: "",
        company_email: "",
        company_password: "",
        company_password_confirmation: "",
        company_sector: "",
        company_address: "",
        company_contact_number: ""
      },
      inputs: {
        first_name: "",
        last_name: "",
        middle_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      skills: {
        discription: ""
      },
      experiences: {
        job_description: "",
        job_title: "",
        company_name: "",
        company_location: "",
        date_from: "",
        date_to: ""
      },
      rows: [],
      id: 0,
      personal_details: {},
      education: {},
      referrers: {
        phone_number: "",
        company_position: "",
        company_name: "",
        email: "",
        full_name: ""
      },
      certifications: {
        title: "",
        discription: ""
      },
      forms: {
        dob: "",
        phone: "",
        school_name: "",
        degree: "",
        grade: "",
        start_date: "",
        to: "",
        nationality: "",
        address: "",
        id: "",
        gender: "",
        marital_status: "",
        course_of_study: "",
        upload: [],
        selectedState: "",
        selectedLGA: ""
      },
      updatedForms: [],
      confirmation: "",
      totalstep: 4,
      step: 1,
      showPassword: false,
      showConfirmPassword: false,
      valid: true,
      success: false,
      // errors: {},
      message: null,
      files: [],
      selectedFiles: new FormData()
    };
  },
  methods: {
    updateOnlineStatus(e) {
      const { type } = e;
      this.onLine = type === "online";
    },
    getAttachmentSize() {
      this.upload_size = 0;
      this.attachments.map(item => {
        this.upload_size += parseInt(item.size);
      });

      this.upload_size = Number(this.upload_size.toFixed(1));
      this.$forceUpdate();
    },
    prepareFields() {
      if (this.attachments.length > 0) {
        for (var i = 0; i < this.attachments.length; i++) {
          let attachment = this.attachments[i];
          this.data.append("attachments[]", attachment);
        }
      }
    },
    removeAttachment(attachment) {
      this.attachments.splice(this.attachments.indexOf(attachment), 1);

      this.getAttachmentSize();
    },
    uploadFieldChange() {
      var fileInput = document.getElementById("educational_details_file");
      this.files = fileInput.files;
      // console.log("file length " + this.files.length);
      if (!this.files.length) return;
      for (let i = 0; i < this.files.length; i++) {
        // this.selectedFiles.append("filename[]", this.files[i]);
        this.attachments.push(this.files[i]);
      }
    },
    resetData() {
      this.data = new FormData();
      this.attachments = [];
    },
    start() {
      console.log("Starting File Management Component");
    },
    registercompany() {
      if (this.companys.company_name == "") {
        this.$toastr.e("Please Fill Company's Name");
        return false;
      }
      if (this.companys.company_email == "") {
        this.$toastr.e("Please Fill Company's Email");
        return false;
      }
      if (this.companys.company_address == "") {
        this.$toastr.e("Please Fill Company's Address");
        return false;
      }
      if (this.companys.company_password == "") {
        this.$toastr.e("Please Fill Password");
        return false;
      }
      if (this.companys.company_password_confirmation == "") {
        this.$toastr.e("Please Fill Confirm Password");
        return false;
      }
      if (
        this.companys.company_password !==
        this.inputs.company_password_confirmation
      ) {
        this.$toastr.e("Password and Confirm Password does not Match");
        return false;
      }
      if (this.companys.company_sector == "") {
        this.$toastr.e("Please Choose a sector");
        return false;
      }
      if (this.companys.company_contact_number == "") {
        this.$toastr.e("Please Fill Contact Number");
        return false;
      }
      axios
        .post("https://api.myjobdesk.com/api/register", this.companys)

        .then(response => {
          console.log(this.inputs);
          console.log(response);
          const token = response.data.accessToken;
          localStorage.setItem("token", token);
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.log(error);
        });

      var accessToken = localStorage.getItem("token") || "";
      console.log(accessToken);
    },
    savePersonalDetails() {
      console.log("this is submiting a ");
      if (this.forms.dob == "") {
        this.$toastr.e("Please Fill Your Date of Birth");
        return false;
      }
      console.log("this is submiting b ");
      if (this.forms.gender == "") {
        this.$toastr.e("Please Select Gender");
        return false;
      }
      console.log("this is submiting c");
      if (this.forms.marital_status == "") {
        this.$toastr.e("Please Select Marital Status");
        return false;
      }
      console.log("this is submiting d");
      if (this.forms.phone == "") {
        this.$toastr.e("Please Fill your Phone Number");
        return false;
      }
      console.log("this is submiting e ");
      if (this.forms.address == "") {
        this.$toastr.e("Please Fill your Address");
        return false;
      }
      console.log("this is submiting f ");
      if (this.forms.nationality == "") {
        this.$toastr.e("Please Select Nationality");
        return false;
      }
      console.log("this is submiting g ");
      if (this.forms.selectedState == "") {
        this.$toastr.e("Please Select a State");
        return false;
      }
      console.log("this is submiting h ");
      if (this.forms.selectedLGA == "") {
        this.$toastr.e("Please Select a Local Government");
        return false;
      }

      var request = {};
      request.marital_status = this.forms.marital_status;
      request.gender = this.forms.gender;
      request.state_of_origin = this.forms.selectedState;
      request.lga = this.forms.selectedLGA;
      request.nationality = this.forms.nationality;
      request.address = this.forms.address;
      request.date_of_birth = this.forms.dob;
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Register step 2"
      };
      axios
        .post("https://api.myjobdesk.com/api/personal_details", request, {
          headers
        })
        .then(response => {
          console.log(response);
          this.marital_status = response.marital_status;
          this.selectedState = response.selectedState;
          this.gender = response.gender;
          this.selectedLGA = response.selectedLGA;
          this.selectedState = response.selectedState;
          this.nationality = response.nationality;
          this.address = response.address;
          this.dob = response.dob;
          if (response.status == "200") {
            this.$toastr.s("Persona Details Saved");
            return true;
          } else {
            this.$toastr.e(
              "Oops, something went wrong, please try again later"
            );
            return false;
          }
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.log(error);
        });
      this.showErrorToastr;
    },
    registercandidate() {
      document.getElementsByClassName("step").style.display = "block";
    },
    hideForm() {
      document.getElementsByClassName("edu-form")[0].style.display = "none";
    },
    hideCertificateForm() {
      document.getElementsByClassName("certify")[0].style.display = "none";
      document.getElementsByClassName("cert")[0].style.display = "none";
    },
    submitEducationalDetails() {
      if (!this.checkEducation()) return false;
      this.selectedFiles.append("school_name", this.forms.school_name);
      this.selectedFiles.append("end_date", this.forms.end_date);
      this.selectedFiles.append("start_date", this.forms.start_date);
      this.selectedFiles.append("course_of_study", this.forms.course_of_study);
      this.selectedFiles.append("grade", this.forms.grade);
      this.selectedFiles.append("degree", this.forms.degree);
      if (this.attachments.length > 0) {
        for (let i = 0; i < this.attachments.length; i++) {
          this.selectedFiles.append("filename[]", this.attachments[i]);
        }
      }

      if (!this.onLine) {
        this.$toastr.e("Please check your internet connection");
        return false;
      }

      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Submitting Educational Detail",
        "Content-Type": "multipart/form-data"
      };
      console.log(this.selectedFiles);
      axios
        .post(
          "api.myjobdesk.com/educational_detail/create",
          this.selectedFiles,
          {
            headers
          }
        )
        .then(response => {
          console.log(response);
          console.log(response.data.education.id);
          this.updatedForms.push(response.data.education);
          this.id++;
          document.getElementsByClassName("edu-form")[0].style.display = "none";
          this.forms.school_name = "";
          this.forms.degree = "";
          this.forms.course_of_study = "";
          this.forms.grade = "";
          this.forms.start_date = "";
          this.forms.end_date = "";
          this.files = [];
          this.attachments = [];
          this.selectedFiles = new FormData();
          document.getElementById("educational_details_file").value = "";

          if (response.status == "200") {
            this.$toastr.s("Thank you for submitting a new educational record");
            return true;
          } else {
            this.$toastr.e(
              "Oops, something went wrong, please try again later"
            );
            return false;
          }
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.log(error.message);
        });
    },
    showForm() {
      document.getElementsByClassName("edu-form")[0].style.display = "block";
    },
    showCertificate() {
      document.getElementsByClassName("certify")[0].style.display = "block";
      document.getElementsByClassName("cert")[0].style.display = "block";
    },
    openNav: function() {
      document.getElementById("myNav").style.width = "100%";
    },
    closeNav: function() {
      document.getElementById("myNav").style.width = "0%";
    },
    checkEducation: function() {
      if (this.forms.school_name == "") {
        this.$toastr.e("Please check and complete School name");
        return false;
      }
      if (this.forms.course_of_study == "") {
        this.$toastr.e("Please check and complete Course of Study");
        return false;
      }
      if (this.forms.degree == "") {
        this.$toastr.e("Please Type Degree Type");
        return false;
      }
      if (this.forms.start_date == "") {
        this.$toastr.e("Please set a Start date");
        return false;
      }
      if (new Date(this.forms.start_date).toString() === "Invalid Date") {
        this.$toastr.e("Start date is invalid");
        return false;
      }
      if (this.forms.end_date == "") {
        this.$toastr.e("Please set an End Date");
        return false;
      }
      if (new Date(this.forms.end_date).toString() === "Invalid Date") {
        this.$toastr.e("End date is invalid");
        return false;
      }
      if (this.forms.grade < 1) {
        this.$toastr.e("Please Fill your grade");
        return false;
      }

      return true;
    },
    nextStep: function() {
      this.step++;
    },
    onSubmit() {
      console.log("Onsubmit is working fine");
      console.log(this.inputs);
    },
    changeState() {
      this.lga = NaijaStates.lgas(this.forms.selectedState);
      console.log(this.forms.selectedState);
    },
    changeLGA() {
      console.log(this.forms.selectedLGA);
    },
    removeupdatedForms: function(id) {
      this.updatedForms.splice(id, 1);
    },
    secondStep() {
      // this.checkEducation();
      // if (this.row.title == "") {
      //   this.$toastr.e("Please give a Title");
      //   return false;
      // }
      // if (this.row.description == "") {
      //   this.$toastr.e("Please Describe the Certificate ");
      //   return false;
      // }
      // if (this.row.file == "") {
      //   this.$toastr.e("Please pick a file");
      //   return false;
      // }
      this.step++;
    },
    goToDashBoard: function() {
      // if (this.value.length < 1) {
      //   this.$toastr.e("Please Pick at Least a Sector");
      //   return false;
      // }
      axios
        .post("https://api.myjobdesk.com/api/", this.value)

        .then(response => {
          console.log(this.value);
          console.log(response);
          const token = response.data.accessToken;
          localStorage.setItem("token", token);
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.log(error);
        });

      var accessToken = localStorage.getItem("token") || "";
      console.log(accessToken);
    },
    finalButton: function() {},
    checkReferees: function() {
      // if (this.referrers.name == "") {
      //   this.$toastr.e("Please give a Title");
      //   return false;
      // }
      // if (this.referrers.email == "") {
      //   this.$toastr.e("Please give a Title");
      //   return false;
      // }
      // if (this.referrers.phone_number == "") {
      //   this.$toastr.e("Please give a Title");
      //   return false;
      // }
      // if (this.referrers.company == "") {
      //   this.$toastr.e("Please give a Title");
      //   return false;
      // }
      // if (this.referrers.position_in_the_company == "") {
      //   this.$toastr.e("Please give a Title");
      //   return false;
      // }
    },
    setFilename: function(event, row) {
      var file = event.target.files[0];
      row.file = file;
    },
    addExperience: function() {
      document.getElementsByClassName("Experience")[0].style.display = "block";
      document.getElementsByClassName("experience")[0].style.display = "block";
    },
    removeExperience: function() {
      document.getElementsByClassName("Experience")[0].style.display = "none";
      document.getElementsByClassName("experience")[0].style.display = "none";
    },
    addReferrer: function() {
      document.getElementsByClassName("Referees")[0].style.display = "block";
      document.getElementsByClassName("referees")[0].style.display = "block";
    },
    removeReferres: function() {
      document.getElementsByClassName("Referees")[0].style.display = "none";
      document.getElementsByClassName("referees")[0].style.display = "none";
    },

    addskills: function() {
      document.getElementsByClassName("skills")[0].style.display = "block";
    },
    removeskills: function() {
      document.getElementsByClassName("skills")[0].style.display = "none";
    },
    validateEmail(email) {
      const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
      return re.test(email);
    },
    register: function() {
      if (this.inputs.first_name == "") {
        this.$toastr.e("Please Fill First Name");
        return false;
      }
      if (this.inputs.last_name == "") {
        this.$toastr.e("Please Fill Last Name");
        return false;
      }
      if (this.inputs.middle_name == "") {
        this.$toastr.e("Please Fill Middle Name");
        return false;
      }
      if (this.inputs.password_confirmation == "") {
        this.$toastr.e("Please Fill Confirm Password");
        return false;
      }
      if (this.inputs.email == "") {
        this.$toastr.e("Please Fill Email");
        return false;
      }
      if (!this.validateEmail(this.inputs.email)) {
        this.$toastr.e(
          "Please enter at least 6 letters which includes at least number and letter"
        );
        return false;
      }
      if (this.inputs.password == "") {
        this.$toastr.e("Please Fill Password");
        return false;
      }
      if (this.inputs.password !== this.inputs.password_confirmation) {
        this.$toastr.e("Password and Confirm Password does not Match");
        return false;
      }

      if (!this.onLine) {
        this.$toastr.e("Please check your internet connection");
        return false;
      }

      this.beforeResponse = true;

      axios
        .post("https://api.myjobdesk.com/api/register", this.inputs)

        .then(response => {
          console.log(this.inputs);
          console.log(response);
          const token = response.data.accessToken;
          localStorage.setItem("token", token);
          this.successResponse = response.status;
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.log(error);
        });

      // if (this.successResponse == "200") {
      //   this.$toastr.s(
      //     "You have successfully started registering your information with MyJobDesk"
      //   );
      //   return true;
      // } else {
      //   this.$toastr.e(
      //     "Oops, something went wrong, please try again later"
      //   );
      //   return false;
      // }
      var accessToken = localStorage.getItem("token") || "";
      console.log(accessToken);
    },
    handleFiles() {
      var uploadedFiles = document.getElementById("certification_file");
      for (var i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
      }
    },
    saveskills() {
      if (!this.onLine) {
        this.$toastr.e("Please check your internet connection");
        return false;
      }
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Submitting Referee "
      };
      axios
        .post("", this.skills, {
          headers
        })
        .then(response => {
          this.skills.description = "";
          if (response.status == "200") {
            this.$toastr.s("Skill Saved");
            return true;
          } else {
            this.$toastr.e(
              "Oops, something went wrong, please try again later"
            );
            return false;
          }
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.log(error);
        });
      this.showErrorToastr;
    },
    savereferrers() {
      if (!this.onLine) {
        this.$toastr.e("Please check your internet connection");
        return false;
      }
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Submitting Referee "
      };
      axios
        .post("", this.certifications, {
          headers
        })
        .then(response => {
          this.referrers.full_name = "";
          this.referrers.email = "";
          this.referrers.company_name = "";
          this.referrers.company_position = "";
          this.referrers.phone_number = "";
          if (response.status == "200") {
            this.$toastr.s("Referee Saved");
            return true;
          } else {
            this.$toastr.e(
              "Oops, something went wrong, please try again later"
            );
            return false;
          }
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.log(error);
        });
      this.showErrorToastr;
    },
    saveExperience() {
      if (!this.onLine) {
        this.$toastr.e("Please check your internet connection");
        return false;
      }
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Submitting Referee "
      };
      axios
        .post("", this.experiences, {
          headers
        })
        .then(response => {
          this.experiences.job_description = "";
          this.experiences.job_title = "";
          this.experiences.company_name = "";
          this.experiences.company_location = "";
          this.experiences.date_from = "";
          this.experiences.date_to = "";
          if (response.status == "200") {
            this.$toastr.s("Experience Saved");
            return true;
          } else {
            this.$toastr.e(
              "Oops, something went wrong, please try again later"
            );
            return false;
          }
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.log(error);
        });
      this.showErrorToastr;
    },
    save_certificate() {
      if (!this.onLine) {
        this.$toastr.e("Please check your internet connection");
        return false;
      }

      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Submitting Certifications",
        "Content-Type": "multipart/form-data"
      };
      console.log(this.certifications, this.uploadedFiles);
      axios
        .post("http://api.myjobdesk.com/certificates", this.certifications, {
          headers
        })
        .then(response => {
          this.id++;
          document.getElementsByClassName("certify")[0].style.display = "none";
          document.getElementsByClassName("cert")[0].style.display = "none";
          this.certifications.title = "";
          this.certifications.discription = "";
          this.files = [];
          this.attachments = [];
          this.selectedFiles = new FormData();
          document.getElementById("certification_file").value = "";

          if (response.status == "200") {
            this.$toastr.s("Certification Saved");
            return true;
          } else {
            this.$toastr.e(
              "Oops, something went wrong, please try again later"
            );
            return false;
          }
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.log(error.message);
        });
    }
  },
  watch: {
    onLine(v) {
      if (v) {
        this.showBackOnline = true;
        setTimeout(() => {
          this.showBackOnline = false;
        }, 1000);
      }
    },

    beforeResponse() {
      if (this.beforeResponse) {
        this.$toastr.w("Your form is being submitted, please wait");
      }
    },

    successResponse() {
      if (this.successResponse == 200) {
        this.$toastr.s(
          "Your registration is successfull, please continue in next step"
        );
        this.step++;
        this.successResponse = false;
        this.beforeResponse = false;
      }
    }
  },
  mounted() {
    window.addEventListener("online", this.updateOnlineStatus);
    window.addEventListener("offline", this.updateOnlineStatus);

    console.log("This is good");
    // EventBus.$on("onSubmit", this.nextStep);

    // document.getElementById("blk").onchange = function() {
    //   if (document.getElementById("blk").innerHTML != "") {
    //     document.getElementById("blk").classList.add("margina");
    //   }
    // };
  },
  created() {},
  beforeDestroy() {
    window.removeEventListener("online", this.updateOnlineStatus);
    window.removeEventListener("offline", this.updateOnlineStatus);
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.Experience {
  display: none;
}
.experience {
  display: none;
}
.skills {
  display: none;
}
.referees {
  display: none;
}
.Referees {
  display: none;
}
.certify {
  display: none;
}
.cert {
  cursor: pointer !important;
  display: none;
}
.remove_certification {
  display: none;
}
.custom-file-label {
  width: 100% !important;
}
.slide-fade-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.certification_div {
  border-left: 5px solid #990066;
  background-color: rgb(251, 251, 251);
  padding: 20px;
  margin-left: 19px;
  margin-right: 18px;
}

.personal_details_div {
  border-left: 5px solid #990066;
  background-color: rgb(251, 251, 251);
}
.add_educational_details_div {
  border-left: 5px solid #990066;
  background-color: rgb(251, 251, 251);
  padding: 25px;
}
.changing {
  background: white;
  color: #990066;
  border: 2px solid #990066;
}
.changing:hover {
  background: #990066;
  color: white;
}
.info {
  color: white;
  font-size: smaller;
  margin-left: -25px;
}
.negative-margin-left {
  margin-left: -25px;
}
.float {
  float: right;
}
.r2l {
  margin-right: 5%;
  margin-left: 5%;
}
.add {
  padding: 5px 20px;
  outline: none;
  border: none;
  cursor: pointer;
  background: green;
  color: white;
}
.edu-form {
  display: none;
}
.fbook {
  background: #3b5998;
  padding: 8px 80px;
  color: white;
  box-sizing: border-box;
}

.fbook:hover {
  background: white;
  border: #3b5998 1px solid;
  color: #3b5998;
  margin-bottom: 2px;
}
.linkedin {
  background: #0e76a8;
  border: 1px white solid;
  color: white;
  box-sizing: border-box;
  padding: 8px 80px;
}
.linkedin:hover {
  background: white;
  border: 1px #0e76a8 solid;
  color: #0e76a8;
}
.google {
  background: #ea4335;
  color: white;
  box-sizing: border-box;
  padding: 8px 80px;
}
.google:hover {
  background: white;
  border: 1px #ea4335 solid;
  color: #ea4335;
}
ul .google,
.linkedin,
.fbook {
  display: block;
  width: 400px;
  text-align: center;
  margin: 2px auto;
}
.bill {
  padding: 20px;
}
.preview {
  display: block;
  width: 50%;
  color: #d3adc6;
  background: red;
}
.background {
  /* padding: 0 20%; */
  padding-bottom: 20px;
  border-radius: none;
  color: white;
  /* margin: 0 auto; */
  width: 100%;
  box-sizing: border-box;
}
.no-border {
  border: 1px solid white;
}
h5 {
  color: #990066;
}
.card-body {
  border: none;
}
.submit-edu {
  padding: 10px;
  outline: none;
  border: none;
  background: #990066;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  width: 100%;
  font-weight: 700;
}
.submit-edu:hover {
  opacity: 0.9;
}
.employee-form {
  border: 1px solid #ffd5f1;
  padding: 40px;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  width: 100%;
  color: black;
}
.employee-form p {
  color: red;
}
/* .employee-form h6 {
  display: block;
} */
span {
  cursor: pointer;
}

#blk {
  display: block;
}

.margina {
  margin-top: -20px !important;
  margin-bottom: 20px !important;
}
.bttn {
  color: white;
  background: linear-gradient(to right, #990066, #af0066, #c90075);
}
.bttn:hover {
  opacity: 0.9;
}
.pad {
  padding: 50px 30%;
}
.edu-prev {
  border: #990066 1px dashed;
  padding: 0 5px 30px 30px;
  cursor: default;
}
.edu-prev h6 {
  padding: 5px;
  cursor: default;
  color: #990066;
}
.move-right {
  margin-left: 20px;
}
@media (max-width: 500px) {
  .pad {
    width: 100%;
    /* padding: 20px; */
    margin-right: -10px;
    box-sizing: border-box;
  }
}
@media (max-width: 1006px) {
  .pad {
    width: 100%;
    padding: 20px;
  }
}
@media (max-width: 989px) {
  .background {
    padding: 0;
    padding-bottom: 20px;
    border-radius: none;
    color: white;
    width: 100%;
  }
  .center button {
    display: block;
    margin: 20px;
  }
}
@media (max-width: 766px) {
  .center button {
    display: block;
  }
}
@media (max-width: 581px) {
  .second_div button {
    display: block;
  }
}
.fileContainer {
  overflow: hidden;
  position: relative;
}

.fileContainer [type="file"] {
  cursor: inherit;
  display: block;
  font-size: 999px;
  filter: alpha(opacity=0);
  min-height: 40px;
  min-width: 100%;
  opacity: 0;
  position: absolute;
  right: 0;
  text-align: right;
  top: 0;
}

.fileContainer {
  background: #e3e3e3;
  float: left;
  padding: 0.5em;
}

.fileContainer [type="file"] {
  cursor: pointer;
}
.btn-outline {
  background: blue;
  color: white;
}
.center {
  margin-left: 28%;
}
.emoji {
  font-weight: 700;
}
.link_button {
  color: white;
}
.link_button:hover {
  color: #990066;
}
.cv_button {
  background: #990066;
  color: white;
}
.certification_preview {
  border-top: 10px solid #990066;
  background: #f5f5f5;
  border-bottom: 1px solid #990066;
  border-right: 1px solid #990066;
  border-left: 1px solid #990066;
}
.blue-theme {
  display: none;
}
.none-theme {
  display: block;
}
</style>
