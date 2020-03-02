import { NextApiRequest, NextApiResponse } from 'next'
import { addWorkorder } from '../../lib/api/add-workorder';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const attempt = await addWorkorder(req.body.token, req.body.data);
    if (attempt.isLeft()) {
        res
            .status(200)
            .json({ err: attempt.left() });
    } else {
        res
            .status(200)
            .json({ workorderId: attempt.right() });
    }
};
