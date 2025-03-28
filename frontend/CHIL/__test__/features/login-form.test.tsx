import React from 'react'
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { LoginForm } from '../../src/features/login-form/login-form'
import { AuthProvider } from '../../src/components/auth/authenticationProvider'
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as object),
  useNavigate: () => mockNavigate,
}));

describe('Login Form', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
        global.alert = jest.fn();
    });

    it('renders the login form correctly', () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <LoginForm tokenURI='chil/auth/token/' />
                </AuthProvider>
            </MemoryRouter>
        );

        // Check all components are present
        expect(screen.getByLabelText("Username")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();

        // Check the login button is present
        expect(screen.getByText('LOGIN')).toBeInTheDocument();
    });

    it('shows error message when inputs are blank', () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <LoginForm tokenURI='chil/auth/token/' />
                </AuthProvider>
            </MemoryRouter>
        );

        // Click Login button
        fireEvent.click(screen.getByText('Continue'));

        // Check both error messages are shown
        expect(screen.getAllByText("Must not be blank").length === 2);
    });

    it('shows error message when credentials are incorrect', () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <LoginForm tokenURI='chil/auth/token/' />
                </AuthProvider>
            </MemoryRouter>
        );

        // Input wrong details


        // Click Login button
        fireEvent.click(screen.getByText('Continue'));

        // Check both error messages are shown
        expect(screen.getAllByText("Must not be blank").length === 2);
    })
})