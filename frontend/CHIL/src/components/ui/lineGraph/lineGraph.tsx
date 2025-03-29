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
import { parseISO } from 'date-fns'

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

    const dateObjects = props.labels.map(ts => {
        const parsedDate = parseISO(ts);
        return parsedDate;
    });
    const labels = dateObjects;

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
        scales: {
          x: {
            type: 'time',
          },
        },
    };

    const data = {
        labels,
        datasets: props.datasets
    };

    return (
        <Line key={JSON.stringify(data) + JSON.stringify(options)} options={options} data={data} />
    );
}




