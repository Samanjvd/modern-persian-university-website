'use client';

import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import {CheckIcon, ChevronRightIcon, CircleIcon, X} from 'lucide-react';
import {cn} from './utils';

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot='menubar'
      className={cn(
        'bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs',
        className,
      )}
      {...props}
    />
  );
}

function MenubarContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        data-slot='menubar-content'
        className={cn(
          'bg-background/95 fixed top-0 left-0 z-50 flex h-screen w-screen flex-col gap-2 overflow-auto p-6',
          className,
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  );
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot='menubar-sub-content'
      className={cn(
        'bg-background/95 fixed top-0 left-0 z-50 flex h-screen w-screen flex-col gap-2 overflow-auto p-6',
        className,
      )}
      {...props}
    />
  );
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot='menubar-trigger'
      className={cn(
        'hover:bg-accent hover:text-accent-foreground rounded-sm px-3 py-1 text-sm font-medium',
        className,
      )}
      {...props}
    />
  );
}

function MenubarItem({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item>) {
  return (
    <MenubarPrimitive.Item
      data-slot='menubar-item'
      className={cn(
        'hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-md px-4 py-2',
        className,
      )}
      {...props}
    />
  );
}

function MenubarSubTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger>) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot='menubar-sub-trigger'
      className={cn(
        'hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center justify-between rounded-md px-4 py-2',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className='ml-2 h-4 w-4' />
    </MenubarPrimitive.SubTrigger>
  );
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub {...props} />;
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      className={cn('bg-border my-2 h-px', className)}
      {...props}
    />
  );
}

export {
  Menubar,
  MenubarContent,
  MenubarTrigger,
  MenubarItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarSeparator,
};
