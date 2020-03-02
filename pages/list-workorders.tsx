import React from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';

import { Page } from '../lib/api/pages/constants';
import { Centered } from '../components/centered';
import { ThreeParts } from '../components/layout';
import Link from 'next/link';

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
                <Segment textAlign='left'>
                    <Header>Leaky Faucet</Header>
                    <p><b>Requested: </b>Yesterday</p>
                    <p><b>Status: </b>Scheduled</p>
                    <Link href='/workorder-detail'>
                        <Button fluid basic>See More</Button>
                    </Link>
                </Segment>
                <Segment textAlign='left'>
                    <Header>Pool Not Heating</Header>
                    <p><b>Requested: </b>02/25/20</p>
                    <p><b>Status: </b>Fixed</p>
                    <Link href='/workorder-detail'>
                        <Button fluid basic>See More</Button>
                    </Link>
                </Segment>
                <Segment textAlign='left'>
                    <Header>Heated Floors</Header>
                    <p><b>Requested: </b>02/21/20</p>
                    <p><b>Status: </b>Fixed</p>
                    <Link href='/workorder-detail'>
                        <Button fluid basic>See More</Button>
                    </Link>
                </Segment>
            </Centered>
        }
    />
);

export default ListWorkorders;
