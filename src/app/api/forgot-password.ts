import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed'});
        return;
    }
    const { email } = req.body;


    res.status(200).json({ message: 'Password reset instructions sent to your email'});
};

export default handler;
