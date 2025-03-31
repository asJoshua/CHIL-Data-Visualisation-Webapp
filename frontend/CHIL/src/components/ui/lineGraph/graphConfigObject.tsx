import { Dataset } from "./datasetObject";

export interface PlotConfig {
  measurement: string;
  color: string;
  yAxisID: "y" | "y2";
  show: boolean;
  axisLabel: string;
}

export interface PlotInformation {
  plotOne: PlotConfig;
  plotTwo: PlotConfig;
}

export interface GraphConfig {
  id: string;
  deploymentId: string;
  graphName: string;
  startDate: string | null;
  endDate: string | null;
  selectedInstrument: string;
  plotInformation: PlotInformation;
  dataSets: Dataset[];
  dateLabels: string[];
}
