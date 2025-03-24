import React from 'react'
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Newsletter } from '../../src/features/newsletter/newsletter-page'
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import axios from 'axios';

const mockNavigate = jest.fn();

const mockImage = "BgIce.jpg";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as object),
  useNavigate: () => mockNavigate,
}));

describe('Newsletter Page', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
        global.alert = jest.fn();
    });

    it('renders the newsletter page correctly', () => {
        render(
            <MemoryRouter>
                <Newsletter apiURL='chil/newsletter/signup/'/>
            </MemoryRouter>
        );

        // Check newsltter heading and search bar are present
        expect(screen.getByText("OUR NEWSLETTER")).toBeInTheDocument();
        expect(screen.getByLabelText("Enter your email...")).toBeInTheDocument();
    });

    it('renders the picture correctly', () => {
        render(
            <MemoryRouter>
                <Newsletter apiURL='chil/newsletter/signup' imageSrc={mockImage}/>
            </MemoryRouter>
        );

        // check newsletter image appears
        expect(screen.getByAltText('Newsletter Image')).toBeInTheDocument();
    
    });

    it('doesnt submit the form with invalid email', async () => {
        render(
            <MemoryRouter>
                <Newsletter apiURL='chil/newsletter/signup/' />
            </MemoryRouter>
        );

        // Enter email
        const emailInput = screen.getByLabelText("Enter your email...");
        fireEvent.change(emailInput, { target: { value: 'testtestcom' } });

        // Click submit button
        const submitButton = screen.getByText("Subscribe");
        fireEvent.click(submitButton);

        // Wait for error message to appear
        await waitFor(() => {
            expect(screen.getByText("Please enter a valid email address")).toBeInTheDocument();
        });

        expect(mockedAxios.post).not.toHaveBeenCalled();
    });

    it('submits the form successfully', async () => {
        mockedAxios.post.mockResolvedValueOnce({ status: 200 });

        render(
            <MemoryRouter>
                <Newsletter apiURL='chil/newsletter/signup/' />
            </MemoryRouter>
        );

        // Enter email
        const emailInput = screen.getByLabelText("Enter your email...");
        fireEvent.change(emailInput, { target: { value: 'test@test.com' } });

        // Click submit button
        const submitButton = screen.getByText("Subscribe");
        fireEvent.click(submitButton);

        // Wait for success message to appear
        await waitFor(() => {
            expect(screen.getByText("Thank you for subscribing! You will be notified of any major changes.")).toBeInTheDocument();
        });

        expect(mockedAxios.post).toHaveBeenCalledWith('chil/newsletter/signup/', { email: 'test@test.com' }, expect.any(Object));
    });

})