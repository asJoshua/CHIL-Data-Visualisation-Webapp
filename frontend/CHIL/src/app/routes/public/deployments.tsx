import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PublicLayout } from '@/components/layouts/public-layout';
import { TextField } from '@/components/ui/text-field/text-field'
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
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const filteredRows = rows.filter(row => 
        Object.values(row).some(value =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    const handleRowClick = (id: string) => {
        navigate(`deployments/${id}`);
    }

    return (
        <PublicLayout>
            <div className="flex justify-center items-center min-h-screen px-24 pt-28 pb-28">
                <div className="flex flex-col items-start w-full max-w-full">
                    <h1 className="ml-0 text-2xl font-bold">Deployments</h1>
                    <h3 className="mb-2">All deployments of our instruments</h3>
                    <TextField 
                        className="mb-4 w-full max-w-sm"
                        placeholder="Search Deployments..."
                        value={searchQuery}
                        onChange={(e: any) => setSearchQuery(e.target.value)}
                        />
                    <div className="overflow-auto w-full max-h-[70vh]">
                        <DataTable columns={columns} rows={filteredRows} onRowClick={handleRowClick} />
                    </div>                
                </div>
            </div>
        </PublicLayout>
    );
}

export { DeploymentsRoot };
