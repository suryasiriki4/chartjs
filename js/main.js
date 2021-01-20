import averageIntensityArray from './intesity_calculation.js';
import { sectorLabelsArray } from './segregation.js';

const CHART = document.getElementById("lineChart");
Chart.defaults.scale.ticks.beginAtZero = true;


let lineChart = new Chart(CHART, {
    type: 'radar',
    data: { 
        labels: sectorLabelsArray,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgba(00, 255, 00, 0.1)",
                borderColor: "#00FF00",
                data: averageIntensityArray,
            }
        ],
        options: {
            sclaes: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }
});

