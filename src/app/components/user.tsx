import { signIn, signOut } from "@/auth";

export const SignInButton = () => {
    return(
        <form action={async() => {
            "use server";
            await signIn("google");
        }}>
            <button>サインイン</button>
        </form>
    );
}

export const SignOutButton = () =>{
    return(
        <form action={async() => {
            "use server";
            await signOut();
        }}>
            <button>サインアウト</button>
        </form>
    );
}