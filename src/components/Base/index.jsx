import React from 'react';
import { useDispatch } from 'react-redux';
import Tabs from '../Tabs';
import TopNav from '../TopNav';
import { LeftNav, SiteHeadContent, TagContent, Heading, Section, Description, TextInput } from './styles';
import { add_tag } from '../../slices/tags/tagsSlice';

export default () => {
    const dispatch = useDispatch();

    return (
        <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <TopNav />
            <SiteHeadContent>
                <LeftNav>
                    <Tabs>
                        <div label="Basic tags">
                            <Section>
                                <Heading>
                                    Title
                                </Heading>
                                <Description>
                                    The <span style={{ background: '#ddd', borderRadius: '1px', padding: '3px' }}>&lt;title&gt;</span> tag defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab and in search engines.
                                </Description>
                                <TextInput onChange={ (e) => {
                                    console.log(e.target.value)
                                    dispatch(add_tag({ title: e.target.value }))
                                } } placeholder='Enter your title here' />
                            </Section>
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
                </LeftNav>
                <TagContent id="site-head-content">

                </TagContent>
            </SiteHeadContent>
        </div>
    );
};
