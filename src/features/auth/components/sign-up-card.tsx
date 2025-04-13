import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DottedSeparator } from "@/components/ui/dotted-separator";

export const SignUpCard = () => {
  return (
    <Card className="w-full h-full md:w-[400px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-6">
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription className="text-sm mt-2">
          By signing up, you agree to our{" "}
          <Link href="/privacy">
            <span className="text-blue-700">Privacy Policy</span>
          </Link>{" "}
          and{" "}
          <Link href="/terms">
            <span className="text-blue-700">Terms of Service</span>
          </Link>
        </CardDescription>
      </CardHeader>

      <div className="px-6">
        <DottedSeparator />
      </div>

      <CardContent className="pt-6 px-6">
        <form className="space-y-3">
          <Input
            required
            type="email"
            value={""}
            onChange={() => {}}
            placeholder="Email address"
          />
          <Input
            required
            type="password"
            value={""}
            onChange={() => {}}
            placeholder="Password"
            min={8}
            max={256}
          />
          <Button size="sm" className="w-full">
            Login
          </Button>
        </form>
      </CardContent>

      <div className="px-6">
        <DottedSeparator />
      </div>

      <CardContent className="px-6 pb-6 pt-4 flex flex-col gap-y-3">
        <Button variant="secondary" size="sm" className="w-full">
          <FcGoogle className="mr-2 size-4" />
          Sign in with Google
        </Button>
        <Button variant="secondary" size="sm" className="w-full">
          <FaGithub className="mr-2 size-4" />
          Login with Github
        </Button>
      </CardContent>
    </Card>
  );
};
