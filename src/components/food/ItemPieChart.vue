<script>
  import { Doughnut } from "vue-chartjs";

  export default {
    extends: Doughnut,
    props: ["params"],
    mounted() {
      this.renderChart(
        {
          labels: ["Белки", "Жиры", "Углеводы"],
          datasets: [
            {
              backgroundColor: ['#F7D840', '#FB439B', '#5A0DA9'],
              data: [this.params.proteins, this.params.fats, this.params.carbohydrates]
            }
          ]
        },
        { 
          responsive: true, 
          maintainAspectRatio: false, 
          legend: false, 
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
              }
            },
            backgroundColor: '#000'
          } 
        }
      );
    }
  }
</script>
