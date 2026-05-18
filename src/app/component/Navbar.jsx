"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {


  return (
 <div className="flex justify-between">
  <div>
        <Image
          src={"/assets/logo.png"}
          height={150}
          width={150}
          alt="logo"
        />
      </div>
   <ul className="flex gap-3">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/appointments"}>All Appointments</Link>
        </li>
        <li>
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>

        
      </ul>
      
 </div>
  );
};

export default Navbar;
