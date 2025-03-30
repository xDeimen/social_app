import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton, SignUp } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="m-4">
      <h1>Homepage</h1>
    </div>
  );
}
