import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useMemo } from 'react';

import { paths } from '@config/paths.ts';

export const createAppRouter = () => {

    return createBrowserRouter([
        {
            // Anyone can access these routes
            path: paths.public.root.path,
            children: [
                {
                    path: paths.public.home.path,
                    lazy: async () => {
                        const { HomeRoot } = await import('./routes/public/home.tsx');
                        return { Component: HomeRoot };
                    }
                },
            ]
        },
    ]);
}

export const AppRouter = () => {
    const router = useMemo(() => createAppRouter(), []);
    return <RouterProvider router={router} />;
}
