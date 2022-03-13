import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabWrapper, TabNumber } from './styles';

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        index: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    };

    render() {
        const {
            onClick,
            props: { activeTab, label, index }
        } = this;

        return (
            <TabWrapper active={activeTab == label} onClick={onClick}>
                <TabNumber>
                    {index + 1}
                </TabNumber>
                <span>
                    {label}
                </span>
            </TabWrapper>
        );
    }
}

export default Tab;
