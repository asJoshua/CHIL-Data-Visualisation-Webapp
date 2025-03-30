export interface Dataset {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    yAxisID?: string;
    show?: boolean;
  }
  
  export function createDataset(
    axisLabel: string,
    data: number[],
    borderColor: string,
    backgroundColor: string,
    yAxisID: string,
    show?: boolean 
  ): Dataset {
    return {
      label: axisLabel,
      data: data,
      borderColor: borderColor,
      backgroundColor: backgroundColor,
      yAxisID: yAxisID,
      show: show, 
    };
  }