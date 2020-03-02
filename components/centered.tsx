import * as React from 'react';
import { Grid, Transition } from 'semantic-ui-react';

export const Centered: React.FC = ({ children }) => (
    <Grid container style={{ height: '100%' }} centered>
        <Grid.Row
            textAlign='center'
            verticalAlign='middle'
            columns={2}
        >
            <Transition
                duration={800}
                animation='fade'
                transitionOnMount={true}
            >
                <Grid.Column
                    textAlign='center'
                    style={{ minWidth: '350px' }}
                >
                    {children}
                </Grid.Column>
            </Transition>
        </Grid.Row>
    </Grid>
);
