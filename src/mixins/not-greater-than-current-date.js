export default {
  methods: {
    notGreaterThanCurrentDate(givendate) {
      var chosenDate = +new Date(givendate);
      var today = new Date();
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = yyyy + "-" + mm;
      today = +new Date(today);
      if (today < chosenDate) {
        return false;
      }
      return true;
    }
  }
};
