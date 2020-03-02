import React from 'react';
import Link from 'next/link'
import { Button, Container, Select } from 'semantic-ui-react';

import { Page } from '../lib/api/pages/constants';
import { Centered } from '../components/centered';
import { ThreeParts } from '../components/layout';

const Home: Page = () => (
    <ThreeParts
        top={
            <Centered>
                <Select
                    value={'1910-university'}
                    text='1910 University'
                    fluid
                    size='large'
                    style={{
                        textAlign: 'center'
                    }}
                    options={[
                        { data: '1910-university', text: '1910 University' }
                    ]}
                />
            </Centered>
        }
        center={
            <Centered>
                <Link href='/list-workorders'>
                    <Button
                        inverted
                        fluid
                        content='Work In Progress'
                        size='massive'
                        style={{
                            height: '170px',
                            backgroundSize: '125%',
                            backgroundPosition: 'center',
                            backgroundImage: 'url(/background-1.png',
                        }}
                    />
                </Link>
                <br />
                <Link href='/add-workorder'>
                    <Button
                        inverted
                        fluid
                        content='Make a Request'
                        size='massive'
                        style={{
                            height: '170px',
                            backgroundSize: '125%',
                            backgroundPosition: 'center',
                            backgroundImage: 'url(/background-2.png',
                        }}
                    />
                </Link>
                <br />
                <Button
                    fluid
                    content='Get in Touch'
                    color='red'
                    size='massive'
                />
            </Centered>
        }
    />
);

export default Home
