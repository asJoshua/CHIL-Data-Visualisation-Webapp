import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { DeploymentsPage } from '../../src/features/deployments/deployments';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import axios from 'axios';

const mockNavigate = jest.fn();

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

mockedAxios.mockResolvedValue({ data: [] });

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as object),
  useNavigate: () => mockNavigate,
}));

describe('Deployments Page', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
        global.alert = jest.fn();
    });

    it('renders the deployments page correctly', async () => {
        render(
            <MemoryRouter>
                <DeploymentsPage />
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByText("Deployments")).toBeInTheDocument();
            expect(screen.getByLabelText("Search Deployments...")).toBeInTheDocument();
        });
    });

    it("shows 'No data available' when there are no rows", async () => {
        render(
            <MemoryRouter>
                <DeploymentsPage />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText("Search Deployments..."), {
            target: { value: "NonExistentDeployment" },
        });

        await waitFor(() => {
            expect(screen.getByText("No data available")).toBeInTheDocument();
        });
    });
});
