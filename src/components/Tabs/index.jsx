import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Tab from '../Tab';

import { TagContent } from '../Base/styles';

class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    };

    render() {
        const {
            onClickTabItem,
            props: { children },
            state: { activeTab }
        } = this;

        return (
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <ol style={{ width: '100%' }}>
                    {children.map((child, index) => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={index}
                                index={index}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;

                    let element = document.getElementById('site-head-content');

                    if (element) {
                        ReactDOM.render(<TagContent>{child.props.children}</TagContent>, document.getElementById('site-head-content'));
                    }
                })}
            </div>
        );
    }
}

export default Tabs;
