import { NextApiRequest, NextApiResponse } from 'next'
import { logIn } from '../../lib/api/log-in';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const loginAttempt = await logIn(req.body.email, req.body.password);
    if (loginAttempt.isLeft()) {
        res
            .status(200)
            .json({ err: loginAttempt.left() });
    } else {
        res
            .status(200)
            .json({ token: String(process.env.LOGIN_TOKEN) });
    }
};
