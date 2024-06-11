import { auth } from "@/auth"
import { SignInButton, SignOutButton } from "./user";

export default async function HeaderBar(){
    const session = await auth();
    return(
        <div>
            {
                (!session)&&<SignInButton />
            }
            {
                (session)&&<SignOutButton />
            }
        </div>
    );
}