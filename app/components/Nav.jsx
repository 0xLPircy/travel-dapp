import Link from "next/link"

const Nav = () => {
    return (
        <>
            <nav>
                <Link href="/">
                    <div id="logo">
                        <h1>TRAVEL LOGO</h1>
                    </div>
                </Link>
                <div>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Programs</Link>
                    <Link>Contact Us</Link>
                </div>
            </nav>
        </>
    )
}

export default Nav