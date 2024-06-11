import { prisma } from "@/db";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export const GET = async (res:NextApiResponse,req:NextApiRequest) => {
    try {
        const {email} = req.body;
        const user = await prisma.user.findUnique({where:{email}});
        return res.status(200).json(user);
    } catch {
        return null;
    }
}