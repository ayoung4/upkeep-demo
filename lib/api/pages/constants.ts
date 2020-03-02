import { AuthToken } from '../constants';

export type Context = {
    token: AuthToken;
    setToken: React.Dispatch<React.SetStateAction<AuthToken>>;
};
