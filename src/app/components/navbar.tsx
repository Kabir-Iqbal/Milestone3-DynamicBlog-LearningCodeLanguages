"use client"
import Link from "next/link"
import { useState, useEffect } from "react"

function Navbar() {

    const [CurrentDateTime, setCurrentDateTime] = useState(" ")

    useEffect(() => {
        const updateddatetime = () => {
            const now = new Date()         //useeffect se data li  current Date 
            const options: Intl.DateTimeFormatOptions = {
                weekday: "long",
                month: "long",
                year: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            }

            setCurrentDateTime(now.toLocaleDateString('en-US', options) + " " // yahan time ko state m store kiya 

                // now.toLocaleTimeString('en-US', { hour12: false }) + ' ')
            )
        }

        updateddatetime()
        const intervalid = setInterval(updateddatetime, 1000) // hr ek second k bad function ko chalany k leye setinterval 
        return () => clearInterval(intervalid) // component se un mount hoty hee interval ko khtam kiya 
    },
        [])

    return (
        <header className="text-gray-400 shadow-lg " >
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center  " >
                <div className="flex-1 text-black " >
                    <span> {CurrentDateTime} </span>
                </div>

                <div className="md-ml-auto flex flex-wrap items-center text-black justify-center  " >
                    <Link href={"http://localhost:3000/"} className=" mr-5 hover:text-red-700 transition-colors
                    //  duration-500 transform hover:scale-150 " > Home </Link>

                    <Link href={"http://localhost:3000/"} className=" mr-5 hover:text-red-700 transition-colors
                    //  duration-500 transform hover:scale-150 " > About </Link>

                    <Link href={"http://localhost:3000/"} className=" mr-5 hover:text-red-700 transition-colors
                    //  duration-500 transform hover:scale-150 " > Blog </Link>

                    <Link href={"http://localhost:3000/"} className=" mr-5 hover:text-red-700 transition-colors
                    //  duration-500 transform hover:scale-150 " > Contact </Link>
                </div>

            </div>
        </header>
    )
}

export default Navbar
