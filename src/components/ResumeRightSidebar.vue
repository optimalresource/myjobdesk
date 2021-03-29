<template>
  <div>
    <div></div>
  </div>
</template>

<script scoped>
// import Avatar from "vue-avatar";
import axios from "axios";
export default {
  name: "ResumeRightSidebar",
  components: {
    // Avatar
  },
  data: function() {
    return {
      inputs: {
        first_name: "",
        last_name: "",
        middle_name: "",
        email: ""
      },
      personal_details: {
        age: "",
        phone: "",
        gender: "",
        marital_status: "",
        nationality: "",
        address: "",
        date_of_birth: "",
        selectedLGA: "",
        selectedState: ""
      },
      updatedCerts: [],
      updatedskills: [],
      updatedForms: [],
      experiences: [],
      updatedexperiences: [],
      updatedreferrees: []
      // updatedForms: {
      //   school: "",
      //   degree: "",
      //   course_of_study: "",
      //   grade: "",
      //   from: "",
      //   to: ""
      // },
    };
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
      })
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
    axios
      .get("https://api.myjobdesk.com/api/personal_details", {
        headers: headers
      })
      .then(response => {
        console.log(response);
        this.personal_details.marital_status = response.data.marital_status;
        this.personal_details.gender = response.data.gender;
        this.personal_details.selectedLGA = response.data.lga;
        this.personal_details.selectedState = response.data.state_of_origin;
        this.personal_details.nationality = response.data.nationality;
        this.personal_details.address = response.data.address;
        this.personal_details.date_of_birth = response.data.date_of_birth;
        this.personal_details.phone = response.data.phone;
        console.log(response);
      })
      .catch(error => {
        console.log("Failed to fetch personal details " + error.message);
      });
    axios
      .get("https://api.myjobdesk.com/api/skills/all", {
        headers: headers
      })
      .then(response => {
        this.updatedskills = response.data;
        console.log(response);
      })
      .catch(error => {
        console.log("Failed to fetch Skills" + error.message);
      });
    axios
      .get("https://api.myjobdesk.com/api/educational_details/all", {
        headers: headers
      })
      .then(response => {
        this.updatedForms = response.data;
        // this.eDResponse = response.status;
        console.log(response);
      })
      .catch(error => {
        console.log("Failed to fetch education details " + error.message);
      });
    axios
      .get("https://api.myjobdesk.com/api/certificates/all", {
        headers: headers
      })
      .then(response => {
        this.updatedCerts = response.data;
        console.log(response);
      })
      .catch(error => {
        console.log("Failed to fetch certificates " + error.message);
      });
    axios
      .get("https://api.myjobdesk.com/api/experiences/all", {
        headers: headers
      })
      .then(response => {
        this.updatedexperiences = response.data;
      })
      .catch(error => {
        console.log("Failed to fetch experiences " + error.message);
      });
    axios
      .get("https://api.myjobdesk.com/api/referrees/all", {
        headers: headers
      })
      .then(response => {
        this.updatedreferrees = response.data;
      })
      .catch(error => {
        console.log("Failed to fetch referrees " + error.message);
      });
  }
};
</script>

<style>
.avatar_center {
  margin-left: 47%;
  box-sizing: border-box;
}
</style>
