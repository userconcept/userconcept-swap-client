import { createBrowserRouter, Navigate } from 'react-router';

import Layout from './components/Layout/Layout.tsx';
import Swap from './components/Swap/Swap.tsx';
import About from './components/About/About.tsx';
import Contact from './components/Contact/Contact.tsx';
import NotFound from './components/NotFound/NotFound.tsx';

import { SwapLoader } from './loaders/SwapLoader.tsx';

const basename = process.env.NODE_ENV === 'production' ? '/userconcept-swap-client' : '/';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Navigate to="swap" replace /> },
            { path: 'swap', element: <Swap />, loader: SwapLoader },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
            { path: '*', element: <NotFound text="Not Found" /> },
        ]
    }
],
    { basename }
);

export default router;
