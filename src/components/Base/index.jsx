import React from 'react';
import { useDispatch } from 'react-redux';

import Tabs from '../Tabs';
import TopNav from '../TopNav';
import PreviewPopup from '../PreviewPopup';

import { add_tag } from '../../slices/tags/tagsSlice';
import { LeftNav, SiteHeadContent, TagContent, Heading, Section, Description, TextInput, PreviewButton, TextArea } from './styles';

function openPreviewPopup() {

    let popup = document.getElementById("preview-popup")
    popup.classList.remove("closed")
}

export default () => {
    const dispatch = useDispatch();

    return (
        <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <TopNav />
            <PreviewPopup />
            <SiteHeadContent>
                <LeftNav>

                    <Tabs>
                        <div label="Basic tags">
                            <div>
                                <Section>
                                    <Heading>
                                        Title
                                    </Heading>
                                    <Description>
                                        The <span style={{ background: '#ddd', borderRadius: '1px', padding: '3px' }}>&lt;title&gt;</span> tag defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab and in search engines.
                                    </Description>
                                    <TextInput onChange={ (e) => {
                                        dispatch(add_tag({ title: e.target.value }))
                                    }} placeholder='Enter your title here' />
                                </Section>
                                <Section>
                                    <Heading>
                                        Description
                                    </Heading>
                                    <Description>
                                        This metatag is used by search engines to compare it with other web pages. Basically, this tag defines a description of your web page. Remember to make it short and it stays in the theme.
                                    </Description>
                                    <TextArea onChange={ (e) => {
                                        dispatch(add_tag({ description: e.target.value }))
                                    }} placeholder='Enter your description here (new lines will be ignored)' />
                                </Section>
                                <Section>
                                    <Heading>
                                        Viewport
                                    </Heading>
                                    <Description>
                                    This gives the browser instructions on how to control the page's dimensions and scaling. If checked, it will set it to width=device-width and to initial-scale=1.0 by default.
                                    </Description>
                                </Section>
                                <Section>
                                    <Heading>
                                        Charset
                                    </Heading>
                                    <Description>
                                    Specifies the character encoding for the HTML document.
                                    </Description>
                                </Section>
                            </div>
                        </div>
                        <div label="CEO tags">
                            After while, <em>Crocodile</em>!
                        </div>
                        <div label="Theming tags">
                            Nothing to see here, this tab is <em>extinct</em>!
                        </div>
                        <div label="Styles & Scripts">
                            Nothing to see here, this tab is <em>extinct</em>!
                        </div>
                    </Tabs>

                    <PreviewButton onClick={openPreviewPopup}>Preview or export</PreviewButton>
                </LeftNav>
                <TagContent id="site-head-content">

                </TagContent>
            </SiteHeadContent>
        </div>
    );
};
