import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  ChartData,
  ChartOptions,
  TimeScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Dataset } from './datasetObject';
import { parseISO } from 'date-fns';
import { useMemo } from 'react';
import "chart.js/auto";
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

export const LineGraph = (props: {
  titleText: string;
  datasets: Dataset[];
  labels: string[];
}) => {
  const labels = useMemo(() => {
    return props.labels.map((ts) => parseISO(ts));
  }, [props.labels.join(',')]);

  const options: ChartOptions<'line'> = useMemo(() => ({
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
        title: {
          display: true,
          text: 'Date',
        },
        type: 'time',
        time: {
          unit: 'hour', // or 'minute' if you want minute-level precision
          tooltipFormat: 'yy-MM-dd HH:mm',
          displayFormats: {
              hour: 'yy-MM-dd HH:mm' // Force hour:minute display
          }
      }
      },
      y: {
        beginAtZero: false,
      },
    },
  }), [props.titleText]);

  const data: ChartData<'line'> = useMemo(() => ({
    labels,
    datasets: props.datasets,
  }), [labels, props.datasets]); //Remove stringify.

  return (
    <Line
      options={options}
      data={data}
    />
  );
};