import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
  return (
    <div className="bg-blue-50 pt-5 text-center min-h-screen">
      <Head>
        <title>{page} - Crypto Stats</title>
      </Head>
      <header className="container-lg" className="">
        <h1 className="text-5xl mb-2">CRYPTO STATS</h1>
        <div className="inline-grid grid-cols-2 gap-x-10 p-4">
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
              Home
            </button>
          </Link>
          <Link href="/about">
            <button className="border-2 border-green-600 rounded-lg px-3 py-2 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200 m-2">
              About
            </button>
          </Link>
        </div>
        <div className="">
          <Image
            src="/main.jpg"
            alt="Crypto Image"
            width="400"
            height="100"
            className="rounded-3xl object-center object-cover"
          />
        </div>
      </header>
    </div>
  );
}
