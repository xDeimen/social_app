import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton, SignUp } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";

export default function Home() {
  return (
    <div className="m-4">
      <SignedOut>
        <SignInButton mode="modal">
          <Button>
            Sign In
          </Button>
          </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
      <Button variant={"secondary"}>Click me</Button>
      <ModeToggle></ModeToggle>
    </div>
  );
}
