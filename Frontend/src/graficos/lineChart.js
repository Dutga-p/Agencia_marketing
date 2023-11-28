import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);



var beneficios = [30, 56, 20, 36, 70];
var meses = ["Yumbo", "Pasto", "Candelaria", "Jamundi", "Cali"];

var midata = {
    labels: meses,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: '2023',
            data: beneficios,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(0, 0, 0)',
            backgroundColor: 'rgba(0, 99, 150, 0.6)',
            pointRadius: 5,
            pointBorderColor: 'rgba(0, 99, 132)',
            pointBackgroundColor: 'rgba(0, 99, 132)',
        },
        {
            label: '2022',
            data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25]
        },
    ],
};

var options = {
    responsive : true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    //   title: {
    //     display: true,
    //     text: 'Ventas primer semestre 2023',  // Update the title here
    //     color: 'rgb(0, 255, 0)',
    //     font: {
    //         size: 30,
    //         family: "Times New Roman",
    //     },   
    //   },
    },
    scales : {
        y : {
            // title: {
            //     color: 'rgb(0, 0, 255)',
            //     display: true,
            //     text: "Ventas en millones",
            //     font: {
            //         size: 20,
            //         family: "Arial",
            //     }, 
            // },
            max: 100,
            min: 0,
            ticks: { color: 'rgb(0, 99, 132)'},
        },
        x: {
            // title: {
            //     color: 'rgb(255, 0, 255)',
            //     display: true,
            //     text: "Sucursales",
            //     font: {
            //         size: 20,
            //         family: "Times New Roman",
            //     },    
            // },
            ticks: { color: 'rgb(0, 99, 132)'},
        }
    }
};


export default function LinesChart() {
    return <Line data={midata} options={options}/>
}