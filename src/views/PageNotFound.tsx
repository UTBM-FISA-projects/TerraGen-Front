import React from 'react';

import {
    EuiPageTemplate,
    EuiEmptyPrompt,
    EuiButton,
    EuiButtonEmpty,
    EuiImage,
} from '@elastic/eui';
import {
    Link,
    useNavigate,
} from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <EuiPageTemplate panelled={false}>
            <EuiPageTemplate.Section alignment="center">
                <EuiEmptyPrompt
                    title={<h2>Page not found</h2>}
                    color="plain"
                    body={<p>Sorry, we can't find the page you're looking for. It might have been removed or renamed, or maybe it never existed.</p>}
                    actions={[
                        <Link key={1} to="/">
                            <EuiButton color="primary" fill size="m">Go home</EuiButton>
                        </Link>,
                        <EuiButtonEmpty
                            key={2}
                            flush="both"
                            onClick={() => {navigate(-1);}}
                            iconType="arrowLeft"
                        >
                            Go back
                        </EuiButtonEmpty>,
                    ]}
                    icon={<EuiImage
                        alt="An outer space illustration. In the background is a large moon and two planets. In the foreground is an astronaut floating in space and the numbers '404'."
                        size="fullWidth"
                        src="https://elastic.github.io/eui/images/3debad008db0a67b9696aa8406a9ea04-pageNotFound--light.png"
                        srcSet="https://elastic.github.io/eui/images/3debad008db0a67b9696aa8406a9ea04-pageNotFound--light.png 1x, https://elastic.github.io/eui/images/d9901abc0b20c0bf2b5c4c9a7a874111-pageNotFound--light@2x.png 2x"
                    />}
                    layout="vertical"
                    titleSize="m"
                />
            </EuiPageTemplate.Section>
        </EuiPageTemplate>
    );
};

export default PageNotFound;
