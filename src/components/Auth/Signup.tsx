import Link from "next/link";
import { Icons } from "../Icons";
import UserAuthForm from "./UserAuthForm";

const Signin = ({}) => {
  return (
    <div className="relative container mx-auto flex w-full flex-col justify-center space-y-5 max-w-md">
      <div className=" flex flex-col space-y-5 text-center p-6">
        <Icons.logo className="h-12 w-12 md:h-20 md:w-20 mx-auto" />

        <div>
          <h1 className="text-5xl md:text-5xl font-semibold tracking-tight">
            Welcome
          </h1>
          <p className="text-lg leading-7">
            By continuing, you are setting up account and agree our user
            agrements and privacy policy
          </p>
        </div>

        <UserAuthForm />

        <p className="text-center text-zinc-800 text-md mb-1">
          Already a Bredditor ?
          <Link className="font-semibold underline" href="/signin">
            {" "}
            Signin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
