import type { Meta, StoryObj } from '@storybook/react';
import { LineGraph } from './lineGraph';
import { createDataset } from './datasetObject';

const exampleDataset = createDataset(
  'Axis One',
  [1, 5, 6, 2],
  'rgb(255, 99, 132)',
  'rgb(255, 99, 132)'
)

const meta = {
  component: LineGraph,
} satisfies Meta<typeof LineGraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    titleText: "ExmapleTitle",
    datasets: [exampleDataset],
    labels: ['A', 'B', 'C', 'D']
  }
};