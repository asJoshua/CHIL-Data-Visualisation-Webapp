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

  const options: ChartOptions<'line'> = useMemo(() => {
    const yAxes = {
      y: {
        type: 'linear',
        position: 'left',
        beginAtZero: false,
        title: {
          display: true,
          text: 'Y-Axis 1',
        },
      },
    };

    if (props.datasets.length > 1) {
      yAxes['y2'] = {
        type: 'linear',
        position: 'right',
        beginAtZero: false,
        title: {
          display: true,
          text: 'Y-Axis 2',
        },
        grid: {
          drawOnChartArea: false,
        },
      };
    }

    return {
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
            unit: 'hour',
            tooltipFormat: 'yy-MM-dd HH:mm',
            displayFormats: {
              hour: 'yy-MM-dd HH:mm',
            },
          },
        },
        ...yAxes,
      },
      elements: {
        line: {
          borderWidth: 0,
        },
      },
      datasets: {
        line: {
          show: true,
        },
      },
    };
  }, [props.titleText, props.datasets]);

  const data: ChartData<'line'> = useMemo(() => ({
    labels,
    datasets: props.datasets.map((dataset) => ({
      ...dataset,
      yAxisID: dataset.yAxisID || 'y',
    })),
  }), [labels, props.datasets]);

  return (
    <Line
      options={options}
      data={data}
    />
  );
};