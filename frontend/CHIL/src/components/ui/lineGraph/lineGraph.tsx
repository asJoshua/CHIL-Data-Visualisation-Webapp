import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Dataset } from './datasetObject';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineGraph = (props: {
    titleText: string;
    datasets: Dataset[];
    labels: string[]; 
}) => {

    const labels = props.labels;

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: props.titleText,
          },
        },
        
    };

    const data = {
        labels,
        datasets: props.datasets
      };

    return (
        <Line options={options} data={data} />
    );
}




