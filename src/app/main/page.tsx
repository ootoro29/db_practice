"use client"

import { auth } from "@/auth";
import { useEffect, useState } from "react";
import { useAuth } from "../api/context/auth";
export default function Page() {
    const user = useAuth();
    
    return (
        <div>
            <p>aaa</p>
            <p>{user?.name}</p>
        </div>
    );
}