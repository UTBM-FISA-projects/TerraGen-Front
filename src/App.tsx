import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import { EuiProvider } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';

import {
    Create,
    Marketplace,
    PageNotFound,
} from './views';

const App = () => (
    <EuiProvider colorMode="light">
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Create />} />
                    <Route path="marketplace" element={<Marketplace />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </EuiProvider>
);

export default App;
