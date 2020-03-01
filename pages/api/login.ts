import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    token: string
}

const login = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    console.log(req.body);
    res.status(200).json({ token: '12345' })
};

export default login;
