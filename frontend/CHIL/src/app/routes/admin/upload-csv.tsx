import React from 'react';
import { UploadCsv } from '@/features/upload-csv/upload-csv.tsx';
import { VariableLayout } from '@/components/layouts/variable-layout';

const UploadCsvRoot = (): React.JSX.Element => {
    return (
        <VariableLayout className='flex justify-center items-center h-screen'>
            <UploadCsv apiURL='chil/api/ingest/csv/'/>
        </VariableLayout>
    )
}

export { UploadCsvRoot }
