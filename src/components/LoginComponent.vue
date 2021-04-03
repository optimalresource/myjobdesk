<template>
  <div>
    <!-- <Preloader />

    <div class="cursor"></div>

    <a href="javascript:" id="return-to-top"
      ><i class="fas fa-angle-double-up"></i
    ></a>

    <Navigation />

    <MainNavigation />

    <MainNavLogin :mainTitle="page" /> -->

    <ContentTemplate :page="page" />

    <!-- <div class="blog_wrapper jb_cover">
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

    <ChatBox /> -->
  </div>
</template>

<script>
// import Footer from "@/components/Footer.vue";
// import ChatBox from "@/components/ChatBox.vue";
// import Navigation from "@/components/Navigation.vue";
// import MainNavigation from "@/components/MainNavigation.vue";
// import MainNavLogin from "@/components/MainNavLogin.vue";
// import Looking from "@/components/Looking.vue";
import ContentTemplate from "@/components/ContentTemplate.vue";
// import Preloader from "@/components/Preloader.vue";

export default {
  name: "LoginComponent",
  components: {
    // ChatBox,
    // Footer,
    // MainNavigation,
    // Navigation,
    // MainNavLogin,
    ContentTemplate,
    // Looking,
    // Preloader
  },
  props: {
    title: String,
    page: String,
  },
  created() {
    document.title = this.title;
  },
};
</script>

<style scoped></style>
