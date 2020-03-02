import * as React from 'react';
import { Box } from 'react-layout-components';

type Props = {
    top?: any;
    center?: any;
    bottom?: any;
}

export const ThreeParts: React.FC<Props> = ({ top, center, bottom }) => (
    <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    }}>
        <Box fit column>
            <Box row flex={2} style={{
                marginTop: '2.5rem',
                marginBottom: '1rem',
            }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                }}>
                    {top}
                </div>
            </Box>
            <Box row fit>
                <div style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                }}>
                    {center}
                </div>
            </Box>
            <Box row flex={2} style={{
                marginTop: '1rem',
                marginBottom: '2.5rem',
            }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                }}>
                    {bottom}
                </div>
            </Box>
        </Box>
    </div>
);