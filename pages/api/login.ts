import { NextApiRequest, NextApiResponse } from 'next'
import { logIn } from '../../lib/log-in';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const loginAttempt = logIn(req.body.email, req.body.password);
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
