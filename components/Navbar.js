"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const showNavbar = ["/", "/generate"].includes(pathname);
  return (
    <>
      {showNavbar && (
        <nav className="max-w-[1568px] w-[95%] h-19 flex items-center justify-between gap-9 p-6 rounded-[999px] mx-auto mt-[3.45vw] absolute left-0 right-0 bg-white pr-3">
          <Link href={"/"}>
            <img
              loading="eager"
              src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
              alt="logo"
              className="h-6 cursor-pointer "
            ></img>
          </Link>
          <Link href="/generate">
          <button className="p-4 font-[660] rounded-full bg-black hover:bg-[#262d3e] text-white cursor-pointer">
            Get started
          </button></Link>
        </nav>
      )}
    </>
  );
};

export default Navbar;
