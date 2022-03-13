import React from 'react';
import escape from 'escape-html';

import { useSelector } from 'react-redux';

import { selectTags } from '../../slices/tags/tagsSlice';
import { PopupWrapper, Popup, CodeWrapper } from './styles';
import { Description, Heading } from 'components/Base/styles';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function closePopup() {
    let popup = document.getElementById("preview-popup")
    popup.classList.add("closed")
}

export default () => {
    const tags = useSelector(selectTags);

    let codeString = "<head>";

    let title = tags.title;
    if (title) {
        codeString += `\n\t<title>${escape(title)}</title>\n`
    }

    let description = tags.description;
    if (description) {
        codeString += `\n\t<meta name="description" content="${escape(description.replace(/[\r\n\v]+/g, " "))}">`
    }
    codeString += "\n</head>"

    return (
        <PopupWrapper onClick={closePopup} id="preview-popup" className='closed'>
            <Popup onClick={(e) => e.stopPropagation()}>
                <Heading>Preview</Heading>
                <Description>The following code is the final result of head tag. You can copy and paste it into your HTML document.</Description>
                <CodeWrapper>
                    <SyntaxHighlighter language="html" style={dracula}>
                        {codeString}
                    </SyntaxHighlighter>
                </CodeWrapper>
            </Popup>
        </PopupWrapper>
    )
}