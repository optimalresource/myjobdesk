<template>
  <div class="Applicant mt-5 margin_top">
    <div class="applicant_div mb-4">
      <div class="step">
        <transition name="fade">
          <div v-if="step == 1">
            <h5 class="text-center mt-4 mb-4">Applicant Registration</h5>

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
              <div class="form-group icon_form comments_form">
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
                  class="form-control require"
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
                <div class="form-group icon_form comments_form input-group">
                  <input
                    v-bind:type="[showPassword ? 'text' : 'password']"
                    id="password"
                    class="form-control"
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
                    id="confirm-password"
                    required
                    class="form-control short"
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
                <button type="submit" @click="register" :disabled="spin">
                  <span v-if="notSpin">Next Step 1</span
                  ><i v-if="spin" class="fa fa-spinner fa-spin"></i>
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <transition name="fade">
      <div class="" v-if="step == 2">
        <div class="personal_details_div">
          <div class="mb-3">
            <h2 class="text-center">Personal Details</h2>
            <h6 class="text-center personal_headers">Lets Get To Know You</h6>
          </div>

          <!-- <date-of-birth-component
            v-model="forms.dob"
            :v="$v.forms.dob"
          ></date-of-birth-component>

          <br />

          <gender-component
            v-model="forms.gender"
            :v="$v.forms.gender"
          ></gender-component> -->

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
                class="form-control drop-select"
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
                class="form-control drop-select"
              >
                <option value="Single" selected>Single</option>
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
              <label for="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
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
              <label for="address">Address</label>
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
                class="form-control drop-select"
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
                class="form-control drop-select"
                v-model="forms.selectedState"
                @change="changeState"
              >
                <option value="0">Select State</option>
                <option v-for="state in states" :key="state" :value="state">
                  {{ state }}
                </option>
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
                class="form-control drop-select"
                v-model="forms.selectedLGA"
                @change="changeLGA"
              >
                <option value="0">Select Local Government</option>
                <option v-for="lg in lga.lgas" :key="lg" :value="lg">
                  {{ lg }}
                </option>
              </select>
              <div id="">{{ errors[0] }}</div>
            </div>
          </ValidationProvider>
          <div class="container">
            <button
              @click="savePersonalDetails"
              class="submit-edu"
              type="submit"
              :disabled="spin"
            >
              <span v-if="notSpin">Save Personal Details</span
              ><i v-if="spin" class="fa fa-spinner fa-spin"></i>
            </button>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <div class="add_educational_details_div">
          <h6 class="text-center personal_headers mb-3">Education</h6>
          <button @click.prevent="showForm" class="btn btn-primary">
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
              {{ updatedForm.degree }}, {{ updatedForm.course_of_study }},
              {{ updatedForm.grade }}, {{ updatedForm.start_date }} to
              {{ updatedForm.end_date }}
            </div>
          </div>

          <div class="edu-form background">
            <h5 class="card-title p-5">
              Add Education
              <span
                class="float"
                style="cursor: pointer"
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
                  <multiselect
                    v-model="forms.degree"
                    :options="discipline"
                    :taggable="true"
                    @tag="addingTag"
                    :custom-label="nameWithLang"
                    placeholder="Degree*... e.g. BSc, BA, HNd, SSCE..."
                    label="name"
                    track-by="name"
                  ></multiselect>
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
                  <multiselect
                    v-model="forms.course_of_study"
                    :options="schools"
                    :taggable="true"
                    @tag="addingTag"
                    :custom-label="nameWithLang"
                    placeholder="Select Field of Study"
                    label="name"
                    track-by="name"
                  ></multiselect>
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
                    <label class="custom-file-label" for="inputGroupFile01"
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
                          Number((attachment.size / 1024 / 1024).toFixed(1)) +
                          "MB)"
                      }}</span>
                      <span
                        class=""
                        style="background: white; cursor: pointer"
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
                :disabled="spin"
              >
                <span v-if="notSpin">Save Info</span
                ><i v-if="spin" class="fa fa-spinner fa-spin"></i>
              </button>
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
              style="cursor: pointer"
              @click.prevent="hideCertificateForm"
              ><i class="fas fa-times"></i
            ></span>
          </div>
          <div
            class="p-3 certification_preview"
            v-for="(updatedCert, cert) in updatedCerts"
            :key="cert"
          >
            <div class="mb-3">
              <span
                @click="deleteCertification(cert)"
                class="float-right text-danger"
                ><i class="far fa-times-circle"></i
              ></span>
              <div class="text-success">
                <div>
                  <h6>
                    {{ updatedCert.title }}
                  </h6>
                  {{ updatedCert.description }}
                </div>
              </div>
            </div>
          </div>
          <div class="certify mt-2">
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
                v-model="certifications.description"
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
              <label class="custom-file-label" for="customFile">
                <span v-if="certPreview[0]">{{ certPreview[0].name }}</span>
                <span v-else>Choose file</span></label
              >
            </div>
            <div class="container">
              <button
                @click.prevent="save_certificate"
                class="p-2 mt-2 submit-edu"
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

        <div class="col-12 d-flex justify-content-center mt-3">
          <div class="jb_newslwtteter_button">
            <div class="header_btn search_btn news_btn jb_cover">
              <button @click.prevent="secondStep" type="submit">
                Next Step 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <br />
    <br />
    <br />

    <transition name="fade">
      <div v-if="step == 3">
        <!-- <span class="back_button"><i @click="backstep" class="fas fa-arrow-left"></i></span> -->
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
            <h5 class="text-center mt-2 mb-3">Referees</h5>
            <div
              class="p-3 certification_preview"
              v-for="(updatedRef, ref) in updatedRefs"
              :key="ref"
            >
              <div class="mb-3">
                <span
                  @click="deleteReferree(ref)"
                  class="float-right text-danger"
                  ><i class="far fa-times-circle"></i
                ></span>
                <div class="text-success">
                  <div>
                    <h6>
                      {{ updatedRef.full_name }}
                    </h6>
                    {{ updatedRef.email }},{{ updatedRef.company_name }},{{
                      updatedRef.company_position
                    }},{{ updatedRef.phone }}
                  </div>
                </div>
              </div>
            </div>
            <div class="referees">
              <div class="form-group icon_form comments_form">
                <input
                  type="text"
                  class="form-control require"
                  required
                  placeholder="Full Name* please add the Title"
                  v-model="referrers.full_name"
                />
              </div>
              <div class="form-group icon_form comments_form">
                <input
                  type="email"
                  class="form-control require"
                  required
                  placeholder="Emial Address*"
                  v-model="referrers.email"
                />
              </div>
              <div class="form-group icon_form comments_form">
                <input
                  type="text"
                  class="form-control require"
                  required
                  placeholder="Referrer's Company Name*"
                  v-model="referrers.company_name"
                />
              </div>
              <div class="form-group icon_form comments_form">
                <input
                  type="text"
                  class="form-control require"
                  required
                  placeholder="Position of The Referrer*"
                  v-model="referrers.company_position"
                />
              </div>
              <div class="form-group icon_form comments_form">
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
              class="btn btn-primary ml-3 mb-3"
            >
              Add Referrers
            </button>
          </div>
        </div>

        <br />
        <br />
        <br />
        <div class="certification_div">
          <h5 class="text-center mt-2 mb-3">
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

          <div
            class="p-3 certification_preview"
            v-for="(updatedexperience, exp) in updatedexperiences"
            :key="exp"
          >
            <div class="mb-3">
              <span
                @click="deleteExperience(exp)"
                class="float-right text-danger"
                ><i class="far fa-times-circle"></i
              ></span>
              <div class="text-success">
                <div>
                  <h6>
                    {{ updatedexperience.job_description }}
                  </h6>
                  {{ updatedexperience.job_title }},{{
                    updatedexperience.company_name
                  }},
                  {{ updatedexperience.date_from }}
                  {{ updatedexperience.company_location }}
                  {{ updatedexperience.date_to }}
                </div>
              </div>
            </div>
          </div>

          <div class="Experience mb-3">
            <div class="form-group icon_form comments_form">
              <input
                type="text"
                class="form-control require"
                required
                placeholder="Job Title..."
                v-model="experiences.job_title"
              />
            </div>
            <div class="form-group icon_form comments_form">
              <input
                type="text"
                class="form-control require"
                required
                placeholder="Job Discription..."
                v-model="experiences.job_description"
              />
            </div>
            <div class="form-group icon_form comments_form">
              <input
                type="text"
                class="form-control require"
                required
                placeholder="Company's Name"
                v-model="experiences.company_name"
              />
            </div>
            <div class="form-group icon_form comments_form">
              <input
                type="text"
                class="form-control require"
                required
                placeholder="Company's Location"
                v-model="experiences.company_location"
              />
            </div>
            <div class="form-group icon_form comments_form">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="">Years Worked</span>
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
          <button @click.prevent="addExperience" class="btn btn-primary m-3">
            Add Experiences
          </button>
        </div>
        <br />
        <br />
        <br />
        <div class="certification_div">
          <div class="mt-2 mb-2 text-center justify-content-center">
            <h5 class>Skills</h5>
            <p class="text-danger">Optional</p>

            <div
              class="p-3 certification_preview"
              v-for="(updatedskill, skill) in updatedskills"
              :key="skill"
            >
              <div class="mb-3">
                <span
                  @click="deleteExperience(skill)"
                  class="float-right text-danger"
                  ><i class="far fa-times-circle"></i
                ></span>
                <div>
                  <div>
                    <h6>
                      {{ updatedskill.skill }}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-1">
            <div class="skills">
              <span class="text-danger float-right" style="cursor: pointer">
                <i
                  @click.prevent="removeskills"
                  class="far fa-times-circle"
                ></i>
              </span>
              <div class="input-group">
                <input
                  class="form-control"
                  placeholder="Enter a skill"
                  v-model="skills.skill"
                />
              </div>
              <button @click.prevent="saveskills" class="submit-edu mt-2 p-2">
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
        <div class="container justify-content-center certification_div">
          <h5 class="text-center mt-4 mb-2">Upload Curriculum Vitae</h5>
          <!-- <h6 class="text-center mb-2">CV</h6> -->
          <div class="form-group icon_form comments_form input-group">
            <div class="custom-file">
              <input
                ref="cv"
                type="file"
                accept="application/pdf,.doc,.docx,application/msword"
                id="cv"
                class="custom-file-input"
                @change="uploadcv"
              />
              <label class="custom-file-label" for="inputGroupFile04">
                <span v-if="cvFiles[0]">{{ cvFiles[0].name }}</span>
                <span v-else>Choose file</span>
              </label>
            </div>
            <div class="input-group-append">
              <button @click="savecv" class="btn cv_button" type="button">
                Upload
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            class="col-12 d-flex justify-content-center col-sm-12 col-xs-12 mt-3 mb-4"
          >
            <div class="jb_newslwtteter_button">
              <div class="header_btn search_btn news_btn jb_cover">
                <button @click.prevent="thirdStep" type="submit">
                  Final Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="step == 4">
        <!-- <span class="back_button"><i @click="backstep" class="fas fa-arrow-left"></i></span> -->
        <h3 class="text-center p-4">Pick A Category</h3>
        <div class="select_dropdown">
          <multiselect
            v-model="category"
            tag-placeholder="Add this as new tag"
            placeholder="Search or add a tag"
            label="name"
            track-by="code"
            :options="options"
            :multiple="true"
            :taggable="true"
            @tag="addTag"
            tag-position="top"
          ></multiselect>
        </div>
        <div class="mt-5 ml-5 d-flex justify-content-center">
          <div class="jb_newslwtteter_button">
            <div class="header_btn search_btn news_btn jb_cover">
              <button @click="goToDashBoard" type="button">Lets Go</button>
            </div>
          </div>
        </div>
        <p>
          <a href="#">
            <span style="cursor: pointer" class="text-light"
              ><u>Click here if you were not automatically redirected </u></span
            ></a
          >
        </p>
      </div>
    </transition>
  </div>
</template>
<script>
// import { EventBus } from "@/components/eventBus.js";
// import axios from "axios";
import NaijaStates from "naija-state-local-government";
import "vue-input-search/dist/vue-search.css";
// import VueSearch from "vue-input-search/dist/vue-search.common";
import Multiselect from "vue-multiselect";
// import $ from "jquery";
// import { required, email } from "vuelidate/lib/validators";
// import { isNameJoe, notGmail, isEmailAvailable } from "@/validators";
// import DateOfBirthComponent from "../components/form/DateOfBirthComponent.vue";
// import GenderComponent from "../components/form/GenderComponent.vue";

export default {
  components: {
    // "vue-search": VueSearch,
    Multiselect
    // DateOfBirthComponent,
    // GenderComponent
  },
  name: "SignUpDiv",
  // props: ["EventBus"],
  data: function() {
    return {
      schools: [],
      discipline: [],
      spin: false,
      notSpin: true,
      uploadedFiles: [],
      isHidden: true,
      successResponse: false,
      beforeResponse: false,
      categoryResponse: 0,
      pDResponse: 0,
      eDResponse: 0,
      refResponse: 0,
      expResponse: 0,
      // certification_div_none: false,
      // showexperience_div: false,
      // showreferrers: false,
      // showskill: false,
      category: [],
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
      showDiv: localStorage.getItem("showDiv"),
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
        password_confirmation: "",
        user_type: "applicant"
      },
      skills: {
        skill: ""
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
        description: ""
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
      updatedexperiences: [],
      updatedRefs: [],
      updatedskills: [],
      updatedCerts: [],
      confirmation: "",
      totalstep: 4,
      step: localStorage.getItem("step")
        ? parseInt(localStorage.getItem("step"))
        : 1,
      showPassword: false,
      showConfirmPassword: false,
      valid: true,
      success: false,
      // errors: {},
      message: null,
      files: [],
      selectedFiles: new FormData(),
      certFiles: [],
      certPreview: [],
      cvFiles: [],
      cvPreview: [],
      cvUpload: []
    };
  },
  methods: {
    nameWithLang({ name, language }) {
      return `${name} — [${language}]`;
    },
    addingTag(newTag) {
      const tag = {
        name: newTag,
        language: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.optionss.push(tag);
      this.forms.course_of_study.push(tag);
    },
    backstep() {
      this.step--;
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.options.push(tag);
      this.category.push(tag);
    },
    fetchPersonalDetails() {
      this.$store
        .dispatch("FetchPersonalDetails")
        .then(response => {
          this.forms.marital_status = response.data.marital_status;
          this.forms.gender = response.data.gender;
          this.forms.selectedLGA = response.data.lga;
          this.forms.selectedState = response.data.state_of_origin;
          this.forms.nationality = response.data.nationality;
          this.forms.address = response.data.address;
          this.forms.dob = response.data.date_of_birth;
          this.forms.phone = response.data.phone;
          this.pDResponse = response.status;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
        });
    },
    fetchEducationDetails() {
      this.$store
        .dispatch("FetchEducationDetails")
        .then(response => {
          this.updatedForms = response.data;
          this.eDResponse = response.status;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
        });
    },
    fetchCertificateDetails() {
      this.$store
        .dispatch("FetchCertificateDetails")
        .then(response => {
          this.updatedCerts = response.data;
          this.pDResponse = response.status;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
        });
    },
    fetchReferrees() {
      this.$store
        .dispatch("FetchReferreeDetails")
        .then(response => {
          this.updatedRefs = response.data;
          this.pDResponse = response.status;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
        });
    },
    fetchExperiences() {
      this.$store
        .dispatch("FetchExperienceDetails")
        .then(response => {
          this.updatedexperiences = response.data;
          this.pDResponse = response.status;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
        });
    },
    fetchSkills() {
      this.$store
        .dispatch("FetchSkillDetails")
        .then(response => {
          this.updatedskills = response.data;
          this.pDResponse = response.status;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
        });
    },
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
    savePersonalDetails() {
      // this.$v.forms.$touch();
      // if (this.$v.forms.$pending || this.$v.forms.$error) return;

      if (this.forms.dob == "") {
        this.$toasted.error("Please Fill Your Date of Birth");
        this.spin = false;
        this.notSpin = true;
        return false;
      }

      if (this.forms.gender == "") {
        this.$toasted.error("Please Select Gender");
        this.spin = false;
        this.notSpin = true;
        return false;
      }

      if (this.forms.marital_status == "") {
        this.$toasted.error("Please Select Marital Status");
        this.spin = false;
        this.notSpin = true;
        return false;
      }

      if (this.forms.phone == "") {
        this.$toasted.error("Please Fill your Phone Number");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.forms.address == "") {
        this.$toasted.error("Please Fill your Address");
        return false;
      }
      console.log("this is submiting f ");
      if (this.forms.nationality == "") {
        this.$toasted.error("Please Select Nationality");
        this.spin = false;
        this.notSpin = true;
        return false;
      }

      if (this.forms.selectedState == "") {
        this.$toasted.error("Please Select a State");
        this.spin = false;
        this.notSpin = true;
        return false;
      }

      if (this.forms.selectedLGA == "") {
        this.$toasted.error("Please Select a Local Government");
        this.spin = false;
        this.notSpin = true;
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
      request.phone = this.forms.phone;

      this.$store
        .dispatch("SavePersonalDetails", request)
        .then(response => {
          this.pDResponse = response.status;
          this.$toasted.success("Personal details Saved");
          this.spin = false;
          this.notSpin = true;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
        });
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

      // if (!this.onLine) {
      //   this.$toasted.error("Please check your internet connection");
      // this.spin = false;
      // this.notSpin = true;
      //   return false;
      // }

      this.$store
        .dispatch("SaveEducationDetails", this.selectedFiles)
        .then(response => {
          this.eDResponse = response.status;
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
          this.$toasted.success("Education details Saved");
          this.spin = false;
          this.notSpin = true;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
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
        this.$toasted.error("Please check and complete School name");
        return false;
      }
      if (this.forms.course_of_study == "") {
        this.$toasted.error("Please check and complete Course of Study");
        return false;
      }
      if (this.forms.degree == "") {
        this.$toasted.error("Please Type Degree Type");
        return false;
      }
      if (this.forms.start_date == "") {
        this.$toasted.error("Please set a Start date");
        return false;
      }
      if (new Date(this.forms.start_date).toString() === "Invalid Date") {
        this.$toasted.error("Start date is invalid");
        return false;
      }
      if (this.forms.end_date == "") {
        this.$toasted.error("Please set an End Date");
        return false;
      }
      if (new Date(this.forms.end_date).toString() === "Invalid Date") {
        this.$toasted.error("End date is invalid");
        return false;
      }
      if (this.forms.grade < 1) {
        this.$toasted.error("Please Fill your grade");
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
      var toDelete = this.updatedForms[id];
      const requestId = { id: toDelete.id };
      this.$store
        .dispatch("DeleteEducationDetail", requestId)
        .then(() => {
          this.updatedForms.splice(id, 1);
          this.$toasted.success("Education detail deleted successfully");
          if (this.updatedForms.length < 1) {
            document.getElementsByClassName("edu-form")[0].style.display =
              "none";
          }
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
        });
    },
    secondStep() {
      // if (this.pDResponse != 200) {
      //    this.$toasted.error("please fill Personal Details");
      //   return false;
      // }
      this.spin = true;
      this.notSpin = false;

      if (this.eDResponse != 200) {
        this.$toasted.error("please add an Educational Detail");
        return false;
      }

      var step = { step: 3 };

      this.$store
        .dispatch("NextStep", step)
        .then(() => {
          this.$toasted.success("You have progressed to step 3 of 5");
          this.spin = false;
          this.notSpin = true;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
          return false;
        });

      this.step++;
      return true;
    },
    thirdStep() {
      this.spin = true;
      this.notSpin = false;
      var step = { step: 4 };

      this.$store
        .dispatch("NextStep", step)
        .then(() => {
          this.$toasted.success("You have progressed to step 4 of 5");
          this.spin = false;
          this.notSpin = true;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
          return false;
        });

      this.step++;
      return true;
    },

    goToDashBoard: function() {
      var request = { category: [] };
      if (this.category.length < 1) {
        this.$toasted.error("please pick a category");
        this.spin = false;
        this.notSpin = true;
        return false;
      }

      for (let i = 0; i < this.category.length; i++) {
        request.category.push({ name: this.category[i].name });
      }

      this.$store
        .dispatch("AddSeekerCategories", request)
        .then(response => {
          this.categoryResponse = response.status;
          this.$toasted.success("Category saved successfully");
          this.$toasted.info("You're now being redirected to your dashboard");
          this.spin = false;
          this.notSpin = true;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
          return false;
        });

      var step = { step: 5 };

      this.$store
        .dispatch("NextStep", step)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
          return false;
        });
    },
    finalButton: function() {},
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
        this.$toasted.error("Please Fill First Name");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.inputs.last_name == "") {
        this.$toasted.error("Please Fill Last Name");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.inputs.middle_name == "") {
        this.$toasted.error("Please Fill Middle Name");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.inputs.password_confirmation == "") {
        this.$toasted.error("Please Fill Confirm Password");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.inputs.email == "") {
        this.$toasted.error("Please Fill Email");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (!this.validateEmail(this.inputs.email)) {
        this.$toasted.error(
          "Please enter at least 6 letters which includes at least number and letter"
        );
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.inputs.password == "") {
        this.$toasted.error("Please Fill Password");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.inputs.password !== this.inputs.password_confirmation) {
        this.$toasted.error("Password and Confirm Password does not Match");
        this.spin = false;
        this.notSpin = true;
        return false;
      }

      // if (!this.onLine) {
      //   this.$toasted.error("Please check your internet connection");
      //   this.spin = false;
      //   this.notSpin = true;
      //   return false;
      // }

      this.beforeResponse = true;

      this.$store
        .dispatch("RegisterCandidate", this.inputs)
        .then(response => {
          this.successResponse = response.status;
          this.$toasted.success(
            "You have successfully started registering your information with MyJobDesk"
          );
          this.spin = false;
          this.notSpin = true;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
        });
    },
    handleFiles() {
      var uploadedFiles = document.getElementById("certification_file");
      this.certFiles = uploadedFiles.files;
      if (!this.certFiles.length) return;
      this.certPreview.push(this.certFiles[0]);
    },
    uploadcv() {
      var cvUpload = document.getElementById("cv");
      this.cvFiles = cvUpload.files;
      this.cvPreview.push(this.cvFiles[0]);
      console.log(this.cvFiles[0]);
    },
    savecv() {
      // if (!this.onLine) {
      //   this.$toasted.error("Please check your internet connection");
      //   this.spin = false;
      //   this.notSpin = true;
      //   return false;
      // }

      if (this.cvPreview.length > 0) {
        this.selectedFiles.append("filename", this.cvPreview[0]);
      } else {
        this.$toasted.error("Please upload a cv before submitting");
        this.spin = false;
        this.notSpin = true;
        return false;
      }

      this.$store
        .dispatch("AddCV", this.selectedFiles)
        .then(() => {
          this.cvFiles = [];
          this.cvPreview = [];
          this.selectedFiles = new FormData();
          document.getElementById("cv").value = "";
          this.$toasted.success("CV saved successfully");
          this.spin = false;
          this.notSpin = true;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
          return false;
        });
    },
    saveskills() {
      // if (!this.onLine) {
      //   this.$toasted.error("Please check your internet connection");
      //   this.spin = false;
      //   this.notSpin = true;
      //   return false;
      // }

      if (this.skills.skill == "") {
        this.$toasted.error("Please enter a skill");
        this.spin = false;
        this.notSpin = true;
        return false;
      }

      this.$store
        .dispatch("AddSkill", this.skills)
        .then(response => {
          this.updatedskills.push(response.data);
          this.skills.skill = "";
          document.getElementsByClassName("skills")[0].style.display = "none";
          document.getElementsByClassName("Skills_preview")[0].style.display =
            "block";
          this.$toasted.success("Skill saved successfully");
          this.spin = false;
          this.notSpin = true;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
          return false;
        });

      this.showErrorToastr;
    },
    savereferrers() {
      // if (!this.onLine) {
      //   this.$toasted.error("Please check your internet connection");
      //   this.spin = false;
      //   this.notSpin = true;
      //   return false;
      // }
      if (this.referrers.phone == "") {
        this.$toasted.error("Please Fill Your Referee's number");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.referrers.company_position == "") {
        this.$toasted.error(
          "Please Fill Your Referee's Position in He's/ Her Company"
        );
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.referrers.company_name == "") {
        this.$toasted.error("Please Fill Your Referee's Company's name ");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.referrers.email == "") {
        this.$toasted.error("Please Fill Your Referee's email");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.referrers.full_name == "") {
        this.$toasted.error("Please Fill Your Referee's Full Name");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      var reff = {};
      reff.email = this.referrers.email;
      reff.full_name = this.referrers.full_name;
      reff.company_name = this.referrers.company_name;
      reff.company_position = this.referrers.company_position;
      reff.phone = this.referrers.phone;

      this.$store
        .dispatch("AddReferree", reff)
        .then(response => {
          this.updatedRefs.push(response.data);
          this.id++;
          this.referrers.full_name = "";
          this.referrers.email = "";
          this.referrers.company_name = "";
          this.referrers.company_position = "";
          this.referrers.phone = "";
          this.refResponse = response.status;
          document.getElementsByClassName("Referees")[0].style.display = "none";
          document.getElementsByClassName("referees")[0].style.display = "none";
          document.getElementsByClassName("Referee_preview")[0].style.display =
            "block";
          this.$toasted.success("Referree saved successfully");
          this.spin = false;
          this.notSpin = true;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
          return false;
        });
    },
    saveExperience() {
      // if (!this.onLine) {
      //   this.$toasted.error("Please check your internet connection");
      //   this.spin = false;
      //   this.notSpin = true;
      //   return false;
      // }
      if (this.experiences.job_description == "") {
        this.$toasted.error("Please Fill Your Referee's number");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.experiences.job_title == "") {
        this.$toasted.error(
          "Please Fill Your Referee's Position in He's/ Her Company"
        );
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.experiences.company_name == "") {
        this.$toasted.error("Please Fill Your Referee's Company's name ");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.experiences.company_location == "") {
        this.$toasted.error("Please Fill Your Referee's email");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.experiences.date_from == "") {
        this.$toasted.error("Please Fill Your Referee's Full Name");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      if (this.experiences.date_to == "") {
        this.$toasted.error("Please Fill Your Referee's Full Name");
        this.spin = false;
        this.notSpin = true;
        return false;
      }
      var exp = {};
      exp.job_description = this.experiences.job_description;
      exp.job_title = this.experiences.job_title;
      exp.company_name = this.experiences.company_name;
      exp.company_location = this.experiences.company_location;
      exp.date_from = this.experiences.date_from;
      exp.date_to = this.experiences.date_to;
      if (!this.onLine) {
        this.$toasted.error("Please check your internet connection");
        return false;
      }

      this.$store
        .dispatch("AddExperience", exp)
        .then(response => {
          this.experiences.job_description = "";
          this.experiences.job_title = "";
          this.experiences.company_name = "";
          this.experiences.company_location = "";
          this.experiences.date_from = "";
          this.experiences.date_to = "";
          this.updatedexperiences.push(response.data);
          this.id++;
          document.getElementsByClassName("Experience")[0].style.display =
            "none";
          document.getElementsByClassName("experience")[0].style.display =
            "none";
          document.getElementsByClassName(
            "Experience_preview"
          )[0].style.display = "block";

          this.expResponse = response.status;
          this.$toasted.success("Referree saved successfully");
          this.spin = false;
          this.notSpin = true;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
          return false;
        });
    },
    save_certificate() {
      // if (!this.onLine) {
      //   this.$toasted.error("Please check your internet connection");
      //   return false;
      // }

      if (this.certifications.title == "") {
        this.$toasted.error("Please fill Certification Title");
        this.spin = false;
        this.notSpin = true;
        return false;
      }

      if (this.certifications.description == "") {
        this.$toasted.error("Please fill Certification Description");
        this.spin = false;
        this.notSpin = true;
        return false;
      }

      this.selectedFiles.append("title", this.certifications.title);
      this.selectedFiles.append("description", this.certifications.description);
      if (this.certPreview.length > 0) {
        this.selectedFiles.append("filename", this.certPreview[0]);
      } else {
        this.$toasted.error("Please upload a file before submitting");
        this.spin = false;
        this.notSpin = true;
        return false;
      }

      this.$store
        .dispatch("SaveCertificate", this.selectedFiles)
        .then(response => {
          this.updatedCerts.push(response.data);
          document.getElementsByClassName("certify")[0].style.display = "none";
          document.getElementsByClassName("cert")[0].style.display = "none";
          this.certifications.title = "";
          this.certifications.description = "";
          this.certFiles = [];
          this.certPreview = [];
          this.selectedFiles = new FormData();
          document.getElementById("certification_file").value = "";
          this.$toasted.success("Certification Saved");
          this.spin = false;
          this.notSpin = true;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
        });
    },
    deleteCertification(id) {
      var toDelete = this.updatedCerts[id];
      const requestId = { id: toDelete.id };

      this.$store
        .dispatch("DeleteCertificate", requestId)
        .then(() => {
          this.updatedCerts.splice(id, 1);
          this.$toasted.success("Certification deleted successfully");
          this.spin = false;
          this.notSpin = true;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
        });
    },
    deleteReferree(id) {
      var toDelete = this.updatedRefs[id];
      const requestId = { id: toDelete.id };

      this.$store
        .dispatch("DeleteReferree", requestId)
        .then(() => {
          this.updatedRefs.splice(id, 1);
          this.$toasted.success("Referree deleted successfully");
          this.spin = false;
          this.notSpin = true;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
        });
    },
    deleteExperience(id) {
      var toDelete = this.updatedexperiences[id];
      const requestId = { id: toDelete.id };

      this.$store
        .dispatch("DeleteExperience", requestId)
        .then(() => {
          this.updatedexperiences.splice(id, 1);
          this.$toasted.success("Experience deleted successfully");
          this.spin = false;
          this.notSpin = true;
        })
        .catch(error => {
          this.handleAxiosErrors(error);
          this.spin = false;
          this.notSpin = true;
        });
    }
  },
  // validations: {
  //   forms: {
  //     name: { required, isJoe: isNameJoe },
  //     email: { required, email, notGmail, isEmailAvailable },
  //     dob: { required },
  //     gender: { required }
  //   }
  // },
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
        this.$toasted.info("Your form is being submitted, please wait");
      }
    },

    successResponse() {
      if (this.successResponse == 200) {
        this.$toasted.success(
          "Your registration is successfull, please continue in next step"
        );
        this.step++;
        this.successResponse = false;
        this.beforeResponse = false;
      }
    }
  },
  mounted() {
    this.fetchPersonalDetails();
    this.fetchEducationDetails();
    this.fetchCertificateDetails();
    this.fetchReferrees();
    this.fetchExperiences();
    this.fetchSkills();

    var toggleState = function(elem, one, two) {
      var element = document.querySelector(elem);
      element.setAttribute(
        "data-toggle",
        element.getAttribute("data-toggle") === one ? two : one
      );
    };
    toggleState(".modalbutton", "closed", "open");
  },
  beforeDestroy() {
    window.removeEventListener("online", this.updateOnlineStatus);
    window.removeEventListener("offline", this.updateOnlineStatus);
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
@import "../assets/css/applicant.css";
</style>
