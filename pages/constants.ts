import { AuthToken } from '../lib/api/constants';

export type Context = {
    token: AuthToken;
    setToken: React.Dispatch<React.SetStateAction<AuthToken>>;
};
