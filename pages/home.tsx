import React from 'react';
import Link from 'next/link'
import { Button } from 'semantic-ui-react';

import Nav from '../components/nav';
import { Context } from './constants';

const Home: React.FC<{ context: Context }> = ({ context }) => (
    <div>
        <Nav></Nav>
        <Link href='/api/list-workorders'>
            <Button
                content='current jobs'
                size='massive'
            />
        </Link>
        <Link href='/api/add-workorder'>
            <Button
                content='new job'
                size='massive'
            />
        </Link>
    </div>
);

export default Home
