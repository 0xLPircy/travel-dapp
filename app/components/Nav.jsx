import Link from "next/link"
import { auth, UserButton } from "@clerk/nextjs"

const Nav = () => {
    const { userId } = auth();
    console.log(userId);

    return (
        <>
            <nav>
                <Link href="/">
                    <div id="logo">
                        <h1>TRAVEL LOGO</h1>
                    </div>
                </Link>
                <div>
                    {/* <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Programs</Link>
                    <Link>Contact Us</Link> */}
                </div>
                {!userId && (
                    <>
                        <Link href="sign-in"> Connect Wallet </Link>
                    </>
                )}
                {userId && (
                    <Link href="profile">
                        Dashboard
                    </Link>
                )}
                <div className="ml-auto">
                    <UserButton afterSignOutUrl='/' />
                </div>
            </nav>
        </>
    )
}

export default Nav