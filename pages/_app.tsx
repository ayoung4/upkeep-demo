import * as React from 'react';
import { AppProps } from 'next/app';
import 'semantic-ui-css/semantic.min.css';


import { AuthToken } from '../lib/api/constants';

type Context = {
    token: AuthToken;
    setToken: React.Dispatch<React.SetStateAction<AuthToken>>;
}

const AppContext = React.createContext<Context>({
    token: '' as AuthToken,
    setToken: () => '' as AuthToken,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [token, setToken] = React.useState('' as AuthToken);
    return (
        <AppContext.Provider value={{
            token,
            setToken,
        }}>
            <Component {...pageProps} context={{
                token,
                setToken,
            }} />
        </AppContext.Provider>
    );
};

export default MyApp;
