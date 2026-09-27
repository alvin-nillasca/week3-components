import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white p-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">
        <Link href="/">My Next.js App</Link>
      </div>
      <nav className="flex gap-4">
        <Link href="/" className="hover:text-slate-300">Home</Link>
        <Link href="/about" className="hover:text-slate-300">About</Link>
        <Link href="/contact" className="hover:text-slate-300">Contact</Link>
      </nav>
    </header>
  );
}