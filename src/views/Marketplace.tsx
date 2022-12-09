import React from 'react';
import {
    EuiPage,
    EuiPageSection,
    EuiPageBody,
    EuiEmptyPrompt,
} from '@elastic/eui';

const Marketplace = () => {
    return (
        <EuiPage>
            <EuiPageBody>
                <EuiPageSection alignment="center">
                    <EuiEmptyPrompt title={<span>In development</span>} />
                </EuiPageSection>
            </EuiPageBody>
        </EuiPage>
    );
};

export default Marketplace;
