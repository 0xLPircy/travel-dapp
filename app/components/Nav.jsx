import Link from "next/link"
import { auth, UserButton } from "@clerk/nextjs"
import Image from "next/image";

const Nav = () => {
    const { userId } = auth();
    console.log(userId);

    return (
        <>
            <nav className="py-4 px-6 flex items-center justify-between mb-5">
                <Link className="flex items-center" href="/">
                    <div id="logo ">
                        <h1 className="text-lg uppercase font-bold text-black">TRAVEL LOGO</h1>
                    </div>
                </Link>
                <div className=" flex items-center">
                    <Link className="mx-6" href="/">Home</Link>
                    <Link className="mx-6" href="/">About</Link>
                    <Link className="mx-6" href="/">Programs</Link>
                    <Link className="mx-6" href="/">Contact Us</Link>
                    {!userId && (
                        <>
                            <Link className="mx-6" href="sign-in"> Connect Wallet </Link>
                            <Image></Image>
                        </>
                    )}
                    {userId && (
                        <Link className="mx-6" href="profile">
                            Dashboard
                        </Link>
                    )}
                    <div className="ml-auto">
                        <UserButton afterSignOutUrl='/' />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav