import React from 'react';
import { PopupWrapper, Popup, CodeWrapper } from './styles';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default () => {
    let codeString = '<head></head>';

    return (
        <PopupWrapper>
            <Popup>
                <CodeWrapper>
                    <SyntaxHighlighter language="html" style={dracula}>
                        {codeString}
                    </SyntaxHighlighter>
                </CodeWrapper>
            </Popup>
        </PopupWrapper>
    )
}