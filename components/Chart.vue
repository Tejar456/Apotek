<template>
  <div>
    <h2>Statistik</h2>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script setup>
import Chart from "chart.js/auto";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Omzet",
      backgroundColor: "rgb(38, 92, 181)",
      borderColor: "rgb(255, 99, 132)",
      data: [20, 10, 5, 2, 20, 50, 77],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {},
};

onMounted(() => {
  const myChart = new Chart(document.getElementById("myChart"), config);
});
</script>

<style scoped>
#myChart {
  width: 1500px;
}
</style>
