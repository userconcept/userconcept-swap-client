import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';

import App from './App.tsx';

import './assets/styles/main.scss';

const root = createRoot(document.getElementById('root')!);

const basename = process.env.NODE_ENV === 'production' ? '/userconcept-swap-client' : '/';

root.render(
    <StrictMode>
        <Router basename={basename}>
            <App />
        </Router>
    </StrictMode>
);
