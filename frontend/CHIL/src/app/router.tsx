import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useMemo } from 'react';
import { paths } from '@/config/paths.ts';
import { ProtectedRoute } from '@/components/auth/protectedRoute';

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
                {
                    path: paths.public.deployments.path,
                    children: [
                        {
                            path: paths.public.deployments.view.path, // ":id"
                            element: <p>This is on a different branch :/</p>
                        },
                        {
                            path: paths.public.deployments.edit.path, // ":id/edit"
                            lazy: async () => {
                                const { EditGraphRoot } = await import('@/app/routes/public/editGraph'); 
                                return { Component: EditGraphRoot };
                            }
                        },
                        {
                            path: "",
                            lazy: async () => {
                                const { DeploymentsRoot } = await import('@/app/routes/public/deployments.tsx');
                                return { Component: DeploymentsRoot };
                            },
                        }
                    ]
                },
            ]
        },
        {
            // Only Collaborators can access these routes
            path: paths.collaborator.root.path,
            element: <ProtectedRoute allowedGroups={['collaborator']}/>,
            children: [
                {
                    path: paths.collaborator.test.path,
                    lazy: async () => {
                        const { TestRoot } = await import('@/app/routes/collaborator/temp');
                        return { Component: TestRoot };
                    }
                },
            ]
        },
        {
            // Only Admins can access these routes
            path: paths.admin.root.path,
            element: <ProtectedRoute allowedGroups={['admin']}/>,
            children: [
                {
                    path: paths.admin.test.path,
                    lazy: async () => {
                        const { TestRoot } = await import('@/app/routes/admin/temp');
                        return { Component: TestRoot };
                    }
                },
            ]
        },
    ]);
}

export const AppRouter = () => {
    const router = useMemo(() => createAppRouter(), []);
    return (<RouterProvider router={router} />);
}
