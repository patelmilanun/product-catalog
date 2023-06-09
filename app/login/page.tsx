'use client';

import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
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
import * as z from 'zod';

import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const LoginFormSchema = z.object({
  username: z.string().min(2).max(25),
  password: z.string().min(4).max(25),
});

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  const { toast } = useToast();
  const { isLoaded, signIn, setActive } = useSignIn();

  const [isLoading, setIsLoading] = useState(false);

  const loginForm = useForm<z.infer<typeof LoginFormSchema>>({
    defaultValues: {
      username: 'noob',
      password: 'noobusernoob',
    },
  });

  async function onSubmit(data: z.infer<typeof LoginFormSchema>) {
    if (!LoginFormSchema.safeParse(data).success)
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
        const result = await signIn.create({
          identifier: data.username,
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
          Welcome.
        </h1>
        <Form {...loginForm}>
          <form onSubmit={loginForm.handleSubmit(onSubmit)}>
            <div className="mb-4">
              <FormField
                control={loginForm.control}
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
                control={loginForm.control}
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
                Sign In
              </Button>
            </div>
            <div className="mt-6 text-center">
              <Button variant={'link'} asChild>
                <Link href={'/signup'}>Sign up for an account</Link>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
