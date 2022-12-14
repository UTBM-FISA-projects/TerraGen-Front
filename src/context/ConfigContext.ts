import React from 'react';
import type { EuiThemeColorMode } from '@elastic/eui/src/services/theme/types';

interface ConfigContextType {
    setColorMode: (mode: EuiThemeColorMode) => void;
}

const ConfigContext = React.createContext<ConfigContextType>({
    setColorMode: () => undefined,
});

ConfigContext.displayName = 'ConfigContext';
export default ConfigContext;
