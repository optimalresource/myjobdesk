<template>
  <div>
    <div class="text-center interview_div">
      <div class="inner_div">
        <span class="stop_watch text-center">
          <div class="countdown">
            <h6>
              {{ timeLeft }}
            </h6>
            <h6>
              Your Session will end at <span>{{ endTime }}</span>
            </h6>
          </div>

          <ul class="timer">
            <li v-for="(time, index) in times" :key="index" class="column time">
              <button
                class="btn btn-success mb-5"
                @click.once="setTime(time.sec)"
                :class="[
                  'btn',
                  'is-link',
                  { 'is-active': time.sec === selectedTime && endTime !== 0 }
                ]"
              >
                {{ time.display }}
              </button>
            </li>
          </ul>
        </span>

        <div class="interview">
          <h3 class="p-5">Please Answer All Questions</h3>
          <h6 class="p-5">Instructions</h6>
          <div class="question_div justify-content-center text-light bg-info">
            1
          </div>
          <div class="question_div justify-content-center text-light bg-danger">
            2
          </div>
          <div
            class="question_div justify-content-center text-light bg-primary"
          >
            3
          </div>
          <div class="question_div justify-content-center text-light bg-dark">
            4
          </div>
          <div
            class="question_div justify-content-center text-light bg-secondary"
          >
            5
          </div>
          <div class="question_div justify-content-center text-dark bg-light">
            6
          </div>
          <div class="question_div justify-content-center text-light bg-info">
            7
          </div>
          <div class="question_div justify-content-center text-light bg-danger">
            8
          </div>
          <div
            class="question_div justify-content-center text-light bg-primary"
          >
            9
          </div>
          <div class="question_div justify-content-center text-light bg-info">
            10
          </div>
          <div
            class="question_div justify-content-center text-light bg-secondary"
          >
            11
          </div>
          <div
            class="question_div justify-content-center text-light bg-primary"
          >
            12
          </div>
          <div class="question_div justify-content-center text-light bg-danger">
            13
          </div>
          <div class="question_div justify-content-center text-dark bg-light">
            14
          </div>
          <div class="question_div justify-content-center text-light bg-info">
            15
          </div>
          <div
            class="question_div justify-content-center text-light bg-secondary"
          >
            16
          </div>
          <div class="question_div justify-content-center text-light bg-danger">
            17
          </div>
          <div
            class="question_div justify-content-center text-light bg-primary"
          >
            18
          </div>
          <div
            class="question_div justify-content-center text-light bg-secondary"
          >
            19
          </div>
          <div class="question_div justify-content-center text-light bg-info">
            20
          </div>
          <button @click="endInterview" class="btn btn-secondary">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function zeroPadded(num) {
  // 4 --> 04
  return num < 10 ? `0${num}` : num;
}
function hourConvert(hour) {
  // 15 --> 3
  return hour % 12 || 12;
}

// import Questions from "@/components/Questions.vue";
export default {
  name: "Timer",
  data: function() {
    return {
      selectedTime: 0,
      timeLeft: "00:00",
      endTime: "0",
      times: [
        // {
        //   sec: 3,
        //   display: "3s"
        // },
        {
          sec: 1200,
          display: " Start Session"
        }
        // {
        //   sec: 1800,
        //   display: "30m"
        // }
      ]
    };
  },
  components: {
    // Questions
  },
  methods: {
    startCallBack: function(x) {
      console.log(x);
    },
    endCallBack: function(x) {
      console.log(x);
    },
    setTime(seconds) {
      document.getElementsByClassName("interview")[0].style.display = "block";
      document.getElementsByClassName("timer")[0].style.display = "none";
      document.getElementsByClassName("timer")[0].style.float = "right";

      var intervalTimer;
      clearInterval(intervalTimer);
      this.timer(seconds);
    },
    timer(seconds) {
      const now = Date.now();
      const end = now + seconds * 1000;
      this.displayTimeLeft(seconds);

      this.selectedTime = seconds;
      // this.initialTime = seconds;
      this.displayEndTime(end);
      this.countdown(end);
    },
    countdown(end) {
      // this.initialTime = this.selectedTime;
      var intervalTimer;
      intervalTimer = setInterval(() => {
        const secondsLeft = Math.round((end - Date.now()) / 1000);

        if (secondsLeft === 0) {
          this.endTime = 0;
        }

        if (secondsLeft < 0) {
          this.$router.push("/endInterview");
          clearInterval(intervalTimer);
          return;
        }
        this.displayTimeLeft(secondsLeft);
      }, 1000);
    },
    endInterview() {
      this.$router.push("/endInterview");
    },

    displayTimeLeft(secondsLeft) {
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const seconds = secondsLeft % 60;

      this.timeLeft = `${zeroPadded(minutes)}:${zeroPadded(seconds)}`;
    },
    displayEndTime(timestamp) {
      const end = new Date(timestamp);
      const hour = end.getHours();
      const minutes = end.getMinutes();

      this.endTime = `${hourConvert(hour)}:${zeroPadded(minutes)}`;
    }
  }
};
</script>
<style scoped>
.interview_div {
  margin: 20px 200px;
}
.inner_div {
  padding: 20px;
}
@media (max-width: 1125px) {
  .interview_div {
    margin: auto 100px;
  }
}
@media (max-width: 578px) {
  .interview_div {
    margin: auto 50px;
  }
}
@media (max-width: 500px) {
  .interview_div {
    margin: auto 0px;
  }
}
.question_div {
  height: 100px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
}
.interview {
  display: none;
}
</style>
