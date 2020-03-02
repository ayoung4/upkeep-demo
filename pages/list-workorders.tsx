import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

import { Page } from '../lib/api/pages/constants';
import { Centered } from '../components/centered';
import { ThreeParts } from '../components/layout';

const ListWorkorders: Page = () => (
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
                <Segment>
                    <Header>Leaky Faucet</Header>
                    <p><b>Requested: </b>Yesterday</p>
                    <p><b>Status: </b>Scheduled</p>
                </Segment>
                <Segment>
                    <Header>Pool Not Heating</Header>
                    <p><b>Requested: </b>02/25/20</p>
                    <p><b>Status: </b>Fixed</p>
                </Segment>
                <Segment>
                    <Header>Heated Floors</Header>
                    <p><b>Requested: </b>02/21/20</p>
                    <p><b>Status: </b>Fixed</p>
                </Segment>
            </Centered>
        }
    />
);

export default ListWorkorders;
