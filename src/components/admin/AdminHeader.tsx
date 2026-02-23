"use client";

import { signOut, useSession } from "next-auth/react";

export default function AdminHeader() {
  const { data: session } = useSession();

  return (
    <header className="border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-4">
          <a href="/admin/newsletter" className="flex items-center gap-3">
            <img src="/scamai-logo.svg" alt="ScamAI" className="h-6 w-auto" />
            <span className="text-sm font-semibold text-gray-400">
              Newsletter CMS
            </span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          {session?.user?.email && (
            <span className="flex items-center gap-2">
              {session.user.image && (
                <img
                  src={session.user.image}
                  alt=""
                  className="h-6 w-6 rounded-full"
                />
              )}
              <span className="text-xs text-gray-500">
                {session.user.email}
              </span>
            </span>
          )}
          <a
            href="/en/newsletter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 transition hover:text-white"
          >
            View Public Site
          </a>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="rounded-lg border border-gray-700 px-3 py-1.5 text-xs text-gray-400 transition hover:border-gray-600 hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
