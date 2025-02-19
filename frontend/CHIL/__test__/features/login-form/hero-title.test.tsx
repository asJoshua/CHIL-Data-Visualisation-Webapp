import React from 'react'
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { HeroTitle } from '../../../src/features/hero-title/hero-title';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as object),
  useNavigate: () => mockNavigate,
}));

describe('Hero Title', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
        global.alert = jest.fn();
    });

    it('renders the hero title correctly', () => {
        render(
            <MemoryRouter>
                <HeroTitle />
            </MemoryRouter>
        );

        // Check that the main heading is displayed
        expect(screen.getByText("CHIL RESEARCH")).toBeInTheDocument();

        // Check that the subheading is displayed
        expect(
        screen.getByText("Cryospheric and Hydrological Instrumentation Laboratory")
        ).toBeInTheDocument();
    });
});