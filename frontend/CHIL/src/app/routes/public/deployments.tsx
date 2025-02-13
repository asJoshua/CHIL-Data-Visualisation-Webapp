import React from 'react';
import { PublicLayout } from '@/components/layouts/public-layout';
import DataTable from '@/components/ui/table/table';

const columns = [
    { id: "name", label: "Name", minWidth: 170, align: "left" },
    { id: "description", label: "Description", minWidth: 100, align: "left" },
    { id: "start date", label: "Start Date", minWidth: 170, align: "right" },
    { id: "end date", label: "End Date", minWidth: 170, align: "right" },
    { id: "campaign id", label: "Campaign ID", minWidth: 170, align: "right" },
];

const rows = [
    { name: "Deployment 1", description: "Test description", "start date": "2023-01-01", "end date": "2023-12-31", "campaign id": "1234" },
    { name: "Deployment 2", description: "Another description", "start date": "2023-05-01", "end date": "2023-11-30", "campaign id": "5678" },
    { name: "Deployment 3", description: "Test description", "start date": "2023-01-01", "end date": "2023-12-31", "campaign id": "1234" },
];

const DeploymentsRoot = (): React.JSX.Element => {
    return (
        <PublicLayout>
            <div className="flex justify-center items-center min-h-screen px-24 pt-28 pb-28">
                <div className="flex flex-col items-start w-full max-w-full">
                    <h1 className="ml-0 text-2xl font-bold">Deployments</h1>
                    <h3 className="mb-2">All deployments of our instruments</h3>
                    <div className="overflow-auto w-full max-h-[70vh]">
                        <DataTable columns={columns} rows={rows} />
                    </div>                
                </div>
            </div>
        </PublicLayout>
    );
}

export { DeploymentsRoot };
