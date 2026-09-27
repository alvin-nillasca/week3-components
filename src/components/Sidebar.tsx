import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-100 p-6 border-r border-slate-200 hidden md:block">
      <h2 className="text-lg font-semibold mb-4 text-slate-800">Navigation</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/" className="block p-2 rounded hover:bg-slate-200 text-slate-700">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/about" className="block p-2 rounded hover:bg-slate-200 text-slate-700">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact" className="block p-2 rounded hover:bg-slate-200 text-slate-700">
            Contact Us
          </Link>
        </li>
      </ul>
    </aside>
  );
}