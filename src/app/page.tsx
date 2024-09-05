import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="w-full h-screen grid grid-cols-2">
        <div className="relative grid grid-rows-[1fr,auto] bg-black text-white p-4 font-semibold">
          <header></header>
          <p>
            Welcome to the admin system never let a day without an extra step
          </p>
        </div>

        <div className="grid place-content-center gap-4">
          <div className="grid gap-2 text-center">
            <h1 className="text-2xl font-bold">Login</h1>
            <span className="text-sm text-gray-400">
              Enter your username and password below to login
            </span>
          </div>
          <form action="" className="grid gap-2">
            <Input placeholder="user account" />
            <Input placeholder="password" type="password" />
          </form>
          <Link href={"/admin"} className={buttonVariants()}>
            Login
          </Link>
        </div>
      </section>
    </main>
  );
}
