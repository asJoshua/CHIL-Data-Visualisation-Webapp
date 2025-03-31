import {
  Align,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Color,
  FontSpec,
  Legend,
  LinearScale,
  LinearScaleOptions,
  LineElement,
  Point,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Dataset } from "./datasetObject";
import { parseISO } from "date-fns";
import { useMemo } from "react";
import "chart.js/auto";
import "chartjs-adapter-date-fns";

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

interface YAxesScales {
  y: Partial<LinearScaleOptions> & { type: "linear" };
  y2?: Partial<LinearScaleOptions> & { type: "linear" };
}
export const LineGraph = (props: {
  titleText: string;
  datasets: Dataset[];
  labels: string[];
}) => {
  const labels = useMemo(() => {
    return props.labels.map((ts) => parseISO(ts));
  }, [props.labels.join(",")]);

  const options: ChartOptions<"line"> = useMemo(() => {
    const yAxes: YAxesScales = {
      y: {
        type: "linear",
        position: "left",
        beginAtZero: false,
        title: {
          display: true,
          text: "Y-Axis 1",
          align: "center" as Align,
          color: "black" as Color,
          font: { size: 12 } as FontSpec,
          padding: 5,
        },
      },
    };

    if (props.datasets.length > 1) {
      yAxes.y2 = {
        type: "linear",
        position: "right",
        beginAtZero: false,
        title: {
          display: true,
          text: "Y-Axis 2",
          align: "center" as Align,
          color: "black" as Color,
          font: { size: 12 } as FontSpec,
          padding: 5,
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
          position: "top" as const,
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
            text: "Date",
          },
          type: "time",
          time: {
            unit: "hour",
            tooltipFormat: "yy-MM-dd HH:mm",
            displayFormats: {
              hour: "yy-MM-dd HH:mm",
            },
          },
        },
        ...(props.datasets.length > 1
          ? yAxes
          : { x: { type: "time" }, y: yAxes.y }),
      },
      elements: {
        line: {
          borderWidth: 0,
        },
      },
    };
  }, [props.titleText, props.datasets]);

  const data: ChartData<"line", (number | Point | null)[], unknown> = useMemo(
    () => ({
      labels,
      datasets: props.datasets.map((dataset) => ({
        ...dataset,
        yAxisID:
          props.datasets.length > 1 && dataset.yAxisID ? dataset.yAxisID : "y",
        data: dataset.data.map((value) => {
          const num = Number(value);
          return isNaN(num) ? null : num;
        }),
      })),
    }),
    [labels, props.datasets]
  );

  return <Line options={options} data={data} />;
};
