import { Email, Password } from '../constants';
import { post } from '../request';

type UpkeepAuthResponse = {
    success: boolean;
    result: {
        sessionToken: string;
        expiresAt: string;
    };
    message: string;
};

type Auth = (email: Email, password: Password) =>
    Promise<UpkeepAuthResponse>;

export const auth: Auth = (email, password) =>
    post('https://api.onupkeep.com/api/v2/auth', {
        email,
        password,
    })
        .then((obj) => obj as UpkeepAuthResponse)
        .then((x) => { console.log(x); return x })
