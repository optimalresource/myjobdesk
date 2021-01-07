<template>
  <div class="card mb-3">
    <div class="container row second_div p-5 d-flex justify-content-center">
      <button
        type="button"
        data-toggle="modal"
        data-target="#myModal"
        @click.prevent="showSecondDiv = !showSecondDiv"
        class="md-12 sm-12 xs-12 btn changing mr-5 p-2"
      >
        Register as a Company <i class="fas fa-users"></i>
      </button>
      <button
        type="button"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        @click.prevent="showDiv = !showDiv"
        class="md-12 sm-12 xs-12 p-2 btn changing"
      >
        Register as an Applicant <i class="fas fa-user-edit"></i>
      </button>
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title " id="exampleModalCenterTitle">
                Register
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
                          placeholder="Password * ex. letters and numbers are compulsory"
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
                  <div class="d-flex justify-content col-6">
                    <button
                      type="submit"
                      @click="register"
                      class="text-center btn bttn"
                    >
                      Next Step
                    </button>
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
                <div v-if="step == 2" class="container pr-5 pl-5">
                  <h5 class="text-center p-5">Lets Get To Know You</h5>
                  <div class="card-body">
                    <ValidationProvider rules="required" v-slot="{ errors }">
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
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <div class="form-group icon_form comments_form">
                        <label for="gender">gender</label>
                        <select
                          v-model="forms.gender"
                          name="gender"
                          class="custom-select"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="others">Others</option>
                        </select>
                        <div id="">{{ errors[0] }}</div>
                      </div>
                    </ValidationProvider>
                    <br />
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <div class="form-group icon_form comments_form">
                        <label for="marital_status">Marital Status</label>
                        <select
                          v-model="forms.marital_status"
                          name="marital_status"
                          class="custom-select"
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
                          placeholder="Phone Number*... ex. )0701"
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
                          placeholder="Your address*... ex. number 57, str"
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
                        class="col-12 btn btn-secondary mb-5"
                        type="submit"
                      >
                        Save Personal Details
                      </button>
                    </div>
                    <hr />
                    <button @click.prevent="showForm" class="btn btn-primary ">
                      Add Education <i class="fas fa-plus"></i>
                    </button>
                    <div class="mb-3">
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
                        {{ updatedForms.end_date }},
                      </div>
                    </div>

                    <div class="edu-form  background">
                      <h5 class="card-title center p-5">
                        Add Education
                        <span
                          class="float"
                          style="cursor:pointer"
                          @click.prevent="hideForm"
                          ><i class="fas fa-times"></i
                        ></span>
                      </h5>
                      <div class="employee-form">
                        <ValidationProvider
                          name="School"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <input
                            type="text"
                            placeholder="School*... ex. University of ..."
                            class="form-control { 'form-group--error': $v.school.$error }"
                            v-model="forms.school_name"
                          />
                          <span>{{ errors[0] }}</span>
                        </ValidationProvider>
                        <br />
                        <ValidationProvider
                          name="Degree"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <input
                            type="text"
                            placeholder="Degree*... ex. BSc, BA, HNd, SSCE..."
                            class="form-control { 'form-group--error': $v.degree.$error }"
                            v-model="forms.degree"
                          />
                          <span>{{ errors[0] }}</span>
                        </ValidationProvider>
                        <br />
                        <ValidationProvider
                          name="Course"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <input
                            type="text"
                            placeholder="Field of study *... ex. Agricultural Science"
                            class="form-control"
                            v-model="forms.course_of_study"
                          />
                          <div id="blk">{{ errors[0] }}</div>
                        </ValidationProvider>
                        <br />
                        <ValidationProvider
                          name="Grade"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <input
                            type="text"
                            placeholder="Grade*... ex. Second class upper division"
                            class="form-control"
                            v-model="forms.grade"
                          />
                          <div id="blk">{{ errors[0] }}</div>
                        </ValidationProvider>

                        <br />
                        <ValidationProvider
                          name="Year"
                          rules="required|numeric"
                          v-slot="{ errors }"
                        >
                          <label for="start_date">From: </label>
                          <input
                            class="form-control"
                            type="text"
                            v-model="forms.start_date"
                          />
                          <div id="blk">{{ errors[0] }}</div>
                        </ValidationProvider>
                        <br />

                        <ValidationProvider
                          name="Year"
                          rules="required|numeric"
                          v-slot="{ errors }"
                        >
                          <label for="to">To: </label>
                          <input
                            class="form-control"
                            type="text"
                            v-model="forms.end_date"
                            required
                          />
                          <div id="blk">{{ errors[0] }}</div>
                        </ValidationProvider>
                        <br />
                        <div class="form-group col-md-12">
                          <label for="logo" class="control-label"
                            >Please Upload Relevant Documents</label
                          >
                          <br />
                          <div class="col-md-12">
                            <input
                              ref="educational_details_file"
                              type="file"
                              name="educational_details_file"
                              accept="application/pdf,.doc,.docx,application/msword"
                              multiple
                              id="educational_details_file"
                              @change="uploadFieldChange"
                              class="negative-margin-left"
                            />
                            <p class="info">Only PDF and Doc and docx files</p>
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
                                      (attachment.size / 1024 / 1024).toFixed(1)
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
                    </div>
                  </div>
                  <div>
                    <h5 class="text-center p-5">Certifications</h5>
                    <div v-for="(row, index) in rows" :key="row">
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
                        class="btn btn-outline m-3"
                        @click.prevent="addRow"
                      >
                        Add Certification
                      </button>
                      <hr />
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button
                      @click.prevent="secondStep"
                      type="submit"
                      class="btn bttn col-6"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
                <div v-if="step == 3" class="container p-5">
                  <h5 class="text-center p-3">Referees</h5>
                  <div class="container">
                    <div v-for="(referrer, index) in referrers" :key="referrer">
                      <div>
                        <ValidationProvider
                          name="Name"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <div class="form-group icon_form comments_form">
                            <label for="refname">
                              Referrer's Name
                            </label>
                            <input
                              id="refname"
                              type="text"
                              class="form-control"
                              name="refname"
                              required
                              autocomplete="name"
                              autofocus
                              placeholder=" Full Name*"
                              v-model="referrers.name"
                            />
                            <i class="fas fa-user"></i>
                          </div>
                          <span>{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div>
                        <ValidationProvider
                          name="refemail"
                          rules="email"
                          v-slot="{ errors }"
                        >
                          <div class="form-group icon_form comments_form">
                            <label for="refemail">Email Adrress</label>
                            <input
                              id="refemail"
                              type="email"
                              class="form-control"
                              name="refemail"
                              required
                              autocomplete="email"
                              autofocus
                              placeholder=" Email Address*"
                              v-model="referrers.email"
                            />
                            <i class="fas fa-envelope"></i>
                          </div>
                          <span>{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div>
                        <ValidationProvider
                          name="Referrer's phone"
                          rules="required|numeric"
                          v-slot="{ errors }"
                        >
                          <div class="form-group icon_form comments_form">
                            <label for="firstname">Phone Number</label>
                            <input
                              type="tel"
                              class="form-control require"
                              name="firstname"
                              placeholder="Phone Number*"
                              required
                              v-model="referrers.phone"
                            />
                            <i class="fas fa-phone"></i>
                            <span>{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </div>
                      <div>
                        <ValidationProvider
                          name="Company's name"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <div class="form-group icon_form comments_form">
                            <label for="company-Name">Company's Name</label>
                            <input
                              type="text"
                              class="form-control require"
                              name="company-Name"
                              placeholder="Company Name*"
                              required
                              v-model="referrers.company"
                            />
                            <i class="fas fa-users"></i>
                            <span>{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </div>
                      <div>
                        <ValidationProvider
                          name="Position"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <div class="form-group icon_form comments_form">
                            <label for="position">
                              Position in the Company
                            </label>
                            <input
                              type="text"
                              class="form-control require"
                              name="position"
                              placeholder="Position in the company*"
                              required
                              v-model="referrers.position"
                            />
                            <i class="fas fa-users"></i>
                            <span>{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </div>
                      <button
                        v-on:click="removeReferres(index)"
                        style="cursor: pointer"
                      >
                        Remove Referees
                      </button>
                    </div>
                  </div>

                  <div>
                    <button class="btn btn-primary" @click="addReferrer">
                      Add Referrees
                    </button>
                  </div>
                  <hr />
                  <div class="container p-5">
                    <h5 class="text-center p-3">Experience</h5>
                    <tbody>
                      <div v-for="experience in experiences" :key="experience">
                        <div>
                          <ValidationProvider
                            name="Position"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <div class="form-group icon_form comments_form">
                              <label for="Position">Position</label>
                              <input
                                type="text"
                                class="form-control"
                                v-model="experiences.title"
                                placeholder="Position held*"
                                name=""
                              />
                            </div>
                            <span>{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                        <div>
                          <ValidationProvider
                            name=""
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <div class="form-group icon_form comments_form">
                              <label for="Company's Name">Company Name</label>
                              <input
                                type="text"
                                class="form-control"
                                v-model="experiences.company_name"
                              />
                              <i class="fas fa-users"></i>
                            </div>
                            <span>{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                        <div>
                          <ValidationProvider
                            name="Discription"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <div class="form-group icon_form comments_form">
                              <label for="Company's Name"
                                >Job Discription</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                v-model="experiences.description"
                              />
                              <i class="fas fa-users"></i>
                            </div>
                            <span>{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                        <!-- <div class="form-group icon_form comments_form">
                <label for="Company's_Name">Company's Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="experiences.name"
                />
                <i class="fas fa-users"></i>
              </div> -->
                        <div>
                          <ValidationProvider
                            name="Date"
                            rules="required|numeric"
                            v-slot="{ errors }"
                          >
                            <div class="form-group icon_form comments_form">
                              <label for="  From"> From</label>
                              <input
                                type="text"
                                class="form-control"
                                v-model="experiences.dateFrom"
                                name="  From"
                              />
                            </div>
                            <span>{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                        <div>
                          <ValidationProvider
                            name="Date"
                            rules="required|numeric"
                            v-slot="{ errors }"
                          >
                            <div class="form-group icon_form comments_form">
                              <label for="to"> To</label>
                              <input
                                type="text"
                                class="form-control"
                                v-model="experiences.dateTo"
                                name="To"
                              />
                            </div>
                            <span>{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>

                        <a
                          v-on:click="removeExperience()"
                          style="cursor: pointer"
                          ><i class="fas fa-times"></i
                        ></a>
                      </div>
                    </tbody>
                    <div>
                      <button
                        class="btn btn-primary"
                        @click.prevent="addExperience"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <div>
                    <h5 class="text-center p-3">Any Special Skills</h5>
                    <table class="table">
                      <thead>
                        <tr>
                          <td><strong>Please Tell Us</strong></td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="skill in skills" :key="skill">
                          <td>
                            <div class="form-group icon_form comments_form">
                              <input
                                type="text"
                                class="form-control"
                                v-model="skills.tell"
                                placeholder="Tell us*"
                              />
                            </div>
                          </td>
                          <td>
                            <a
                              @click.prevent="removeskills"
                              style="cursor: pointer"
                              ><i class="fas fa-times"></i
                            ></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button
                      class="btn btn-primary m-4"
                      @click.prevent="addskills"
                    >
                      Add
                    </button>
                  </div>
                  <button type="submit" class="text-center btn bttn">
                    Submit
                  </button>
                </div>
                <div v-if="step == 4">
                  <div class="text-center jumbotron p-s">
                    <h1 class="text-light">
                      Completed &nbsp;<span>&#128516;</span>
                    </h1>
                    <!-- <StepFour /> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Company Register</h5>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <div class="container p-5">
              <!-- <h5 class="text-center pb-5"></h5> -->
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
                      v-bind:type="[showConfirmPassword ? 'text' : 'password']"
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

              <ValidationProvider
                name="Company Sector"
                rules="required"
                v-slot="{ errors }"
              >
                <div class="form-group icon_form comments_form">
                  <select
                    v-model="companys.company_sector"
                    name="gender"
                    class="custom-select"
                  >
                    <option value=""></option>
                    <option value="">Select a Sector </option>
                  </select>
                  <i class="fas fa-bezier-curve"></i>
                  <span>{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
              <div class="d-flex justify-content-center">
                <button
                  @click="registercompany"
                  type="submit"
                  class="btn bttn col-6"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <!-- <button type="button" class="btn btn-default" data-dismiss="modal">
              Close
            </button> -->
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
// import toastr from "toastr";
// Vue.use(VueToastr, {
// defaultPosition: "toast-bottom-left",
// defaultType: "info",
// defaultTimeout: 1000
// });

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
      if(this.attachments.length > 0) {
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
    secondStep() {
      this.submitFile();
      this.step++;
    },
    removeElement: function(index) {
      this.rows.splice(index, 1);
    },
    setFilename: function(event, row) {
      var file = event.target.files[0];
      row.file = file;
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
    removeExperience: function() {
      this.experiences.splice(1);
    },
    addReferrer: function() {
      this.referrers.push({
        name: "",
        email: "",
        phone: "",
        company: "",
        position: ""
      });
    },
    removeReferres: function(index) {
      this.referrers.splice(index, 1);
    },

    addskills: function() {
      this.skills.push({
        tell: ""
      });
    },
    submitFile: function() {
      let formData = new FormData();
      formData.append("file", this.file);
      axios
        .post("https://api.myjobdesk.com/api/register_step_two", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function() {
          console.log("SUCCESS!!");
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
    },
    removeskills: function() {
      this.skills.splice(1);
    },
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
    }
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
  background: white;
  border-radius: 8px;
  color: #990066;
  cursor: pointer;
  width: 100%;
  font-weight: 700;
}
.employee-form {
  border: 3px solid white;
  padding: 30px;
  background-image: linear-gradient(to right, #990066, #af0066, #c90075);
  border-radius: 10px;
  width: 100%;
}
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
</style>
