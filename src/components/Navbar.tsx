import Link from "next/link";
import { Icons } from "./Icons";
import { Button, buttonVariants } from "./ui/Button";
import { getAuthSession } from "@/lib/auth";
import UserAcccontNav from "./UserAcccontNav";

export const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <nav className="fixed top-3 inset-x-3 h-fit bg-zinc-100 border-4 border-zinc-800 rounded-2xl z-10 py-3">
      <div className="container h-full mx-auto flex items-center justify-between gap-2">
        {/* Logo  */}
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="hidden md:block text-zinc-700 text-xl font-semibold">
            Breddit
          </p>
        </Link>

        {/* Search components  */}
        {session?.user ? (
          <UserAcccontNav user={session.user} />
        ) : (
          <Link href="/signin" className={buttonVariants()}>
            Signin
          </Link>
        )}
      </div>
    </nav>
  );
};
