import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import './assets/styles/main.scss';

import { setTheme } from './utils/theme.ts';

setTheme(localStorage.getItem('theme') === 'light' ? 'light' : 'dark');

const root = createRoot(document.getElementById('root')!);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
