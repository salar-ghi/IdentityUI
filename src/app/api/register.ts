import type { NextApiRequest, NextApiResponse } from "next";
import base from "./base";

export default async function register ( req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        try {
            const {nationalId, email, password } = req.body;
            // Make apiResponse to the asp.net core web api
            const apiResponse = await base.post('/Auth/register',
                { nationalId, email, password }
            );
            res.status(200).json(apiResponse.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        // res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: 'Method not allowed'});
    }
}
