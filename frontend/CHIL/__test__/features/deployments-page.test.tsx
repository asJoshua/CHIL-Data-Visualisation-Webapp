import React from 'react'
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { DeploymentsPage } from '../../src/features/deployments'
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as object),
  useNavigate: () => mockNavigate,
}));

describe('Deployments Page', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
        global.alert = jest.fn();
    });

    it('renders the deployments page correctly', () => {
        render(
            <MemoryRouter>
                <DeploymentsPage />
            </MemoryRouter>
        );

        // Check table component and search bar are present
        expect(screen.getByText("Deployments")).toBeInTheDocument();
        expect(screen.getByLabelText("Search Deployments...")).toBeInTheDocument();
    });

    it("shows 'No data available' when there are no rows", () => {
        render(
            <MemoryRouter>
                <DeploymentsPage />
            </MemoryRouter>
        );

        // Simulate searching for something that doesn't exist
        fireEvent.change(screen.getByLabelText("Search Deployments..."), {
            target: { value: "NonExistentDeployment" },
        });

        // Expect "No data available" to be shown
        expect(screen.getByText("No data available")).toBeInTheDocument();
    });
})