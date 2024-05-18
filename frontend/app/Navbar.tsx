
'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const NavLinks = [
    { id: 1, name: 'All User', path: '/' },
    { id: 2, name: 'Search User', path: '/search' },
    { id: 3, name: 'Add User', path: '/create' }
  ];

  const pathName = usePathname();
  const isActive = (path: string) => path === pathName;
  return (
    <nav className="w-full bg-slate-500 py-7 px-11 flex transition-all">
        <div className="grow transition-all">
            <h2 className="text-white text-2xl transition-all">CRUD App</h2>
        </div>
        <div className="flex gap-8 transition-all">
            {
            NavLinks.map(link => (
                <li key={link.id} className="hover:scale-110 list-none transition-all">
                <Link 
                    href={link.path} 
                    className={`${isActive(link.path) ? "text-yellow-200" : "text-white"} text-lg transition-all`}
                >
                {link.name}
                </Link>
                </li>
            ))
            }
        </div>
    </nav>
  );
}
