<template>
  <div class="hello">
    <Preloader />

    <div class="cursor"></div>

    <a href="javascript:" id="return-to-top"
      ><i class="fas fa-angle-double-up"></i
    ></a>

    <Navigation />

    <MainNavigation />

    <Banner />

    <Category />

    <Grow />

    <LatestJob />

    <Counter />

    <TopCompany />

    <!-- <Price /> -->

    <Review />

    <!-- <Download /> -->

    <Blog />

    <Footer />

    <div id="chat-circle" class="btn btn-raised">
      <i class="fas fa-comment-alt"></i>
    </div>

    <ChatBox />
  </div>
</template>

<script>
import ChatBox from "@/components/ChatBox.vue";
import Footer from "@/components/Footer.vue";
import Blog from "@/components/Blog.vue";
// import Download from "@/components/Download.vue";
import Review from "@/components/Review.vue";
// import Price from "@/components/Price.vue";
import TopCompany from "@/components/TopCompany.vue";
import Counter from "@/components/Counter.vue";
import LatestJob from "@/components/LatestJob.vue";
import Grow from "@/components/Grow.vue";
import Category from "@/components/Category.vue";
import Banner from "@/components/Banner.vue";
import MainNavigation from "@/components/MainNavigation.vue";
import Navigation from "@/components/Navigation.vue";
import Preloader from "@/components/Preloader.vue";

export default {
  name: "HelloWorld",
  props: {
    title: String
  },
  created() {
    document.title = this.title;
  },
  components: {
    ChatBox,
    Footer,
    Blog,
    // Download,
    Review,
    TopCompany,
    Counter,
    LatestJob,
    Grow,
    Category,
    Banner,
    MainNavigation,
    Navigation,
    Preloader
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
