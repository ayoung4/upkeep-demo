import { NextApiRequest, NextApiResponse } from 'next'
import { listWorkOrders } from '../../lib/list-workorders';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const attempt = listWorkOrders(req.body.token);
    if (attempt.isLeft()) {
        res
            .status(200)
            .json({ err: attempt.left() });
    } else {
        res
            .status(200)
            .json({ token: attempt.right() });
    }
};
