import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

import { Page } from '../lib/api/pages/constants';
import { Centered } from '../components/centered';
import { ThreeParts } from '../components/layout';

const WorkorderDetail: Page = () => (
    <ThreeParts
        top={
            <Header
                textAlign='center'
                size='large'
                content='Work In Progress'
            />
        }
        center={
            <Centered>
                <Segment
                    textAlign='left'
                    style={{ height: '400px' }}
                >
                    <Header>Leaky Faucet</Header>
                    <p><b>Requested: </b>Yesterday</p>
                    <p><b>Status: </b>Scheduled</p>
                    <p><b>Description: </b>
                        The kitchen sink leaks whenever I use hot water as of the last few weeks.
                    </p>
                    <p><b>Images: </b></p>
                    <div
                        style={{
                            height: '100px',
                            width: '220px',
                            backgroundSize: '125%',
                            backgroundPosition: 'center',
                            backgroundImage: 'url(/background-3.png',
                        }}
                    />
                </Segment>
            </Centered>
        }
    />
);

export default WorkorderDetail;
