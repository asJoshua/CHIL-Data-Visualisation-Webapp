export interface Dataset {
    label: string;
    data: (string | number)[];
    borderColor: string;
    backgroundColor: string;
    yAxisID?: string;
    show?: boolean;
  }
  
  export function createDataset(
    axisLabel: string,
    data: (string | number)[],
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