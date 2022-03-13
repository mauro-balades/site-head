import React from 'react';

import Select from 'react-select';
import Creatable from 'react-select/creatable';
import makeAnimated from 'react-select/animated';

import { useDispatch } from 'react-redux';

import Tabs from '../Tabs';
import TopNav from '../TopNav';
import PreviewPopup from '../PreviewPopup';

import { add_tag } from '../../slices/tags/tagsSlice';
import {
    LeftNav,
    SiteHeadContent,
    TagContent,
    Heading,
    Section,
    Description,
    TextInput,
    PreviewButton,
    TextArea
} from './styles';

const charsetOptions = [
    { value: 'utf-8', label: 'UTF-8' },
    { value: 'utf-16', label: 'UTF-16' },
    { value: 'windows-1252', label: 'Windows-1252' },
    { value: 'iso-8859', label: 'ISO-8859' }
];

const soicalOptions = [
    { value: 'og', label: 'Facebook / Open Graph' },
    { value: 'twitter', label: 'Twitter' }
];

const animatedComponents = makeAnimated();

function openPreviewPopup() {
    let popup = document.getElementById('preview-popup');
    popup.classList.remove('closed');
}

export default () => {
    const dispatch = useDispatch();
    const [checkedViewport, setCheckedViewport] = React.useState(false);
    const [checkedImage, setCheckedImage] = React.useState(false);

    const handleViewportChange = () => {
        setCheckedViewport(!checkedViewport);
        console.log(checkedViewport);
        dispatch(add_tag({ viewport: !checkedViewport }));
    };

    const handleImageChange = () => {
        setCheckedImage(!checkedImage);
        dispatch(add_tag({ image: !checkedImage }));
    };

    return (
        <div
            style={{
                height: '100vh',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <TopNav />
            <PreviewPopup />
            <SiteHeadContent>
                <LeftNav>
                    <Tabs>
                        <div label="Basic tags">
                            <div>
                                <Section>
                                    <Heading>Title</Heading>
                                    <Description>
                                        The{' '}
                                        <span
                                            style={{
                                                background: '#ddd',
                                                borderRadius: '1px',
                                                padding: '3px'
                                            }}
                                        >
                                            &lt;title&gt;
                                        </span>{' '}
                                        tag defines the title of the document.
                                        The title must be text-only, and it is
                                        shown in the browser's title bar or in
                                        the page's tab and in search engines.
                                    </Description>
                                    <TextInput
                                        onChange={(e) => {
                                            dispatch(
                                                add_tag({
                                                    title: e.target.value
                                                })
                                            );
                                        }}
                                        placeholder="Enter your title here"
                                    />
                                </Section>
                                <Section>
                                    <Heading>Description</Heading>
                                    <Description>
                                        This metatag is used by search engines
                                        to compare it with other web pages.
                                        Basically, this tag defines a
                                        description of your web page. Remember
                                        to make it short and it stays in the
                                        theme.
                                    </Description>
                                    <TextArea
                                        onChange={(e) => {
                                            dispatch(
                                                add_tag({
                                                    description: e.target.value
                                                })
                                            );
                                        }}
                                        placeholder="Enter your description here (new lines will be ignored)"
                                    />
                                </Section>
                                <Section>
                                    <Heading>Charset</Heading>
                                    <Description>
                                        Specifies the character encoding for the
                                        HTML document.
                                    </Description>
                                    <div style={{ marginTop: '10px' }}>
                                        <Creatable
                                            defaultValue={false}
                                            backspaceRemovesValue={true}
                                            isClearable={true}
                                            onChange={(value) =>
                                                dispatch(
                                                    add_tag({
                                                        charset: value.label
                                                    })
                                                )
                                            }
                                            options={charsetOptions}
                                        />
                                    </div>
                                </Section>
                                <Section>
                                    <Heading>Viewport</Heading>
                                    <Description>
                                        This gives the browser instructions on
                                        how to control the page's dimensions and
                                        scaling. If checked, it will set it to
                                        width=device-width and to
                                        initial-scale=1.0 by default.
                                    </Description>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginTop: '10px'
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={checkedViewport}
                                            onChange={handleViewportChange}
                                            id="viewport-checkbox"
                                        />
                                        <label
                                            for="viewport-checkbox"
                                            style={{ marginLeft: '5px' }}
                                        >
                                            Add viewport to the head tag
                                        </label>
                                    </div>
                                </Section>
                            </div>
                        </div>
                        <div label="SEO tags">
                            <div>
                                <Section>
                                    <Heading>Social media formats</Heading>
                                    <Description>
                                        Specifies the character encoding for the
                                        HTML document.
                                    </Description>
                                    <div style={{ marginTop: '10px' }}>
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            isMulti
                                            options={soicalOptions}
                                            onChange={(values) => {
                                                if (values.length == 0) {
                                                    for (
                                                        var i = 0;
                                                        i <
                                                        soicalOptions.length;
                                                        i++
                                                    ) {
                                                        var obj = {};
                                                        obj[
                                                            soicalOptions[
                                                                i
                                                            ].value
                                                        ] = null;
                                                        dispatch(add_tag(obj));
                                                    }
                                                }

                                                for (
                                                    var i = 0;
                                                    i < values.length;
                                                    i++
                                                ) {
                                                    var obj = {};
                                                    obj[values[i].value] =
                                                        values[i].label;
                                                    dispatch(add_tag(obj));
                                                }
                                            }}
                                        />
                                    </div>
                                </Section>
                                <Section>
                                    <Heading>Image</Heading>
                                    <Description>
                                        With the visual nature of the web your
                                        Meta Tag Image is the most valuable
                                        graphic content you can create to
                                        encourage users to click and visit your
                                        website.
                                    </Description>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginTop: '10px'
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={checkedImage}
                                            onChange={handleImageChange}
                                            id="viewport-checkbox"
                                        />
                                        <label
                                            for="viewport-checkbox"
                                            style={{ marginLeft: '5px' }}
                                        >
                                            Allow image in the meta tags.
                                        </label>
                                    </div>
                                </Section>
                            </div>
                        </div>
                        <div label="Theming tags">
                            Nothing to see here, this tab is <em>extinct</em>!
                        </div>
                        <div label="Styles & Scripts">
                            Nothing to see here, this tab is <em>extinct</em>!
                        </div>
                    </Tabs>

                    <PreviewButton onClick={openPreviewPopup}>
                        Preview or export
                    </PreviewButton>
                </LeftNav>
                <TagContent id="site-head-content"></TagContent>
            </SiteHeadContent>
        </div>
    );
};
