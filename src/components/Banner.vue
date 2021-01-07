<template>
  <div>
    <div class="jb_banner_wrapper jb_cover">
      <div class="jb_banner_left">
        <h1>The Easy Way To Get Your New Job</h1>
        <p>Land your next job with ease and at your convenience.</p>
        <div class="contect_form3">
          <input
            type="text"
            name="name"
            placeholder="Keyword e.g. (Job Title, Description, Tags)"
          />
        </div>
        <div class="select_box">
          <i class="flaticon-map"></i>
          <select>
            <option>select location</option>
            <option>california</option>
            <option>los velas</option>
            <option>noida</option>
            <option>chicago</option>
          </select>
        </div>
        <div class="select_box select_box_2">
          <i class="flaticon-squares-gallery-grid-layout-interface-symbol"></i>
          <select>
            <option>category</option>
            <option>real estate</option>
            <option>electronics</option>
            <option>marketing</option>
            <option>education</option>
          </select>
        </div>
        <div class="select_box">
          <i class="flaticon-statistics"></i>
          <select>
            <option>experience</option>
            <option>5 years</option>
            <option>3 years</option>
            <option>2 years</option>
            <option>fresher</option>
          </select>
        </div>
        <div class="header_btn search_btn jb_cover">
          <a href="#"><i class="fas fa-search"></i> search</a>
        </div>

        <div class="jb_btm_keyword jb_cover">
          <ul>
            <li><i class="flaticon-tag"></i> Trending Keywords :</li>
            <li><a href="#">software developer,</a></li>
            <li><a href="#">ui designer,</a></li>
            <li><a href="#">marketer</a></li>
            <li><a href="#">it company,</a></li>
            <li><a href="#">accountant,</a></li>
            <li><a href="#">call center</a></li>
          </ul>
        </div>
      </div>
      <div
        class="jb_banner_right d-none d-sm-none d-md-none d-lg-none d-xl-block"
      >
        <div class="animation-circle-inverse"><i></i><i></i><i></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style scoped></style>
