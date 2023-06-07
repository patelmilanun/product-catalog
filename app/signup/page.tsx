'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useToast } from '@/components/ui/useToast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

const SignupFormSchema = z.object({
  username: z.string().min(2).max(25),
  password: z
    .string()
    .min(8, 'Password should be at least 8 characters long')
    .max(25),
});

type Props = {};

const Signup = (props: Props) => {
  const router = useRouter();
  const { toast } = useToast();
  const { isLoaded, signUp, setActive } = useSignUp();

  const [isLoading, setIsLoading] = useState(false);

  const signupForm = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      username: 'noob',
      password: 'noobusernoob',
    },
  });

  async function onSubmit(data: z.infer<typeof SignupFormSchema>) {
    if (!SignupFormSchema.safeParse(data).success)
      toast({
        variant: 'destructive',
        title: 'Username or password is wrong',
      });
    else {
      if (!isLoaded) {
        return;
      }
      try {
        setIsLoading(true);
        const result = await signUp.create({
          username: data.username,
          password: data.password,
        });
        if (result.status === 'complete') {
          console.log(result);
          await setActive({ session: result.createdSessionId });
          router.push('/');
        } else {
          /*Investigate why the login hasn't completed */
          console.log(result);
        }
      } catch (err: any) {
        toast({
          variant: 'destructive',
          title: err.errors[0].longMessage,
        });
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="container mx-auto grid min-h-[90vh] place-items-center p-4 md:p-2 xl:p-5">
      <div className="mx-auto w-full sm:max-w-md">
        <h1 className="mb-12 text-center text-5xl font-extrabold transition-colors">
          Create account.
        </h1>
        <Form {...signupForm}>
          <form onSubmit={signupForm.handleSubmit(onSubmit)}>
            <div className="mb-4">
              <FormField
                control={signupForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-4">
              <FormField
                control={signupForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-6">
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sign Up
              </Button>
            </div>
            <div className="mt-6 text-center">
              <div className="inline text-sm font-medium">
                Already have an account?
              </div>
              <Button className="px-1" variant={'link'} asChild>
                <Link href={'/login'}>Sign in</Link>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
