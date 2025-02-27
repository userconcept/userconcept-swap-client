import {
    Routes,
    Route,
    Navigate
} from 'react-router';

import Layout from './components/Layout/Layout.tsx';
import Swap from './components/Swap/Swap.tsx';
import About from './components/About/About.tsx';
import Contact from './components/Contact/Contact.tsx';
import NotFound from './components/NotFound/NotFound.tsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="swap" element={<Swap />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound text="Not Found" />} />
                <Route
                    index
                    element={<Navigate to="swap" replace />}
                />
            </Route>
        </Routes>
    );
}

export default App;
