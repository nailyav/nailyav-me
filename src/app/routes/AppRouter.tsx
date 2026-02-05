import { HomePage, NotFoundPage, ProjectCardPage } from 'pages';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
                    path: '/projects/:id',
                    element: <ProjectCardPage />,
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
