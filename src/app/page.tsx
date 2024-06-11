"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { auth, signIn, signOut } from "@/auth";
import { SignInButton,SignOutButton } from "./components/user";
import { useAuth } from "./api/context/auth";

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <p>Text App</p>
    </div>
  );
}
