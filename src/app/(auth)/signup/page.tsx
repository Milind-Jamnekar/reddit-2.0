import Signin from "@/components/Signin";
import Signup from "@/components/Signup";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Page({}) {
  return (
    <section className="absolute inset-0">
      <div className="h-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        <Link
          href="/"
          className={
            cn(buttonVariants({ variant: "ghost" })) + " self-start -mt-20"
          }
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          home
        </Link>

        <Signup />
      </div>
    </section>
  );
}