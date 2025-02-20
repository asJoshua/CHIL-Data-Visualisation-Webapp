import React from 'react'
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import  DataTable from "../../../src/components/ui/table/table";
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();

const mockRows = [
    { name: "Deployment 1", description: "Description for Deployment 1", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1001" },
    { name: "Deployment 2", description: "Description for Deployment 2", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1002" },
    { name: "Deployment 3", description: "Description for Deployment 3", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1003" },
    { name: "Deployment 4", description: "Description for Deployment 4", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1004" },
    { name: "Deployment 5", description: "Description for Deployment 5", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1005" },
    { name: "Deployment 6", description: "Description for Deployment 6", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1006" },
    { name: "Deployment 7", description: "Description for Deployment 7", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1007" },
    { name: "Deployment 8", description: "Description for Deployment 8", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1008" },
    { name: "Deployment 9", description: "Description for Deployment 9", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1009" },
    { name: "Deployment 10", description: "Description for Deployment 10", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1010" },
    { name: "Deployment 11", description: "Description for Deployment 11", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1011" },
    { name: "Deployment 12", description: "Description for Deployment 12", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1012" },
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