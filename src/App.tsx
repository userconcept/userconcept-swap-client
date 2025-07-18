import { RouterProvider } from 'react-router/dom';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { Provider as JotaiProvider } from 'jotai';

import router from './router.tsx';

function App() {
    return (
        <JotaiProvider>
            <TonConnectUIProvider
                manifestUrl="https://userconcept.github.io/userconcept-swap-client/tonconnect-manifest.json"
            >
                <RouterProvider router={router} />
            </TonConnectUIProvider>
        </JotaiProvider>
    );
}

export default App;
