import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { TeamProvider } from './contexts/TeamContext';
import App from './App.tsx';
import CodeOfConduct from './pages/CodeOfConduct.tsx';
import OrganizingTeam from './pages/team/OrganizingTeam.tsx';
import AdvisoryBoard from './pages/team/AdvisoryBoard.tsx';
import ReviewBoard from './pages/team/ReviewBoard.tsx';
import Volunteers from './pages/team/Volunteers.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/code-of-conduct',
    element: <CodeOfConduct />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/team/organizing',
    element: <OrganizingTeam />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/team/advisory',
    element: <AdvisoryBoard />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/team/review',
    element: <ReviewBoard />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/team/volunteers',
    element: <Volunteers />,
    errorElement: <ErrorBoundary />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <TeamProvider>
        <RouterProvider router={router} />
      </TeamProvider>
    </ErrorBoundary>
  </StrictMode>
);