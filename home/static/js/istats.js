let currentChart;  
let currentType = 'doughnut'; 

const renderChart = (data, labels, type = 'doughnut') => {
    const ctx = document.getElementById('myChart');

    if (currentChart) {
        currentChart.destroy();
    }

    currentChart = new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                label: 'Last 6 months income',
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
            plugins: {
                title: {
                    display: true,
                    text: 'INCOMES PER SOURCE',
                    font: {
                        size: 20
                    }
                },
                legend: {
                    display: true
                }
            }
        }
    });
};

const getChartData = () => {
    fetch('/income/income_source_summary')
        .then(res => res.json())
        .then((results) => {
            const source_data = results.income_source_data;
            const labels = Object.keys(source_data);
            const data = Object.values(source_data);
            renderChart(data, labels, currentType); 
        });
};

const toggleChartType = () => {
    if (currentType === 'doughnut') {
  currentType = 'bar';
} else if (currentType === 'bar') {
  currentType = 'polarArea';
} else {
  currentType = 'doughnut';
}

    getChartData(); 
};

window.onload = getChartData;
