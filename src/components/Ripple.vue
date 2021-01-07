<template lang="pug">
    //- .ripple
</template>
<script>
export default {
  name: "Ripple"
};
</script>
<style lang="sass" scoped>
$ripple-color: #990066
body
  font-family: Arial
  text-align: center
  background-color: #111
  padding-top: 100px
  text-align:center

.ripple
  text-decoration: none
  color: #fff
  width: 12px
  height: 12px
  background-color: #990066
  margin: 0 auto
  border-radius: 100px
  -webkit-animation: ripple .7s linear infinite
  animation: ripple .7s linear infinite

@-webkit-keyframes ripple
  0%
    box-shadow: 0 0 0 0 rgba($ripple-color, 0.3), 0 0 0 10px rgba($ripple-color, 0.3), 0 0 0 30px rgba($ripple-color, 0.3), 0 0 0 60px rgba($ripple-color, 0.3)

  100%
    box-shadow: 0 0 0 10px rgba($ripple-color, 0.3), 0 0 0 30px rgba($ripple-color, 0.3), 0 0 0 60px rgba($ripple-color, 0.3), 0 0 0 90px rgba($ripple-color, 0)


@keyframes ripple
  0%
    box-shadow: 0 0 0 0 rgba($ripple-color, 0.3), 0 0 0 10px rgba($ripple-color, 0.3), 0 0 0 30px rgba($ripple-color, 0.3), 0 0 0 60px rgba($ripple-color, 0.3)

  100%
    box-shadow: 0 0 0 10px rgba($ripple-color, 0.3), 0 0 0 30px rgba($ripple-color, 0.3), 0 0 0 60px rgba($ripple-color, 0.3), 0 0 0 90px rgba($ripple-color, 0)
</style>
