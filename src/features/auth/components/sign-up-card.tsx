import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DottedSeparator } from "@/components/ui/dotted-separator";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const formSchema = z.object(
    {
        name: z.string().trim().min(1,"Name is required"),
        email: z.string().email(),
        password: z.string().min(8,"Minimum 8 characters required"),
    }
);

export const SignUpCard = () => {

        const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                name:"",
                email: "",
                password: "",
            },
        });
    
        const onSubmit = (values: z.infer<typeof formSchema>) => {
            console.log({values});
        };

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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
                            name="name"
                            control = {form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                        {...field}
                                        type="text"
                                        placeholder="Enter your name"
                                        />
                                    </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="email"
                            control = {form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                        {...field}
                                        type="email"
                                        placeholder="Enter your email address"
                                        />
                                    </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="password"
                            control = {form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                        {...field}
                                        type="password"
                                        placeholder="Enter your password"
                                        />
                                    </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
          <Button size="lg" className="w-full">
            Create Account
          </Button>
        </form>
    </Form>    
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
      <div className="px-6">
                <DottedSeparator />
            </div>
            <CardContent className="pt-6 px-6">
                <p>
                    Already have an account?
                    <Link href="/sign-in">
                    <span className="text-blue-700">&nbsp;Sign In</span>
                    </Link>      
                </p>

        </CardContent>
    </Card>
  );
};
