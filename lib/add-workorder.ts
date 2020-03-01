import { Either } from 'monet';

import { AddWorkOrder, Id, Error } from './constants';

export const addWorkOrder: AddWorkOrder = (token) =>
    token === String(process.env.LOGIN_TOKEN)
        ? Either.right('xxxx' as Id)
        : Either.left('bad token' as Error);
