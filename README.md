This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

start with this command:
npm install

run the development server:
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



Test 1

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import UsersPage from './users';
jest.mock('axios');
describe('UsersPage', () => {
  it('should fetch and display users', async () => {
    const mockUsers = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    ];

    axios.get.mockResolvedValue({ data: mockUsers });

    render(<UsersPage />);

    expect(screen.getByText('Users')).toBeInTheDocument();

    // Wait for the API call to complete and the users to be displayed
    await waitFor(() => {
      expect(screen.getByText('John Doe - john.doe@example.com')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith - jane.smith@example.com')).toBeInTheDocument();
    });

    // Verify that the API was called with the correct URL
    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
  });
});

run the following command :
npm test

Make sure you have set up a testing framework like Jest and have installed the necessary dependencies (e.g., @testing-library/react, axios, etc.) before running the test.

