import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import { EuiProvider } from '@elastic/eui';
import type { EuiThemeColorMode } from '@elastic/eui/src/services/theme/types';
import '@elastic/eui/dist/eui_theme_dark.min.css';
import '@elastic/eui/dist/eui_theme_light.min.css';

import {
    Create,
    Marketplace,
    PageNotFound,
    Header,
} from './views';
import { ConfigContext } from './context';

const App = () => {
    const [colorMode, setColorMode] = React.useState<EuiThemeColorMode>('light');

    return (
        <EuiProvider colorMode={colorMode}>
            <ConfigContext.Provider value={{ colorMode, setColorMode }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Header />}>
                            <Route index element={<Create />} />
                            <Route path="marketplace" element={<Marketplace />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ConfigContext.Provider>
        </EuiProvider>
    );
};

export default App;
