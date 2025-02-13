import React from 'react'
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { PublicHeader } from '../../../src/components/marginals/public-header'
import { publicHeaderConfig } from '../../../src/config/headerLinks'
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as object),
  useNavigate: () => mockNavigate,
}));

describe('Public Header', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
        global.alert = jest.fn();
    });

    it('renders the navigation buttons correctly', () => {
        render(
            <MemoryRouter>
                <PublicHeader />
            </MemoryRouter>
        );

        // Check all nav buttons are present
        publicHeaderConfig.map((item) => {
            expect(screen.getByText(item[0])).toBeInTheDocument()
        });

        // Check the login button is present
        expect(screen.getByText('Login')).toBeInTheDocument();
    });

    it('navigates to the correct pages', () => {
        render(
            <MemoryRouter>
                <PublicHeader />
            </MemoryRouter>
        );

        // Check all nav buttons navigate to the right place
        publicHeaderConfig.map((item) => {
            fireEvent.click(screen.getByText(item[0]));
            expect(mockNavigate).toBeCalledWith(item[1]);
        });

        // Check login button navigates to /login
        fireEvent.click(screen.getByText('Login'));
        expect(mockNavigate).toBeCalledWith('/login');
    })
})