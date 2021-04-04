<template>
  <div class="full_div">
    <div class="middle">
      <div class="container justfy-content-center text-center">
        <h2 class="mb-2">Your Session has ended</h2>
        <h6 class="mb-2">Thank You for Participating</h6>
      </div>

      <div class="">
        <div>
          <p class="text-center jp">
            You Scored is <span>{{ score }}</span
            >%
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.full_div {
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  /* font-family: "Sarpanch", sans-serif; */
  background-color: white;
  font-weight: 500;
}
</style>
