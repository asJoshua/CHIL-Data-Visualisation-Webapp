import React from 'react'
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { UploadCsv } from '../../src/features/upload-csv/upload-csv'
import { AuthProvider } from '../../src/components/auth/authenticationProvider'
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as object),
  useNavigate: () => mockNavigate,
}));

describe('Upload CSV page', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
        global.alert = jest.fn();
    });

    it('renders the upload csv form correctly', () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <UploadCsv apiURL='chil/api/ingest/csv/' />
                </AuthProvider>
            </MemoryRouter>
        );

        // Check upload input is present
        expect(screen.getByText("No file selected")).toBeInTheDocument();

        // Check the submit button is present
        expect(screen.getByText('Upload File')).toBeInTheDocument();
    });

    it('shows error message when inputs are blank', () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <UploadCsv apiURL='chil/api/ingest/csv' />
                </AuthProvider>
            </MemoryRouter>
        );

        // Click Upload button
        fireEvent.click(screen.getByText('Upload File'));

        // Check error message is shown
        expect(screen.getByText("Please select a file first!"));
    });
})