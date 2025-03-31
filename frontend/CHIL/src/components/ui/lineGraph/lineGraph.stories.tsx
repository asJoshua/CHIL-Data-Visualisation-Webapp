// import type { Meta, StoryObj } from '@storybook/react';
// import { LineGraph } from './lineGraph';
// import { createDataset } from './datasetObject';
// import { _adapters, DateAdapter } from 'chart.js/auto'; 
// import { AdapterDateFns } from 'chartjs-adapter-date-fns';  // Import AdapterDateFns
// import { AnyObject } from 'chart.js/types/basic'; 

// // Configure chart.js to use the date-fns adapter
// _adapters._date.override(AdapterDateFns as unknown as Partial<DateAdapter<AnyObject>>);

// const exampleDataset = createDataset(
//   'Axis One',
//   [1, 5, 6, 2],
//   'rgb(255, 99, 132)',
//   'rgb(255, 99, 132)'
// );

// const meta = {
//   component: LineGraph,
// } satisfies Meta<typeof LineGraph>;

// export default meta;

// type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {
//     titleText: 'ExampleTitle',
//     datasets: [exampleDataset],
//     labels: [
//       '2025-01-25T15:09:07.000Z',
//       '2025-01-14T16:09:19.000Z',
//       '2025-01-13T15:39:20.000Z',
//       '2024-12-10T19:09:55.000Z',
//     ],
//   },
// };