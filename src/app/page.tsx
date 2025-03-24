import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      Home Page
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
