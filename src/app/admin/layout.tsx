import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full h-screen grid lg:grid-cols-[1fr,5fr] grid-rows-[5vh,1fr,1fr]">
        {/*ASIDE*/}
        <aside className="row-span-3 p-2 border hidden lg:block">
          <header className="grid justify-center pt-10 gap-4">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-xl font-semibold">Alpaca Travel</h1>
              <p className="text-gray-400 text-sm">
                Usuario: Alex Chura
              </p>
            </div>
            <Image
              src={"/vercel.svg"}
              alt="Logo Empresa"
              width={120}
              height={120}
              className="w-[80%] h-full mx-auto"
            />
          </header>
          <nav className="grid text-gray-500 pt-10 gap-2">
            <Link
              className={buttonVariants({ variant: "link" })}
              href={{
                pathname: "/admin/users",
              }}
            >
              Usuarios
            </Link>
            <Link
              className={buttonVariants({ variant: "link" })}
              href={{
                pathname: "/admin/tours",
              }}
            >
              Prestamos
            </Link>
          </nav>
        </aside>

        {/*HEADER*/}
        <header className="border-b">holi header</header>
        {/*MAIN*/}
        <main className="p-6">{children}</main>
      </div>
    </>
  );
}
