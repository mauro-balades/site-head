import React from 'react';
import Tabs from '../Tabs';
import TopNav from '../TopNav';
import { LeftNav } from './styles';

export default () => {
    return (
        <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <TopNav />
            <LeftNav>
                <Tabs>
                    <div label="Gator">
                        See ya later, <em>Alligator</em>!
                    </div>
                    <div label="Croc">
                        After 'while, <em>Crocodile</em>!
                    </div>
                    <div label="Sarcosuchus">
                        Nothing to see here, this tab is <em>extinct</em>!
                    </div>
                </Tabs>
            </LeftNav>
        </div>
    );
};
