"use client"
import { auth } from "@/auth";
import { ReactNode } from "react";
import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { prisma } from "@/db";

type User = {
    name:string;
    email:string;
    image:string;
}

type UserContextType = User | null | undefined;

const AuthContext = createContext<UserContextType>(undefined);

export const AuthProvider = async({children}:{children:ReactNode}) => {
    const session = await auth();
    const sessionUser = ():UserContextType => {
        if(session === null){
            return null;
        }
        if(session.user === null || session.user === undefined){
            return null;
        }
        const user:User = {
            name:session.user.name || "",
            email:session.user.email || "",
            image:session.user.image || ""
        }
        prisma.user.create({
            data:{
                email:user.email,
                name:user.name,
                image:user.image,
            }
        });
        return user;
    }
    return <AuthContext.Provider value = {sessionUser()}>{children}</AuthContext.Provider>
};

export const useAuth = () => useContext(AuthContext);