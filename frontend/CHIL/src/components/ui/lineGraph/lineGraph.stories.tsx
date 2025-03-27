import type { Meta, StoryObj } from '@storybook/react';
import { LingGraph } from './lineGraph';
import { Dataset, createDataset } from './datasetObject';
import { getCsvText, parseCsvData } from './csvParser';

const exampleDataset = createDataset(
  'Axis One',
  [1, 5, 6, 2],
  'rgb(255, 99, 132)',
  'rgb(255, 99, 132)'
)

const meta = {
  component: LingGraph,
} satisfies Meta<typeof LingGraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    titleText: "ExmapleTitle",
    datasets: [exampleDataset],
    labels: ['A', 'B', 'C', 'D']
  }
};

