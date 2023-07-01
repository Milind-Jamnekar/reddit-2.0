import Signin from "@/components/Signin";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Page({}) {
  return (
    <section className="absolute inset-0">
      <div className="h-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
          home
        </Link>

        <Signin />
      </div>
    </section>
  );
}
