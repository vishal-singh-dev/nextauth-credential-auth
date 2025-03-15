'use client'

import { useSession, signOut } from 'next-auth/react'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="flex justify-between p-4 bg-blue-500 text-white">
      <h1 className="text-xl">My App</h1>
      <div>
        {session ? (
          <button onClick={() => signOut()} className="bg-red-500 p-2 rounded-[30px]">
            Sign Out
          </button>
        ) : (
          <button className="bg-green-500 p-2 rounded-[30px]">
            Sign In
          </button>
        )}
      </div>
    </header>
  )
}