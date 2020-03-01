import { NextApiRequest, NextApiResponse } from 'next'
import { addWorkOrder } from '../../lib/add-workorder';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const attempt = addWorkOrder(req.body.token, req.body.data);
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
