import { Either } from 'monet';

import { ListWorkOrders, Error, Email, Password } from './constants';
import { auth } from './upkeep/auth';
import { getWorkorders } from './upkeep/get-work-orders';

export const listWorkOrders: ListWorkOrders = (token) =>
    token === String(process.env.LOGIN_TOKEN)
        ? auth(
            String(process.env.UPKEEP_EMAIL) as Email,
            String(process.env.UPKEEP_PASSWORD) as Password,
        )
            .then((authResp) =>
                !!authResp.success
                    ? getWorkorders(authResp.result.sessionToken)
                        .then(({ success, results, message }) =>
                            !!success
                                ? Either.Right(results)
                                : Either.Left(message as Error))
                    : Promise.resolve(Either.left(authResp.message as Error))
            )
        : Promise.resolve(Either.left('bad token' as Error));
