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
} from '@elastic/eui';

import { Graph } from '../components';

const Create = () => {
    const [empty, setEmpty] = React.useState(true);

    return (
        <EuiPage grow>
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
                    <EuiPageSection color="plain" alignment="top" grow>
                        <EuiResizableContainer>
                            {(EuiResizablePanel, EuiResizableButton) => (
                                <>
                                    <EuiResizablePanel mode="main" initialSize={70} minSize="40%">
                                        <Graph />
                                    </EuiResizablePanel>
                                    <EuiResizableButton />
                                    <EuiResizablePanel
                                        mode="collapsible"
                                        initialSize={30}
                                        minSize="20%"
                                    >
                                        <EuiPanel grow>
                                            <EuiLoadingContent lines={10} />
                                        </EuiPanel>
                                    </EuiResizablePanel>
                                </>
                            )}
                        </EuiResizableContainer>
                    </EuiPageSection>
                )}
            </EuiPageBody>
        </EuiPage>
    );
};

export default Create;
