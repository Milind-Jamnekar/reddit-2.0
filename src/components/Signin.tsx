import { Icons } from "./Icons";

const Signin = ({}) => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-5 max-w-md">
      <div className="flex flex-col space-y-2 text-center border-4 p-6 rounded-2xl border-black">
        <Icons.logo className="h-12 w-12 md:h-20 md:w-20 mx-auto" />

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
          Welcome back
        </h1>
        <p className="text-lg">
          By continuing, you are setting up account and agree our user agrements{" "}
          and privacy policy
        </p>
      </div>
    </div>
  );
};

export default Signin;
