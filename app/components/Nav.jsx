import Link from "next/link";
import { auth, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Nav = () => {
  const { userId } = auth();
  console.log(userId);

  return (
    <>
      <nav className="py-0 px-6 flex items-center justify-between mb-5">
        <Link className="flex items-center" href="/">
          <div id="logo" className="flex items-center text-[#eeeeee]">
            <Image src="/logo.png" height={90} width={90} />
            {/* <img src="./logo.png" alt="" /> */}
            <h1 className="text-lg uppercase font-bold">TRAVEL LOGO</h1>
          </div>
        </Link>
        <div className="flex items-center text-[#eeeeee]">
          <Link className="mx-6" href="/">
            Home
          </Link>
          <Link className="mx-6" href="/">
            About
          </Link>
          <Link className="mx-6" href="/">
            Programs
          </Link>
          <Link className="mx-6" href="/">
            Contact Us
          </Link>
          {!userId && (
            <div className="flex bg-[#e2e2e2] text-[#121212] items-center p-2 rounded-md">
              <Link className="px-2" href="sign-in">
                {" "}
                Connect Wallet{" "}
              </Link>
              <Image src="/metamask.png" height={30} width={30}></Image>
            </div>
          )}
          {userId && (
            <Link className="mx-6" href="/dashboard">
              Dashboard
            </Link>
          )}
          <div className="ml-auto">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
