import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

const users = [
    { username: 'razvanok', apikey: 1234567890 }
]

router.post('/login', (req: Request, res: Response) => {
    const { apikey } = req.body;

    const user = users.find((u) => u.apikey === apikey);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.cookie('ssoToken', 'tokenValue', { httpOnly: true });

    return res.status(200).json({ message: 'Login successful', user });
});

export default router;