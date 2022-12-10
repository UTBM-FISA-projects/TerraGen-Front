import React, { useContext } from 'react';
import {
    EuiHeader,
    EuiButtonEmpty,
    EuiHeaderSection,
    EuiHeaderSectionItem,
    EuiPopover,
    useEuiTheme,
    EuiContextMenuPanel,
    EuiContextMenuItem,
} from '@elastic/eui';
import { Outlet } from 'react-router-dom';

import { ConfigContext } from '../context';

const Header = () => {
    const [themeOpen, setThemeOpen] = React.useState(false);

    const { colorMode } = useEuiTheme();
    const { setColorMode } = useContext(ConfigContext);

    const closePopover = React.useCallback(() => {
        setThemeOpen(false);
    }, []);

    return (
        <>
            <EuiHeader theme={colorMode === 'LIGHT' ? 'default' : 'dark'}>
                <EuiHeaderSection />
                <EuiHeaderSection side="right">
                    <EuiHeaderSectionItem>
                        <EuiPopover
                            id="theme-popover"
                            button={<EuiButtonEmpty onClick={() => {setThemeOpen(!themeOpen);}} iconSide="right" iconType="arrowDown">Theme</EuiButtonEmpty>}
                            isOpen={themeOpen}
                            closePopover={closePopover}
                            panelPaddingSize="none"
                            anchorPosition="downLeft"
                        >
                            <EuiContextMenuPanel
                                size="s"
                                items={[
                                    <EuiContextMenuItem
                                        key="LIGHT"
                                        icon={colorMode === 'LIGHT' ? 'check' : 'empty'}
                                        onClick={() => {
                                            closePopover();
                                            setColorMode('light');
                                        }}
                                    >
                                        Light
                                    </EuiContextMenuItem>,
                                    <EuiContextMenuItem
                                        key="DARK"
                                        icon={colorMode === 'DARK' ? 'check' : 'empty'}
                                        onClick={() => {
                                            closePopover();
                                            setColorMode('dark');
                                        }}
                                    >
                                        Dark
                                    </EuiContextMenuItem>,
                                ]}
                            />
                        </EuiPopover>
                    </EuiHeaderSectionItem>
                </EuiHeaderSection>
            </EuiHeader>
            <Outlet />
        </>
    );
};

export default Header;
