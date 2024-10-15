import Image from "next/image"
import { Icon } from '@iconify/react';
function Navbar () {
    return(
        <nav className="container mx-auto  w-full">
            <div className="flex justify-between py-4 px-6 items-center  ">
            <Image src='/logo.png' width={120} height={100} alt=''/>
            <button className="md:hidden ">
            <Icon width={30} height={30} icon="mdi:menu" />
            </button>
            <div>
                <ul className="hidden lg:block lg:flex lg:gap-x-4 lg:text-xs  ">
                    <li>CALL US: + 1 800-567-8990</li>
                    <li>WRITE US: OFFICE@EXAMPLE.COM</li>
                    <li>OPENING TIMES: MON - FRI: 9:00 - 19:00</li>

                </ul>
            </div>
            <button className="hidden md:block md:px-6 md:py-3 md:bg-[#5768AD] md:text-white lg:hidden xl:block"> JOIN US
            </button>
            

            </div>
            
        </nav>
    )
}
export default Navbar