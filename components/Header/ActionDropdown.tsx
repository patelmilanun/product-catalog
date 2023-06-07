'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/NavigationMenu';

import { Button } from '@/components/ui/Button';
import React from 'react';
import Link from 'next/link';
import { LogOut, Plus, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

import { useAuth } from '@clerk/nextjs';

type Props = {
  username: string | null;
};

function ActionDropdown({ username }: Props) {
  const { signOut } = useAuth();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            onPointerMove={(event) => event.preventDefault()}
            onPointerLeave={(event) => event.preventDefault()}
          >
            Hi there,<span className="ml-1 font-bold">{username}</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent
            onPointerEnter={(event) => event.preventDefault()}
            onPointerLeave={(event) => event.preventDefault()}
          >
            <div className="w-48">
              <Link href="/add">
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'w-full justify-start'
                  )}
                >
                  <Plus className="mr-2 h-4 w-4" /> Add Product
                </NavigationMenuLink>
              </Link>
              <Link href="/account">
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'w-full justify-start'
                  )}
                >
                  <Settings className="mr-2 h-4 w-4" /> Account Settings
                </NavigationMenuLink>
              </Link>
              <NavigationMenuLink
                onClick={() => signOut()}
                className={cn(
                  navigationMenuTriggerStyle(),
                  'w-full cursor-pointer justify-start'
                )}
              >
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default ActionDropdown;
