import { NextApiRequest, NextApiResponse } from 'next'
import { listWorkOrders } from '../../lib/api/list-workorders';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const attempt = await listWorkOrders(req.body.token);
    if (attempt.isLeft()) {
        res
            .status(200)
            .json({ err: attempt.left() });
    } else {
        res
            .status(200)
            .json({ workorders: attempt.right() });
    }
};
