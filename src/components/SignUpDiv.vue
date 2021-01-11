<template>
  <div>
    <div class="card mb-3">
      <div class="ml-5 p-5 d-flex justify-content-center">
        <div class="jb_newslwtteter_button">
          <div class="header_btn search_btn news_btn jb_cover">
            <button
              data-toggle="modal"
              data-target="#myModal"
              @click.prevent="showSecondDiv = !showSecondDiv"
            >
              Company <i class="fas fa-users"></i>
            </button>
          </div>
        </div>
        <div class="jb_newslwtteter_button">
          <div class="header_btn search_btn news_btn jb_cover">
            <button
              type="button"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              @click.prevent="showDiv = !showDiv"
            >
              Applicant <i class="fas fa-user-edit"></i>
            </button>
          </div>
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
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
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
                            class="col-12 btn btn-success"
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
                            class="edu-prev mb-3"
                            v-for="updatedForm in updatedForms"
                            :key="updatedForm.id"
                          >
                            <h6 class="">
                              {{ updatedForms.school_name }}
                            </h6>
                            {{ updatedForms.degree }},
                            {{ updatedForms.course_of_study }},
                            {{ updatedForms.grade }},
                            {{ updatedForms.start_date }} to
                            {{ updatedForms.end_date }}
                            <button>X</button>
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
                                rules="required|numeric|max_value:4"
                                v-slot="{ errors }"
                              >
                                <label for="start_date">From: </label>
                                <div class="form-group icon_form comments_form">
                                  <input
                                    class="form-control"
                                    type="text"
                                    v-model="forms.start_date"
                                  />
                                </div>
                                <div id="blk">{{ errors[0] }}</div>
                              </ValidationProvider>
                              <br />

                              <ValidationProvider
                                name="Year"
                                rules="required|numeric|max_value:4"
                                v-slot="{ errors }"
                              >
                                <label for="to">To: </label>
                                <div class="form-group icon_form comments_form">
                                  <input
                                    class="form-control"
                                    type="text"
                                    v-model="forms.end_date"
                                    required
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
                                  <!-- <p class="info">Only PDF, Doc, docx files only</p> -->
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
                      <div class="text-center p-3">
                        <h5>Certifications</h5>
                        <p class="text-danger">(Optional)</p>
                      </div>
                      <div
                        class="border border-secondary rounded p-5 mb-2"
                        v-for="(row, index) in rows"
                        :key="row"
                      >
                        <div>
                          <label for="">Title</label>
                          <input
                            class="form-control"
                            type="text"
                            v-model="row.title"
                          />
                        </div>
                        <div>
                          <label for="">Description:</label>
                          <input
                            class="form-control"
                            type="text"
                            v-model="row.description"
                          />
                        </div>
                        <br />
                        <div class="custom-file">
                          <label class="fileContainer">
                            {{ row.file.name }}
                            <input
                              type="file"
                              accept=".pdf, .xlsx, .xls, .csv"
                              @change="setFilename($event, row), validate"
                              :id="index"
                            />
                            File</label
                          >
                        </div>
                        <div class="mr-5">
                          <button
                            class="btn btn-danger"
                            v-on:click="removeElement(index)"
                            style="cursor: pointer"
                          >
                            Remove Certification
                          </button>
                        </div>
                      </div>
                      <div>
                        <button
                          class="btn btn-primary m-3"
                          @click.prevent="addRow"
                        >
                          Add Certification
                        </button>
                        <div class="container">
                          <button
                            @click="saveCertifications"
                            class=" mt-4 btn btn-success col-12"
                          >
                            Save Certifications
                          </button>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <br />

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
                </transition>
                <div v-if="step == 3" class="container p-5">
                  <div class="certification_div">
                    <h5 class="text-center mb-3">Referees</h5>
                    <div v-for="(referrer, key) in referrers" :key="key">
                      <div class="form-group icon_form comments_form ">
                        <input
                          type="text"
                          class="form-control require"
                          required
                          placeholder="Full Name* please add the Title"
                          v-model="referrers.name"
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
                          v-model="referrers.position_in_the_company"
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
                          v-model="referrers.phone_number"
                        />
                      </div>
                      <button
                        @click.prevent="removeReferres"
                        class="btn btn-danger m-2"
                      >
                        Remove Referrers
                      </button>
                    </div>
                    <br />
                    <br />
                    <br />
                    <button
                      @click.prevent="addReferrer"
                      class="btn btn-primary"
                    >
                      Add Referrers
                    </button>
                    <button class="btn btn-success m-3 col-12">
                      Save Referrers
                    </button>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div class="certification_div">
                    <h5 class="text-center mb-3">Experiences</h5>
                    <div v-for="(experience, ex) in experiences" :key="ex">
                      <div class="form-group icon_form comments_form ">
                        <input
                          type="text"
                          class="form-control require"
                          required
                          placeholder="Full Name* ex... Dr, Mr, Mrs..."
                          v-model="experiences.jd"
                        />
                      </div>
                      <div class="form-group icon_form comments_form ">
                        <input
                          type="text"
                          class="form-control require"
                          required
                          placeholder="Company Name"
                          v-model="experiences.experience_company_name"
                        />
                      </div>
                      <div class="form-group icon_form comments_form ">
                        <input
                          type="tel"
                          class="form-control require"
                          required
                          placeholder="Full Name* ex... Dr, Mr, Mrs..."
                          v-model="experiences.date_to"
                        />
                      </div>
                      <div class="form-group icon_form comments_form ">
                        <input
                          type="tel"
                          class="form-control require"
                          required
                          placeholder="Full Name* ex... Dr, Mr, Mrs..."
                          v-model="experiences.date_from"
                        />
                      </div>
                      <button
                        @click.prevent="removeExperience"
                        class="btn btn-danger"
                      >
                        Remove Experiences
                      </button>
                    </div>
                    <button
                      @click.prevent="addExperience"
                      class="btn btn-primary m-3"
                    >
                      Add Experiences
                    </button>
                    <button class="btn btn-success col-12">
                      Save Experiences
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
                    <div class="p-5">
                      <div v-for="(skill, sk) in skills" :key="sk">
                        <div class="input-group">
                          <textarea
                            class="form-control"
                            placeholder="Write a Short Discription"
                            v-model="skills.discription"
                          ></textarea>
                        </div>

                        <div class="mt-2">
                          <button
                            class="btn btn-danger"
                            @click.prevent="removeskills"
                            style="cursor: pointer"
                          >
                            Remove Skill
                          </button>
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                      <button
                        @click.prevent="addskills"
                        class="btn btn-primary ml-2 mb-2"
                      >
                        Add Skills
                      </button>
                      <button class="btn btn-success col-12">
                        Save Skills
                      </button>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div
                    class="container justify-content-center certification_div"
                  >
                    <h5 class="text-center m-4">Upload Curriculum Vitae</h5>
                    <div
                      class="form-group icon_form comments_form  input-group"
                    >
                      <div class="custom-file">
                        <input
                          ref="cv"
                          type="file"
                          name="cv"
                          accept="application/pdf,.doc,.docx,application/msword"
                          multiple
                          id="cv"
                          class="custom-file-input"
                        />
                        <label class="custom-file-label" for="inputGroupFile04"
                          >Choose file</label
                        >
                      </div>
                      <div class="input-group-append">
                        <button class="btn btn-success" type="button">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
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
import { EventBus } from "@/components/eventBus.js";
// import Uploader from "@/components/Uploader.vue";
// import StepFour from "@/components/StepFour.vue";
import axios from "axios";
import NaijaStates from "naija-state-local-government";

export default {
  components: {
    // Uploader
    // StepFour
    // VueToastr
  },
  name: "SignUpDiv",
  // props: ["EventBus"],
  data: function() {
    return {
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
      skills: [],
      experiences: [],
      rows: [],
      id: 0,
      personal_details: {},
      education: {},
      referrers: [],
      certifications: {
        images: [],
        input: []
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
      console.log("file length " + this.files.length);
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
    addNewForm() {
      const newDet = this.education;
      var obj = JSON.stringify(newDet);
      obj = JSON.parse(obj);
      this.updatedForms.push(obj);
      this.id++;
      console.log(this.updatedForms);

      document.getElementsByClassName("edu-form")[0].style.display = "none";
      this.forms.dob = "";
      this.forms.school_name = "";
      this.forms.degree = "";
      this.forms.course_of_study = "";
      this.forms.grade = "";
      this.forms.start_date = "";
      this.forms.end_date = "";
      this.forms.upload = "";

      if (this.id == undefined) {
        this.id = 0;
        this.personal_details.dob = this.forms.dob;
        this.personal_details.phone = this.forms.phone;
        this.personal_details.gender = this.forms.gender;
        this.personal_details.marital_status = this.forms.marital_status;
        this.personal_details.nationality = this.forms.nationality;
        this.personal_details.state_of_origin = this.forms.selectedState;
        this.personal_details.local_government_origin = this.forms.selectedLGA;
        this.personal_details.address = this.forms.address;
      }
      this.forms.id = this.id;
      this.education.school_name = this.forms.school_name;
      this.education.degree = this.forms.degree;
      this.education.course_of_study = this.forms.course_of_study;
      this.education.grade = this.forms.grade;
      this.education.start_date = this.forms.start_date;
      this.education.end_date = this.forms.end_date;
      this.education.upload = this.forms.upload;
    },
    hideForm() {
      document.getElementsByClassName("edu-form")[0].style.display = "none";
    },
    submitEducationalDetails() {
      this.checkEducation();
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
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Submitting Educational Detail",
        "Content-Type": "multipart/form-data"
      };
      console.log(this.selectedFiles);
      axios
        .post(
          "https://api.myjobdesk.com/api/educational_details",
          this.selectedFiles,
          {
            headers
          }
        )
        .then(response => {
          console.log(response);
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
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.log(error.message);
        });
    },
    showForm() {
      document.getElementsByClassName("edu-form")[0].style.display = "block";
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
      if (this.forms.end_date == "") {
        this.$toastr.e("Please set an End Date");
        return false;
      }
      if (this.forms.grade < 1) {
        this.$toastr.e("Please Fill your grade");
        return false;
      }
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
    addRow: function() {
      this.rows.push({
        title: "",
        description: "",
        file: {
          name: "Choose "
        }
      });
    },
    removeElement: function(index) {
      this.rows.splice(index, 1);
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
      this.experiences.push({
        jd: "",
        experience_company_name: "",
        date_from: "",
        date_to: ""
      });
    },
    removeExperience: function(ex) {
      this.experiences.splice(ex, 1);
    },
    addReferrer: function() {
      this.referrers.push({
        name: "",
        email: "",
        phone_number: "",
        company: "",
        position_in_the_company: ""
      });
    },
    removeReferres: function(key) {
      this.referrers.splice(key, 1);
    },

    addskills: function() {
      this.skills.push({
        discription: ""
      });
    },
    removeskills: function(sk) {
      this.skills.splice(sk, 1);
    },
    // submitFile: function() {
    //   let formData = new FormData();
    //   formData.append("file", this.file);
    //   axios
    //     .post("https://api.myjobdesk.com/api/register_step_two", formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data"
    //       }
    //     })
    //     .then(function() {
    //       console.log("SUCCESS!!");
    //     })
    //     .catch(function() {
    //       console.log("FAILURE!!");
    //     });
    // },

    //   register: function() {
    //     this.$store
    //       .dispatch("retrieveToken", {
    //         firstname: this.input.firstname,
    //         lastname: this.input.lastname,
    //         middlename: this.input.middlename,
    //         password: this.input.password,
    //         confirmpassword: this.input.confirmpassword
    //       })
    //       .then(response => {
    //         this.$router.push({ name: "Login" });
    //         console.log(response);
    //       });
    //   }
    // },

    // method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     inputs: this.inputs
    //   }),
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
      if (this.inputs.password == "") {
        this.$toastr.e("Please Fill Password");
        return false;
      }
      if (this.inputs.password !== this.inputs.password_confirmation) {
        this.$toastr.e("Password and Confirm Password does not Match");
        return false;
      }
      axios
        .post("https://api.myjobdesk.com/api/register", this.inputs)

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
      this.step++;
    },
    saveCertifications() {}
  },
  mounted() {
    // console.log(NaijaStates.all());
    // console.log(NaijaStates.states());
    // console.log(NaijaStates.lgas("Oyo"));

    console.log("This is good");
    EventBus.$on("onSubmit", this.nextStep);

    // document.getElementById("blk").onchange = function() {
    //   if (document.getElementById("blk").innerHTML != "") {
    //     document.getElementById("blk").classList.add("margina");
    //   }
    // };
  },
  created() {
    this.start();
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.certification_div {
  border-left: 5px solid #990066;
  background-color: rgb(251, 251, 251);
  padding: 25px;
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
  padding: 0 30px 30px 30px;
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
</style>
