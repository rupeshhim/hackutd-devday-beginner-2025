import React from "react";
import Link from "next/link";
import { User, Settings, Anvil} from "lucide-react";

function Navbar() {
    return (
        <nav className="flex justify-between items-center py = 4 px = 8 bg-grey-100 border-b border-grey-300">
            <div className ="flex gap-4">
                <Link href ="/settings" className ="group relative">
                    <Anvil size ={24} className="cursor-pointer"/>
                </Link>
            </div>
            

            <div className = "front-bold text-3xl">
                <Link href ="/" className ="group relative">
                    <span className ="cursor-pointer text-gray-900">DevGPA</span>
                
    
                </Link>
            </div>
                    
           <div className ="flex gap-4">
                <Link href ="/profile" className ="group relative">
                    <User size = {24} className = "cursor-pointer"/>
                </Link>
            </div> 
            
            

        </nav>
    );
}

export default Navbar;