import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Navbar(){
    return(
<>    
<h1>welcome to country page</h1> 
<div className="flex flex-wrap justify-center gap-8 mb-0 mt-6 text-red-900">
                
         {/* Static-Countries dropdown */}
         <Card className='grid  bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'> 
         <div className="relative group align-center">
          <div className="flex items-center p-4 gap-1 hover:text-[#aa660d] transition-all cursor-pointer">
            <Link href="/country">Static-Countries</Link>
            <span className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#bcb08a] transition-all group-hover:border-t-[#aa660d] ml-1"></span>
          </div>
          <div className="hidden group-hover:flex absolute top-8 left-16 bg-[#2a1b0a] shadow-md rounded-md z-10">
            <ul className="flex flex-col text-left p-1 gap-2 text-base font-normal">
            <Card className='grid  bg-gradient-to-br from-red-900 via-gray-900 to-teal-900'> <li className='text-red-900 p-2  bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/pakistan">Pakistan</Link></li></Card>
               <Card className='grid bg-gradient-to-br from-red-900 via-gray-900 to-teal-900'> <li className='text-red-900 p-2 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/india">India</Link></li></Card>
               <Card className='grid  bg-gradient-to-br from-red-900 via-gray-900 to-teal-900'> <li className='text-red-900 p-2  bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/bangladesh">Bangladesh</Link></li></Card>
               <Card className='grid  bg-gradient-to-br from-red-900 via-gray-900 to-teal-900'> <li className='text-red-900 p-2 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/saudia">Saudia</Link></li></Card>
            </ul>
          </div>
        </div>
         </Card>
            {/* Dynamic-Countries dropdown */}
            <Card className='grid  bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'> 
        <div className="relative group">
          <div className="flex items-center p-4 gap-1 hover:text-[#aa660d] transition-all cursor-pointer">
            <Link href="/country">Dynamic-Countries</Link>
            <span className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#bcb08a] transition-all group-hover:border-t-[#aa660d] ml-1"></span>
          </div>
          <div className="hidden group-hover:flex absolute top-8 left-16  bg-[#2a1b0a] shadow-md rounded-md z-10">
            <ul className="flex flex-col text-left p-1 gap-2 text-base font-normal">
            <Card className='grid  bg-gradient-to-br from-red-900 via-gray-900 to-teal-900'> <li className='text-red-900 p-2  bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/canada">Canada</Link></li></Card>
               <Card className='grid bg-gradient-to-br from-red-900 via-gray-900 to-teal-900'> <li className='text-red-900 p-2 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/germany">Germany</Link></li></Card>
               <Card className='grid  bg-gradient-to-br from-red-900 via-gray-900 to-teal-900'> <li className='text-red-900 p-2  bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/japan">Japan</Link></li></Card>
               <Card className='grid  bg-gradient-to-br from-red-900 via-gray-900 to-teal-900'> <li className='text-red-900 p-2 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/australia">Australia</Link></li></Card>
               <Card className='grid  bg-gradient-to-br from-red-900 via-gray-900 to-teal-900'> <li className='text-red-900 p-2 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/france">France</Link></li></Card>
            </ul>
          </div>
        </div>
        </Card>
          </div>
          
        </>  
    )
}

