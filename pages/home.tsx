import React from 'react';
import Link from 'next/link'
import { Button } from 'semantic-ui-react';

import { Page } from '../lib/api/pages/constants';
import { Centered } from '../components/centered';

const Home: Page = () => (
    <Centered>
        <Link href='/list-workorders'>
            <Button
                fluid
                content='current jobs'
                size='massive'
            />
        </Link>
        <br/>
        <Link href='/add-workorder'>
            <Button
                fluid
                content='new job'
                size='massive'
            />
        </Link>
    </Centered>
);

export default Home
