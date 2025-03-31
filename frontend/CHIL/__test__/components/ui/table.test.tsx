import React from 'react'
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import  DataTable from "../../../src/components/ui/table/table";
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();

const mockRows = [
    { name: "Deployment 1", description: "Description for Deployment 1", start_timestamp: "2023-01-01", end_timestamp: "2023-12-31", deployment_id: "1001", instrument_id: "1" },
    { name: "Deployment 2", description: "Description for Deployment 2", start_timestamp: "2023-01-01", end_timestamp: "2023-12-31", deployment_id: "1002", instrument_id: "1"},
    { name: "Deployment 3", description: "Description for Deployment 3", start_timestamp: "2023-01-01", end_timestamp: "2023-12-31", deployment_id: "1003", instrument_id: "1" },
    { name: "Deployment 4", description: "Description for Deployment 4", start_timestamp: "2023-01-01", end_timestamp: "2023-12-31", deployment_id: "1004", instrument_id: "1" },
    { name: "Deployment 5", description: "Description for Deployment 5", start_timestamp: "2023-01-01", end_timestamp: "2023-12-31", deployment_id: "1005", instrument_id: "1" },
    { name: "Deployment 6", description: "Description for Deployment 6", start_timestamp: "2023-01-01", end_timestamp: "2023-12-31", deployment_id: "1006", instrument_id: "1" },
    { name: "Deployment 7", description: "Description for Deployment 7", start_timestamp: "2023-01-01", end_timestamp: "2023-12-31", deployment_id: "1007", instrument_id: "1" },
    { name: "Deployment 8", description: "Description for Deployment 8", start_timestamp: "2023-01-01", end_timestamp: "2023-12-31", deployment_id: "1008", instrument_id: "1" },
    { name: "Deployment 9", description: "Description for Deployment 9", start_timestamp: "2023-01-01", end_timestamp: "2023-12-31", deployment_id: "1009", instrument_id: "1" },
    { name: "Deployment 10", description: "Description for Deployment 10", start_timestamp: "2023-01-01", end_timestamp: "2023-12-31", deployment_id: "1010", instrument_id: "1" },
    { name: "Deployment 11", description: "Description for Deployment 11", start_timestamp: "2023-01-01", end_timestamp: "2023-12-31", deployment_id: "1011", instrument_id: "1" },
    { name: "Deployment 12", description: "Description for Deployment 12", start_timestamp: "2023-01-01", end_timestamp: "2023-12-31", deployment_id: "1012", instrument_id: "1" },
  ]; 
  
const mockColumns = [
    { id: "campaignId", label: "Campaign ID", minWidth: 100, align: "left" },
    { id: "name", label: "Name", minWidth: 170, align: "left" },
    { id: "description", label: "Description", minWidth: 170, align: "left" },
    { id: "startDate", label: "Start Date", minWidth: 170, align: "left" },
    { id: "endDate", label: "End Date", minWidth: 170, align: "left" },
];

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as object),
  useNavigate: () => mockNavigate,
}));

describe('Table Component', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
        global.alert = jest.fn();
    });

    it("calls handleChangeRowsPerPage and updates rows per page state", () => {
          render(<DataTable 
            columns={mockColumns} 
            rows={mockRows}
            onRowClick={() => {}}
          />);

          console.log(screen.debug());
      
        const rowsPerPageSelect = screen.getByRole('combobox', { name: /Rows per page/i });
      
        // check dropdown is there
        expect(rowsPerPageSelect).toBeInTheDocument();
      
        // check the initial state of rows per page
        expect(screen.getByText(mockRows[0].name)).toBeInTheDocument();
        expect(screen.queryByText("Deployment 11")).not.toBeInTheDocument();
      
        fireEvent.mouseDown(rowsPerPageSelect);
      
        const option5 = screen.getByRole('option', { name: '5' });
        fireEvent.click(option5);
      
        expect(screen.queryByText("Deployment 6")).not.toBeInTheDocument();
        expect(screen.getByText(mockRows[4].name)).toBeInTheDocument();
      });

      it("calls handleChangePage when the pagination is changed", () => {
        render(
          <DataTable
            columns={mockColumns}
            rows={mockRows}
            onRowClick={() => {}}
          />
        );
      
        const nextButton = screen.getByRole("button", { name: /next page/i });
        fireEvent.click(nextButton);
        
        expect(screen.getByText(mockRows[10].name)).toBeInTheDocument();
      });
      
      
})