import React from 'react';

import { EuiProvider } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';

import { Create } from './views';

const App = () => (
    <EuiProvider colorMode="light">
        <Create />
    </EuiProvider>
);

export default App;
