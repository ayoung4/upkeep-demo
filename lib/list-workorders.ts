import { Either } from 'monet';

import { ListWorkOrders, Id, Error } from './constants';

export const listWorkOrders: ListWorkOrders = (token) =>
    token === String(process.env.LOGIN_TOKEN)
        ? Either.right([
            {
                id: 'xxxx' as Id,
                name: 'my'
            },
        ])
        : Either.left('bad token' as Error);
