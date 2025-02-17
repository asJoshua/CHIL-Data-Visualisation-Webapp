import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@/components/ui/text-field/text-field'
import DataTable from '@/components/ui/table/table';

const columns = [
    { id: "campaignId", label: "Campaign ID", minWidth: 100, align: "left" },
    { id: "name", label: "Name", minWidth: 170, align: "left" },
    { id: "description", label: "Description", minWidth: 170, align: "left" },
    { id: "startDate", label: "Start Date", minWidth: 170, align: "left" },
    { id: "endDate", label: "End Date", minWidth: 170, align: "left" },
];

const rows = [
    { name: "Deployment 1", description: "Test description", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1234" },
    { name: "Deployment 2", description: "Another description", startDate: "2023-05-01", endDate: "2023-11-30", campaignId: "5678" },
    { name: "Deployment 3", description: "Test description", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1234" },
];

const DeploymentsPage = (): React.JSX.Element => {
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
            <div className="flex justify-center items-center min-h-screen px-24 pt-28 pb-28">
                <div className="flex flex-col items-start w-full max-w-full">
                    <h1 className="ml-0 text-2xl font-bold">Deployments</h1>
                    <h3 className="mb-2">All deployments of our instruments</h3>
                    <TextField 
                        className="mb-4 w-full max-w-sm"
                        placeholder="Search Deployments..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    <div className="overflow-auto w-full max-h-[70vh]">
                        <DataTable columns={columns} rows={filteredRows} onRowClick={handleRowClick} />
                    </div>                
                </div>
            </div>
    );
}

export { DeploymentsPage };
