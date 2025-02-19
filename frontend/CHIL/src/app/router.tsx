import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useMemo } from 'react';

import { paths } from '@/config/paths.ts';

const createAppRouter = () => {

    return createBrowserRouter([
        {
            // Anyone can access these routes
            path: paths.public.root.path,
            children: [
                {
                    path: paths.public.home.path,
                    lazy: async () => {
                        const { HomeRoot } = await import('@/app/routes/public/home.tsx');
                        return { Component: HomeRoot };
                    }
                },
                {
                    path: paths.public.login.path,
                    lazy: async () => {
                        const { LoginRoot } = await import('@/app/routes/public/login.tsx');
                        return { Component: LoginRoot };
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
