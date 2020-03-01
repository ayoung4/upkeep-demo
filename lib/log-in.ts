import { Either } from 'monet';

import { LogIn, AuthToken, Error } from './constants';

export const logIn: LogIn = (email, password) =>
    email === String(process.env.EMAIL) && password === String(process.env.PASSWORD)
        ? Either.right(String(process.env.LOGIN_TOKEN) as AuthToken)
        : Either.left('login failed' as Error);
