<template>
  <div>
  

    <!-- <VueFileAgent
      class="profile-pic-upload-block"
      ref="profilePicRef"
      :multiple="false"
      :deletable="false"
      :meta="false"
      :compact="true"
      :accept="'image/*'"
      :helpText="'Drag an image file here'"
      :errorText="{
        type: 'Please select an image'
      }"
      v-model="profilePic"
      @select="onSelect($event)"
    >
      <template v-slot:before-outer> </template>
      <template v-slot:after-inner>
        <span title="after-inner" class="btn btn-link btn-sm btn-block"
          >Select image file</span
        >
      </template>
      <template v-slot:after-outer>
        <div title="after-outer">
          <p>Please select an image and click the upload button</p>
          <div class="drop-help-text">
            <p class="text-success">Drop the file!</p>
          </div>
          <button
            type="button"
            class="btn btn-primary"
            @click.prevent="upload()"
          >
            Upload
          </button>
          <button
            type="button"
            class="btn btn-danger float-right"
            v-if="profilePic"
            @click="removePic()"
          >
            Remove
          </button>
          <div class="clearfix"></div>
        </div>
      </template>
    </VueFileAgent> -->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      fileRecords: [],
      uploadUrl: "https://www.mocky.io/v2/5d4fb20b3000005c111099e3",
      uploadHeaders: { "X-Test-Header": "vue-file-agent" },
      fileRecordsForUpload: [],
      profilePic: null,
      uploaded: false,
      show: true
    };
  },
  methods: {
    removePic: function() {
      var profilePic = this.profilePic;
      this.$refs.profilePicRef.deleteUpload(
        this.uploadUrl,
        this.uploadHeaders,
        [profilePic]
      );
      this.profilePic = null;
      this.uploaded = false;
    },
    upload: function() {
      var self = this;
      this.$refs.profilePicRef
        .upload(this.uploadUrl, this.uploadHeaders, [this.profilePic])
        .then(function() {
          self.uploaded = true;
          setTimeout(function() {
            self.profilePic.progress(0);
          }, 500);
        });
    },
    onSelect: function(fileRecords) {
      console.log("onSelect", fileRecords);
      this.uploaded = false;
    },
    toggleShow() {
      this.show = !this.show;
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------");
      this.imgDataUrl = imgDataUrl;
      console.log(field);
    },
    /**
     * upload success
     *
     * [param] jsonData  server api return data, already json encode
     * [param] field
     */
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      console.log(jsonData);
      console.log("field: " + field);
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log(status);
      console.log("field: " + field);
    }
    // uploadFiles: function() {
    //   // Using the default uploader. You may use another uploader instead.
    //   this.$refs.vueFileAgent.upload(
    //     this.uploadUrl,
    //     this.uploadHeaders,
    //     this.fileRecordsForUpload
    //   );
    //   this.fileRecordsForUpload = [];
    // },
    // deleteUploadedFile: function(fileRecord) {
    //   // Using the default uploader. You may use another uploader instead.
    //   this.$refs.vueFileAgent.deleteUpload(
    //     this.uploadUrl,
    //     this.uploadHeaders,
    //     fileRecord
    //   );
    // },
    // filesSelected: function(fileRecordsNewlySelected) {
    //   var validFileRecords = fileRecordsNewlySelected.filter(
    //     fileRecord => !fileRecord.error
    //   );
    //   this.fileRecordsForUpload = this.fileRecordsForUpload.concat(
    //     validFileRecords
    //   );
    // },
    // onBeforeDelete: function(fileRecord) {
    //   var i = this.fileRecordsForUpload.indexOf(fileRecord);
    //   if (i !== -1) {
    //     this.fileRecordsForUpload.splice(i, 1);
    //   } else {
    //     if (confirm("Are you sure you want to delete?")) {
    //       this.$refs.vueFileAgent.deleteFileRecord(fileRecord); // will trigger 'delete' event
    //     }
    //   }
    // },
    // fileDeleted: function(fileRecord) {
    //   var i = this.fileRecordsForUpload.indexOf(fileRecord);
    //   if (i !== -1) {
    //     this.fileRecordsForUpload.splice(i, 1);
    //   } else {
    //     this.deleteUploadedFile(fileRecord);
    //   }
    // }
  }
};
</script>

<style scoped>
.change_prodile_pics_div {
  text-align: center;
  background: repeating-radial-gradient(
    circle at 0 0,
    rgb(255, 89, 89),
    rgb(255, 130, 130) 25%
  );
  color: white;
  font-size: 20px;
  height: 100px;
}
.change_prodile_pics_div a {
  color: white;
}
.change_prodile_pics_div a:hover {
  color: white;
  text-decoration: underline;
}
</style>
