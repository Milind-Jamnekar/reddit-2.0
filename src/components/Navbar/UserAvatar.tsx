import { User } from "next-auth";
import { FC } from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import Image from "next/image";
import { Icons } from "../Icons";
import { AvatarProps } from "@radix-ui/react-avatar";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "name" | "image">;
}

const UserAvatar: FC<UserAvatarProps> = ({
  user: { name, image },
  ...props
}) => {
  return (
    <Avatar className="ring-2 ring-black ring-offset-2">
      {image ? (
        <div className="relative aspect-square w-full h-full">
          <Image
            fill
            src={image}
            alt={name + " image"}
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{name}</span>
          <Icons.user className="h-4 w-5" />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
