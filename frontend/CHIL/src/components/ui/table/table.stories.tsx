import DataTable from "@/components/ui/table/table";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DataTable> = {
    component: DataTable,
    title: "Components/DataTable",
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

const columns = [
    { id: "name", label: "Name", minWidth: 170, align: "left" },
    { id: "descrption", label: "Description", minWidth: 170, align: "left"},
    { id: "start date", label: "Start Date", minWidth: 170, align: "rigth" },
    { id: "end date", label: "End Date", minWidth: 170, align: "right" },
    { id: "campaign id", label: "Campaign ID", minWidth: 100, align: "right" },
];

export const DefaultTable: Story = {
    args: {
        columns,
        rows: [], 
    },
};
