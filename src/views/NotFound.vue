<template>
  <div class="we_do">
    <div class="not">
      <img src="../assets/images/error1.png" alt="" />
    </div>
    <div class="disappear">
      <h3>404</h3>
      <hr class="hr">
      <p>Opps! Page not found</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.not {
  margin-top: 10px;
  position: relative;
  align-content: center;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
}
.disappear {
  display: none;
}
@media only screen and (max-width: 481px) {
  .not {
    display: none;
  }
  .disappear {
    padding: 20px;
    position: relative;
    align-content: center;
    align-items: center;
    justify-content: center;
    display: block;
    font-size: 20px;
    margin-top: 50px;
  }
  h3 {
    font-size: 30px;
  }
}
</style>
