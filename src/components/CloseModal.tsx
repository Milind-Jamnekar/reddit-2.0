"use client";
import { X } from "lucide-react";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";

const CloseModal = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      variant="subtle"
      className="h-8 w-8 p-0"
      aria-label="close modal"
    >
      <X className="h-4 w-4" />
    </Button>
  );
};

export default CloseModal;
