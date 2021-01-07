<template>
  <div class="container">
    <div class="form-group col-md-12">
      <label for="logo" class="control-label"
        >Please upload relevant documents in relation to this field</label
      >
      <br />
      <div class="col-md-12">
        <input
          type="file"
          accept="application/pdf,.doc,.docx,application/msword"
          multiple="multiple"
          id="uploaders"
          @change="uploadFieldChange"
          class="negative-margin-left"
        />
        <p class="info">Only PDF and Doc and docx files</p>
        <hr />
        <div class="col-md-12">
          <div
            class="uploader-holder animated fadeIn"
            v-cloak
            v-for="uploader in uploaders"
            :key="uploader"
          >
            <span class="label label-primary">{{
              uploader.name +
                " (" +
                Number((uploader.size / 1024 / 1024).toFixed(1)) +
                "MB)"
            }}</span>
            <span
              class=""
              style="background: white; cursor: pointer;"
              @click="removeuploader(uploader)"
              ><button class="btn btn-xs btn-danger">
                <i class="fas fa-times"></i></button
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import toastr from "toastr";
export default {
  name: "SkillAndWork",
  props: ["settings"],
  data() {
    return {
      uploaders: [],
      data: new FormData(),
      errors: {},
      percentCompleted: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    getuploaderSize() {
      this.upload_size = 0;
      this.uploaders.map(item => {
        this.upload_size += parseInt(item.size);
      });

      this.upload_size = Number(this.upload_size.toFixed(1));
      this.$forceUpdate();
    },
    prepareFields() {
      if (this.uploaders.length > 0) {
        for (var i = 0; i < this.uploaders.length; i++) {
          let uploader = this.uploaders[i];
          this.data.append("uploaders[]", uploader);
        }
      }
    },
    removeuploader() {
      this.uploaders.splice(this.uploaders.indexOf(this.uploader), 1);

      this.getuploaderSize();
    },
    uploadFieldChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      for (var i = files.length - 1; i >= 0; i--) {
        this.uploaders.push(files[i]);
      }
      document.getElementById("uploaders").value = [];
    },
    submit() {
      this.prepareFields();
      var config = {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: function(progressEvent) {
          this.percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          this.$forceUpdate();
        }.bind(this)
      };
      axios
        .post(this.settings.file_management.upload_files, this.data, config)
        .then(
          function(response) {
            console.log(response);
            if (response.data.success) {
              console.log("Successfull Upload");
              toastr.success("Files Uploaded!", "Success");
              this.resetData();
            } else {
              console.log("Unsuccessful Upload");
              this.errors = response.data.errors;
            }
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    resetData() {
      this.data = new FormData();
      this.uploaders = [];
    },
    start() {
      console.log("Starting File Management Component");
    }
  },
  created() {
    this.start();
  }
};
</script>

<style>
.work-experiences > div {
  margin: 20px 0;
  padding-bottom: 10px;
}
.work-experiences > div:not(:last-child) {
  border-bottom: 1px solid rgb(206, 212, 218);
}
h4 {
  color: #990066;
  text-align: center;
}
.info {
  color: rgb(0, 0, 0);
  font-size: smaller;
  margin-left: -25px;
  width: 50%;
}
.negative-margin-left {
  margin-left: -25px;
}
</style>
