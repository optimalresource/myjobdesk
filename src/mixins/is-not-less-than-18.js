export default {
  methods: {
    greaterOrEqualTo18Years(givendate) {
      var chosenDate = +new Date(givendate);
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;
      today = +new Date(today);
      if (today - chosenDate < 568080000000) {
        return false;
      }
      return true;
    }
  }
};
