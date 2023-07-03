import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import UserAutherForm from "./UserAutherForm";

const Signin = ({}) => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-5 max-w-md">
      <div className=" flex flex-col space-y-5 text-center border-4 p-6 rounded-2xl border-black">
        <Icons.logo className="h-12 w-12 md:h-20 md:w-20 mx-auto" />

        <div>
          <h1 className="text-5xl md:text-5xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-lg leading-7">
            By continuing, you are setting up account and agree our user
            agrements and privacy policy
          </p>
        </div>

        <UserAutherForm />

        <span className="w-full h-1 bg-black"></span>
        <div>
          <p className="text-center text-zinc-800 text-lg mb-1">
            New to breddit ?
          </p>
          <Link
            href="/signup"
            className={buttonVariants({ size: "sm" }) + " w-full"}
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
