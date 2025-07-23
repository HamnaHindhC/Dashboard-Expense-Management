let currentChart; 

  const renderChart = (data, labels, chartType = 'doughnut') => {
    const ctx = document.getElementById('myChart').getContext('2d');

    if (currentChart) {
      currentChart.destroy(); 
    }

    currentChart = new Chart(ctx, {
      type: chartType,
      data: {
        labels: labels,
        datasets: [{
          label: 'Last 6 months expenses',
          data: data,
          borderWidth: 1,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'EXPENSES PER CATEGORY',
            font: {
              size: 20
            }
          }
        }
      }
    });
  };

  let chartData = [];
  let chartLabels = [];

  const getChartData = () => {
    fetch('/expense_category_summary')
      .then(res => res.json())
      .then((results) => {
        const category_data = results.expense_category_data;
        chartLabels = Object.keys(category_data);
        chartData = Object.values(category_data);
        renderChart(chartData, chartLabels);  
      });
  };


  window.onload = getChartData;

 
  document.getElementById('chartTypeSelector').addEventListener('change', function () {
    const selectedType = this.value;
    if (chartData.length && chartLabels.length) {
      renderChart(chartData, chartLabels, selectedType);
    }
  });