'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Home, Sparkles, ShoppingBag, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { EchoAccount } from '@/components/echo-account-next';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Visual Asset Optimization Portal™', href: '/image-gen', icon: Sparkles },
    { name: 'Corporate Branded Solutions', href: '/merch', icon: ShoppingBag },
    { name: 'Corporate Jargon Solutions', href: '/jargon', icon: MessageSquare },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left side: Logo + Title */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image
                src="/BigCorpInc Favicon.png"
                alt="Big Corp Inc Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <h1 className="text-xl font-semibold tracking-tight text-gray-900 font-[family-name:var(--font-geist-sans)]">
                Big Corp Inc.
              </h1>
            </Link>
          </div>

          {/* Right side: Account + Shopping Bag + Hamburger Menu */}
          <div className="flex items-center gap-3">
            {(pathname === '/image-gen' || pathname === '/jargon') && <EchoAccount />}

            {/* Shopping Bag Button */}
            {pathname !== '/merch' && (
              <Link href="/merch">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-100"
                  aria-label="Corporate Branded Solutions"
                >
                  <ShoppingBag className="h-5 w-5" />
                </Button>
              </Link>
            )}

            {/* Hamburger Menu Sheet */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-100"
                  aria-label="Menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="mb-8">
                  <SheetTitle className="text-2xl font-bold font-[family-name:var(--font-geist-sans)]">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-start gap-3 text-sm font-medium text-gray-900 hover:text-black transition-colors py-3 px-4 rounded-lg hover:bg-gray-100"
                      >
                        <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{item.name}</span>
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
