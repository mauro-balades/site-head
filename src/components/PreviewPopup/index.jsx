import React from 'react';
import escape from 'escape-html';

import { useSelector } from 'react-redux';

import { selectTags } from '../../slices/tags/tagsSlice';
import { PopupWrapper, Popup, CodeWrapper } from './styles';
import { Description, Heading } from 'components/Base/styles';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function closePopup() {
    let popup = document.getElementById('preview-popup');
    popup.classList.add('closed');
}

export default () => {
    const tags = useSelector(selectTags);

    let codeString = '<head>';
    let charset = tags.charset;
    if (charset || !(typeof charset === 'undefined')) {
        codeString += `\n\t<meta charset="${escape(charset)}">`;
    }

    let title = tags.title;
    if (title || !(typeof title === 'undefined')) {
        codeString += `\n\t<title>${escape(title)}</title>\n`;
    }

    let description = tags.description;
    if (description || !(typeof description === 'undefined')) {
        codeString += `\n\t<meta name="description" content="${escape(
            description.replace(/[\r\n\v]+/g, ' ')
        )}">`;
    }

    let viewport = tags.viewport;
    if (viewport || !(typeof viewport === 'undefined')) {
        codeString += `\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">`;
    }

    let twitter = tags.twitter;
    if (twitter || !(typeof twitter === 'undefined')) {
        codeString += `\n\n\t<!-- Twitter -->`;
        codeString += `\n\t<meta property="twitter:card" content="summary_large_image">`;
        codeString += `\n\t<meta property="twitter:url" content="">`; // TODO
        codeString += `\n\t<meta property="twitter:title" content="${
            typeof title === 'undefined' ? '' : escape(title)
        }">`;
        codeString += `\n\t<meta property="twitter:description" content="${
            typeof description === 'undefined' ? '' : escape(description)
        }">`;

        if (tags.image || !(typeof tags.image === 'undefined')) {
            codeString += `\n\t<meta property="twitter:image" content="[[ YOUR IMAGE URL HERE ]]"></meta>`;
        }
    }

    let og = tags.og;
    if (og || !(typeof og === 'undefined')) {
        codeString += `\n\n\t<!-- Open Graph / Facebook -->`;
        codeString += `\n\t<meta property="og:type" content="website">`;
        codeString += `\n\t<meta property="og:url" content="">`; // TODO
        codeString += `\n\t<meta property="og:title" content="${
            typeof title === 'undefined' ? '' : escape(title)
        }">`;
        codeString += `\n\t<meta property="og:description" content="${
            typeof description === 'undefined' ? '' : escape(description)
        }">`;

        if (tags.image || !(typeof tags.image === 'undefined')) {
            codeString += `\n\t<meta property="og:image" content="[[ YOUR IMAGE URL HERE ]]"></meta>`;
        }
    }

    codeString += '\n</head>';

    return (
        <PopupWrapper
            onClick={closePopup}
            id="preview-popup"
            className="closed"
        >
            <Popup onClick={(e) => e.stopPropagation()}>
                <Heading>Preview</Heading>
                <Description>
                    The following code is the final result of head tag. You can
                    copy and paste it into your HTML document.
                </Description>
                <CodeWrapper>
                    <SyntaxHighlighter language="html" style={dracula}>
                        {codeString}
                    </SyntaxHighlighter>
                </CodeWrapper>
            </Popup>
        </PopupWrapper>
    );
};
