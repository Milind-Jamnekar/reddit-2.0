"use client";
import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { Button, buttonVariants } from "./ui/Button";
import { Icons } from "./Icons";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "There is a problem ",
        description: "There was an error during the login ",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button
        onClick={loginWithGoogle}
        isLoading={loading}
        size="sm"
        className="w-full"
      >
        {loading ? null : <Icons.google className="h-4 w-4 " />}
        google
      </Button>
    </div>
  );
};

export default UserAuthForm;
