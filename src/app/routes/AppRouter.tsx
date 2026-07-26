import { AppPage, HomePage, NotFoundPage, ProjectCardPage } from 'pages';
import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { MainLayout } from 'shared';

export const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: '/projects',
                    element: <Navigate to="/" replace />,
                },
                {
                    path: '/apps',
                    element: <Navigate to="/" replace />,
                },
                {
                    path: '/projects/:id',
                    element: <ProjectCardPage />,
                },
                {
                    path: '/apps/:id',
                    element: <AppPage />,
                },
                {
                    path: '*',
                    element: <NotFoundPage />,
                },
            ],
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};
