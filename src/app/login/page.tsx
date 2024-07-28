"use client";
import Link from 'next/link';

import { TrophyIcon } from '../../components/trophy-icon';
import { Label } from '../../components/label';
import { Input } from '../../components/input';
import { PasswordInput } from '../../components/password-input';
import { Button } from '../../components/button';

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#088F8F]">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-[#C9DABF] p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <TrophyIcon className="h-6 w-6" />
            <span className="font-bold">Teddy D. Mwangi</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/login" className="text-sm font-medium hover:underline" prefetch={false}>Login</Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/register" className="text-sm font-medium hover:underline" prefetch={false}>Register</Link>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email address" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <PasswordInput id="password" type="password" placeholder="******" showToggle required />
          </div>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
}
