<template>
  <div>
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
    <button class="submit-edu" @click.prevent="submitEducationalDetails">
      Save Info
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      files: [],
      selectedFiles: new FormData(),
      attachments: [],
    };
  },
  methods: {
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
    submitEducationalDetails() {
      if (this.attachments.length > 0) {
        for (let i = 0; i < this.attachments.length; i++) {
          this.selectedFiles.append("filename[]", this.attachments[i]);
        }
      }
      console.log(this.attachments);

      if (!this.onLine) {
        this.$toastr.e("Please check your internet connection");
        return false;
      }

      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Submitting Educational Detail",
        "Content-Type": "multipart/form-data",
      };
      console.log(this.selectedFiles);
      axios
        .post(
          "https://api.myjobdesk.com/api/educational_details",
          this.selectedFiles,
          {
            headers,
          }
        )
        .then((response) => {
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
          this.eDResponse = response.status;

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
        .catch((error) => {
          this.errorMessage = error.message;
          console.log(error.message);
        });
    },
  },
};
</script>

<style></style>
