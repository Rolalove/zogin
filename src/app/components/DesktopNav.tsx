'use client'
import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link";
import { usePathname } from "next/navigation";

function DesktopNav () {
  const pathname = usePathname();
    const navItems= [
        {href:'/', label:"HOME" },
        {href:'/#', label:"ABOUT" },
        {href:'/#', label:"CLASSES" },
        {href:'/#', label:"PAGES" },
        {href:'/#', label:"BLOG" },
        {href:'/#', label:"CONTACT" },
    ];

    const linkClasses = (href: string) =>
        `text-[F2F2F2] hover:decoration-solid hover:underline hover:decoration-2 hover:underline-offset-8 transition-all duration-300
        ${
          pathname === href ? "underline decoration-solid decoration-2 text-white underline-offset-8" : ""
        }`;
    return(
        <nav className="hidden md:block md:flex md:justify-between px-6 py-4  md:container md:mx-auto">
           <div className=" md:text-white md:flex  md:gap-x-10 ">
           {navItems.map((item) => (
             <ul >
                <li key={item.href}>
                  <Link href={item.href} className={linkClasses(item.href)}>
                    {item.label}
                  </Link>
                </li>
                </ul>
              ))}
           </div>
           <div className="">
            <ul className="flex md:gap-x-10 ">
            <li><Icon width={24} height={24} color="white" icon="ri:facebook-fill" /></li>
            <li><Icon width={24} height={24} color="white" icon="ri:twitter-fill" /></li>
            <li><Icon width={24} height={24} color="white" icon="ri:instagram-fill" /></li>
            <li><Icon width={24} height={24} color="white" icon="mingcute:linkedin-fill" /></li>
            </ul>
            
           </div>

        </nav>
    )
}
export default DesktopNav