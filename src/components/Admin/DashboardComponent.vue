<template>
  <div>
    <DashboardHeader />
    <div class="page_title_section">
      <div class="page_header">
        <div class="container">
          <div class="row">
            <!-- section_heading start -->
            <div class="col-xl-9 col-lg-7 col-md-7 col-12 col-sm-12">
              <h1>Dashboard</h1>
            </div>
            <div class="col-xl-3 col-lg-5 col-md-5 col-12 col-sm-12">
              <div class="sub_title_section">
                <ul class="sub_title">
                  <li><a href="#"> Home </a>&nbsp; / &nbsp;</li>
                  <li>Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="employe_dashboard_wrapper jb_cover">
      <div class="container">
        <div class="row">
          <Sidebar />
          <div class="col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="job_listing_left_fullwidth jb_cover">
                  <div class="row">
                    <div class="col-lg-8 col-md-7 col-sm-12 col-12">
                      <div class="jp_job_post_right_cont">
                        <h4>{{}}</h4>

                        <ul>
                          <li>
                            <i class="flaticon-location-pointer"></i>&nbsp; {{}}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="emp_job_post jb_cover">
                  <div class="emp_job_side_img">
                    <i class="fas fa-book"></i>
                  </div>
                  <div class="emp_job_side_text">
                    <h1>360</h1>
                    <p>job posted</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="emp_job_post jb_cover">
                  <div class="emp_job_side_img ress">
                    <i class="fas fa-user"></i>
                  </div>
                  <div class="emp_job_side_text">
                    <h1>590</h1>
                    <p>shortlisted resume</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="emp_job_post jb_cover">
                  <div class="emp_job_side_img greens">
                    <i class="fas fa-eye"></i>
                  </div>
                  <div class="emp_job_side_text">
                    <h1>11,200</h1>
                    <p>total page view</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="emp_job_post jb_cover">
                  <div class="emp_job_side_img parts">
                    <i class="fas fa-envelope-open-text"></i>
                  </div>
                  <div class="emp_job_side_text">
                    <h1>1,608</h1>
                    <p>total applications</p>
                  </div>
                </div>
              </div>
              <div class="m-3"></div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="job_filter_category_sidebar jb_cover">
                  <div class="job_filter_sidebar_heading jb_cover">
                    <h1>graph</h1>
                  </div>
                  <div id="chart">
                    <apexchart
                      type="line"
                      height="350"
                      :options="chartOptions"
                      :series="series"
                    ></apexchart>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="job_filter_category_sidebar jb_cover">
                  <div class="job_filter_sidebar_heading jb_cover">
                    <h1>activities</h1>
                  </div>
                  <div class="job_overview_header apps_wrapper jb_cover">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="activity_app">
                          <i class="fas fa-angle-right"></i>
                        </div>

                        <div class="activity_logos">
                          <h4>Dobrick published an article</h4>

                          <ul>
                            <li>2 hours ago</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/DashboardHeader.vue";
import Sidebar from "@/components/Admin/Sidebar.vue";
export default {
  data: function() {
    return {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 123, 23, 45]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
        title: {
          text: "Number of Candidate Applications",
          align: "left"
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        }
      }
    };
  },
  components: {
    DashboardHeader,
    Sidebar
  },
  methods: {
    updateChart() {
      const max = 90;
      const min = 20;
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });

      const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];

      // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
      this.chartOptions = {
        colors: [colors[Math.floor(Math.random() * colors.length)]]
      };
      // In the same way, update the series option
      this.series = [
        {
          data: newData
        }
      ];
    }
  }
};
</script>

<style scoped>
.apexcharts-zoom-icon svg,
.apexcharts-zoomin-icon svg,
.apexcharts-zoomout-icon svg,
.apexcharts-reset-icon svg,
.apexcharts-menu-icon svg {
  fill: #ffffff;
  margin-top: 12px;
}
</style>
