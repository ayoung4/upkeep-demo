import { Either } from 'monet';

import { AddWorkOrder, Error, Email, Password } from './constants';
import { auth } from './upkeep/auth';
import { postWorkorder } from './upkeep/post-workorder';

export const addWorkorder: AddWorkOrder = (token) =>
    token === String(process.env.LOGIN_TOKEN)
        ? auth(
            String(process.env.UPKEEP_EMAIL) as Email,
            String(process.env.UPKEEP_PASSWORD) as Password,
        )
            .then((authResp) =>
                !!authResp.success
                    ? postWorkorder(authResp.result.sessionToken, {})
                        .then(({ success, result, message }) =>
                            !!success
                                ? Either.Right(result)
                                : Either.Left(message as Error))
                    : Promise.resolve(Either.left(authResp.message as Error))
            )
        : Promise.resolve(Either.left('bad token' as Error));
