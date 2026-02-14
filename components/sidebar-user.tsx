"use client";

import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function SidebarUser() {
  return (
    <div className="p-4 border-t">
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <a href="/sign-in" className="text-sm text-gray-600">
          Sign in
        </a>
      </SignedOut>
    </div>
  );
}
