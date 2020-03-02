import { Either } from 'monet';

import { LogIn, AuthToken, Error } from './constants';

export const logIn: LogIn = (email, password) =>
    email === String(process.env.EMAIL) && password === String(process.env.PASSWORD)
        ? Promise.resolve(Either.right(String(process.env.LOGIN_TOKEN) as AuthToken))
        : Promise.resolve(Either.left('incorrect email or password' as Error));
