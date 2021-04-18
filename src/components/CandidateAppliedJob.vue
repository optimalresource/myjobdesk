<template>
  <div>
    <CandidateAppliedJobNav />
    <div class="cursor"></div>

    <a href="javascript:" id="return-to-top"
      ><i class="fas fa-angle-double-up"></i
    ></a>
    <ManageJobWrapper />
    <div class="blog_wrapper jb_cover">
      <div class="container">
        <div class="row">
          <Looking />
        </div>
      </div>
    </div>

    <Footer />

    <div id="chat-circle" class="btn btn-raised">
      <i class="fas fa-comment-alt"></i>
    </div>
    <ChatBox />
  </div>
</template>

<script>
import ChatBox from "@/components/ChatBox.vue";
import Looking from "@/components/Looking.vue";
import Footer from "@/components/Footer.vue";
import CandidateAppliedJobNav from "@/components/CandidateAppliedJobNav.vue";
import ManageJobWrapper from "@/components/ManageJobWrapper.vue";
export default {
  name: "CandidateDashboae",
  components: {
    ChatBox,
    Looking,
    Footer,
    CandidateAppliedJobNav,
    ManageJobWrapper
  }
};
</script>

<style></style>
