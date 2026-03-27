import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { Divider } from "./Divider";

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="bg-primary flex items-center justify-around w-full z-50 py-2">
                <span><img src="/react.png" alt="vite-logo" /></span>

                <ul className="hidden md:flex md:gap-x-4">
                    <li className="font-medium font-sans">
                        <NavLink
                            to="/"
                            className="group inline-block text-[#49c7ff]"
                        >
                            Home
                            <span className="block h-0.5 bg-tertiary scale-x-0 rounded-lg group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </NavLink>
                    </li>

                    <li className="font-medium font-sans">
                        <NavLink
                           className="group text-[#49c7ff]"
                             to="/admin"
                        >
                            Admin
                            <span className="block group-hover:scale-x-100 scale-x-0 transition-transform duration-200 h-0.5 rounded-2xl bg-tertiary origin-left"></span>
                        </NavLink>
                    </li>
                    <li className="font-medium font-sans">
                        <NavLink
                           className="group text-[#49c7ff]"
                             to="/contact"
                        >
                            Contact
                            <span className="block group-hover:scale-x-100 scale-x-0 transition-transform duration-200 h-0.5 rounded-2xl bg-tertiary origin-left"></span>
                        </NavLink>
                    </li>

                
                </ul>

                <Button text="Learn More" />
                {/* <button className="md:block hidden bg-[#5fabff] text-yellow-300 rounded-2xl p-2 hover:text-black hover:bg-white transition duration-300 cursor-pointer">
                    Learn More
                </button> */}

                <button
                    onClick={() => setOpen(prev => !prev)}
                    className="flex flex-col justify-center items-center md:hidden gap-1 w-7 h-7 bg-white rounded-lg z-50"
                >
                    <span className={`block h-0.5 w-5 bg-black transition-transform duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
                    <span className={`block h-0.5 w-5 bg-black transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
                    <span className={`block h-0.5 w-5 bg-black transition-transform duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </button>
            </nav>

                        <Divider/>

            <div className={`md:hidden w-1/2 h-dvh ml-auto bg-primary fixed z-40 transform transition-transform duration-300 ease-in-out ${open ? "translate-y-0" : "translate-y-[5000%]"}`}>
                
                <ul className="grid gap-y-4 justify-items-start pl-2 pt-2">
                    
                    <li className="font-medium font-sans flex flex-row-reverse gap-x-2 items-center">
                        <NavLink
                            to="/"
                            onClick={() => setOpen(false)}
                            className="group inline-block text-[#49c7ff]"
                        >
                            Home
                            <span className="block h-0.5 bg-tertiary scale-x-0 rounded-lg group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </NavLink>
                        <img src="/react.png" alt="logo" />
                    </li>

                    <li className="font-medium font-sans flex flex-row-reverse gap-x-2 items-center">
                        <NavLink
                            to="/admin"
                            onClick={() => setOpen(false)}
                            className="group text-[#49c7ff]"
                        >
                            Admin
                            <span className="block group-hover:scale-x-100 scale-x-0 transition-transform duration-200 h-0.5 rounded-2xl bg-tertiary origin-left"></span>
                        </NavLink>
                        <img src="/react.png" alt="logo" />
                    </li>
                    <li className="font-medium font-sans flex flex-row-reverse gap-x-2 items-center">
                        <NavLink
                            to="/contact"
                            onClick={() => setOpen(false)}
                            className="group text-[#49c7ff]"
                        >
                           Contact
                            <span className="block group-hover:scale-x-100 scale-x-0 transition-transform duration-200 h-0.5 rounded-2xl bg-tertiary origin-left"></span>
                        </NavLink>
                        <img src="/react.png" alt="logo" />
                    </li>


                </ul>
            </div>
        </>
    );
}