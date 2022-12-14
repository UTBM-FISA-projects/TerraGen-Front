import React from 'react';

import {
    EuiPage,
    EuiPageBody,
    EuiPageSection,
    EuiEmptyPrompt,
    EuiButton,
    EuiResizableContainer,
    EuiLoadingContent,
    EuiPanel,
    EuiSpacer,
} from '@elastic/eui';

import {
    Graph,
    ResourcesSidebar,
} from '../components';

const Create = () => {
    const [empty, setEmpty] = React.useState(true);

    return (
        <EuiPage grow style={{ height: 'calc(100vh - 48px)' }}>
            <EuiPageBody>
                {empty ? (
                    <EuiPageSection
                        color="transparent"
                        alignment="center"
                        grow
                    >
                        <EuiEmptyPrompt
                            title={<span>Aucune application</span>}
                            color="plain"
                            iconType="graphApp"
                            iconColor="default"
                            actions={<EuiButton fill onClick={() => {setEmpty(!empty);}}>Créer une application</EuiButton>}
                        />
                    </EuiPageSection>
                ) : (
                    <EuiResizableContainer style={{ height: '100%' }}>
                        {(EuiResizablePanel, EuiResizableButton) => (
                            <>
                                <EuiResizablePanel
                                    mode="collapsible"
                                    initialSize={20}
                                    minSize="15%"
                                >
                                    <ResourcesSidebar />
                                </EuiResizablePanel>
                                <EuiResizableButton />
                                <EuiResizablePanel mode="main" initialSize={50} minSize="40%">
                                    <Graph />
                                </EuiResizablePanel>
                                <EuiResizableButton />
                                <EuiResizablePanel
                                    mode="collapsible"
                                    initialSize={30}
                                    minSize="15%"
                                >
                                    <EuiPanel grow>
                                        <EuiLoadingContent lines={10} />
                                        <EuiSpacer />
                                        <EuiLoadingContent lines={10} />
                                    </EuiPanel>
                                </EuiResizablePanel>
                            </>
                        )}
                    </EuiResizableContainer>
                )}
            </EuiPageBody>
        </EuiPage>
    );
};

export default Create;
