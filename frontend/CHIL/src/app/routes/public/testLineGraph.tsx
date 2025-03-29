import { Dataset } from "@/components/ui/lineGraph/datasetObject";
import { LineGraph } from "@/components/ui/lineGraph/lineGraph";

export const HardcodedGraphContent = () => {
  const hardcodedLabels = [
    '2024-01-01T00:00:00.000Z',
    '2024-01-02T00:00:00.000Z',
    '2024-01-03T00:00:00.000Z',
    '2024-01-04T00:00:00.000Z',
    '2024-01-05T00:00:00.000Z',
  ];

  const hardcodedDatasets: Dataset[] = [
    {
      label: 'Hardcoded Data',
      data: [10, 25, 15, 30, 20],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    },
  ];

  return (
    <div>
        <p>HEllO???</p>
        <LineGraph
            titleText="Hardcoded Graph"
            labels={hardcodedLabels}
            datasets={hardcodedDatasets}
        />
    </div>
    
  );
};