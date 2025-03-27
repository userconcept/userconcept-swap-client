import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

import App from './App.tsx';

import './assets/styles/main.scss';

const root = createRoot(document.getElementById('root')!);

const basename = process.env.NODE_ENV === 'production' ? '/userconcept-swap-client' : '/';

root.render(
    <StrictMode>
        <TonConnectUIProvider
            manifestUrl="https://userconcept.github.io/userconcept-swap-client/tonconnect-manifest.json"
        >
            <Router basename={basename}>
                <App />
            </Router>
        </TonConnectUIProvider>
    </StrictMode>
);
