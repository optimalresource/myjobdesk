export default {
  methods: {
    inArray(arr, string) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == string) return true;
      }
      return false;
    }
  }
};
