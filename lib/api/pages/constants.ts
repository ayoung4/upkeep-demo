import { AuthToken } from '../constants';

export type Context = {
    token: AuthToken;
    setToken: React.Dispatch<React.SetStateAction<AuthToken>>;
};

export type Page = React.FC<Context>;