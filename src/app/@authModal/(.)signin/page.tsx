import CloseModal from "@/components/CloseModal";
import { Signin } from "@/components/Auth";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="fixed inset-0 bg-zinc-900/50 z-10">
      <div className="container flex items-center h-full max-w-lg mx-auto">
        <div className="relative bg-white w-full py-10 rounded-lg shadow-xl border-4 border-black">
          <div className="absolute top-4 right-4">
            <CloseModal />
          </div>
          <Signin />
        </div>
      </div>
    </div>
  );
};

export default page;
