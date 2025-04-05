"use client"
import { useState } from "react";
import { FaGripLines } from "react-icons/fa6";


export default function Navbar (){
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <main className="bg-white shadow shadow-gray-500 w-full">
            <div className="flex justify-between items-center pt-3 px-5 h-[50]">
                <p className="font-bold">urgentCa$h</p>
                <ul className="hidden md:flex gap-10">
                    <li>Home</li>
                    <li>Get Loan</li>
                    <li>Loan History</li>
                    <li>Loan-Details</li>
                    <li>Profile</li>
                </ul>
                <p className="hidden md:block h-[30px] w-[50px] bg-black text-white justify-center items-center">Sign In</p>
                <div className="block md:hidden">
                    <FaGripLines className="text xl cursor pointer text-green-500"onClick={toggleMenu}/>

                </div>
            </div>
            {menuOpen && (
            <div className="md:hidden px-5 pb-3">
             <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>Get Loan</li>
                    <li>Loan History</li>
                    <li>Loan-Details</li>
                    <li>Profile</li>  
            </ul>
            </div>
            )}
        </main>
    )
}