export default {
  methods: {
    isEndDateGreater(start_date, end_date) {
      start_date = +new Date(start_date);
      end_date = +new Date(end_date);
      if (start_date > end_date) {
        return false;
      }
      return true;
    }
  }
};
