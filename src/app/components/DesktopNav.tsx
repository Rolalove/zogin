'use client'
import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link";
import { usePathname } from "next/navigation";

function DesktopNav() {
  const pathname = usePathname();
  const navItems = [
    { href: '/', label: "HOME" },
    { href: '/#about', label: "ABOUT" },
    { href: '/#classes', label: "CLASSES" },
    { href: '/#pages', label: "PAGES" },
    { href: '/#blog', label: "BLOG" },
    { href: '/#contact', label: "CONTACT" },
  ];

  const linkClasses = (href: string) =>
    `text-[#F2F2F2] hover:decoration-solid hover:underline hover:decoration-2 hover:underline-offset-8 transition-all duration-300
    ${pathname === href ? "underline decoration-solid decoration-2 text-white underline-offset-8" : ""}`;

  return (
    <nav className="hidden md:flex md:justify-between px-6 py-4 md:container md:mx-auto">
      <ul className="md:flex md:gap-x-10">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={linkClasses(item.href)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex md:gap-x-10">
        {[
          { icon: "ri:facebook-fill", name: "Facebook" },
          { icon: "ri:twitter-fill", name: "Twitter" },
          { icon: "ri:instagram-fill", name: "Instagram" },
          { icon: "mingcute:linkedin-fill", name: "LinkedIn" },
        ].map((social) => (
          <li key={social.name}>
            <Icon width={24} height={24} color="white" icon={social.icon} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DesktopNav