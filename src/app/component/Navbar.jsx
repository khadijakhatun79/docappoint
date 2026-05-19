"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";
import {
  X,
  Menu,
  LayoutDashboard,
  User,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Demo values
  const isPending = false;
  const session = null;

  const handleLogOut = () => {
    console.log("logout");
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md shadow-sm py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              width={150}
              height={150}
              alt="logo"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-medium text-slate-700 hover:text-[#f96363] transition-colors"
            >
              Home
            </Link>

            <Link
              href="/appointments"
              className="font-medium text-slate-700 hover:text-[#f96363] transition-colors"
            >
              Appointments
            </Link>

            <Link
              href="/dashboard"
              className="font-medium text-slate-700 hover:text-[#f96363] transition-colors"
            >
              Dashboard
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            {!isPending && !session ? (
              <>
                <Link
                  href="/login"
                  className="font-medium text-slate-700 hover:text-[#f96363] transition-colors"
                >
                  Login
                </Link>

                <Link href="/register">
                  <Button className="bg-[#f96363] text-white font-bold rounded-full px-8">
                    Register
                  </Button>
                </Link>
              </>
            ) : (
              <div className="relative group">
                {/* Profile Button */}
                <button className="flex items-center gap-3 p-1 rounded-full hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200">
                  <Image
                    width={40}
                    height={40}
                    src={
                      session?.user?.image ||
                      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"
                    }
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div className="hidden lg:block text-left">
                    <p className="text-sm font-bold truncate max-w-[100px]">
                      {session?.user?.name}
                    </p>

                    <p className="text-[10px] text-slate-500">
                      Student
                    </p>
                  </div>
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 top-14 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 z-50">
                  
                  <div className="px-4 py-3 border-b border-slate-100">
                    <p className="font-bold text-sm">
                      Welcome back!
                    </p>

                    <p className="text-xs truncate text-slate-500">
                      {session?.user?.email}
                    </p>
                  </div>

                  <Link
                    href="/dashboard"
                    className="px-4 py-2 text-sm hover:bg-slate-100 flex items-center gap-3 transition-colors"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </Link>

                  <Link
                    href="/settings"
                    className="px-4 py-2 text-sm hover:bg-slate-100 flex items-center gap-3 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    Settings
                  </Link>

                  <button
                    onClick={handleLogOut}
                    className="px-4 py-2 text-sm text-[#f96363] hover:bg-red-50 flex items-center gap-3 transition-colors text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white border-b border-slate-200">
          
          <Link
            href="/"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            Home
          </Link>

          <Link
            href="/appointments"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            Appointments
          </Link>

          <Link
            href="/dashboard"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            Dashboard
          </Link>

          {/* Auth Buttons */}
          {!session && (
            <div className="pt-4 border-t mt-4">
              <div className="grid grid-cols-2 gap-4">
                
                <Link href="/login">
                  <Button
                    variant="bordered"
                    className="rounded-xl w-full"
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/register">
                  <Button className="rounded-xl w-full bg-[#f96363] text-white">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* Account Section */}
          {session && (
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
              <p className="px-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                Account
              </p>

              <button
                onClick={handleLogOut}
                className="block w-full text-left px-4 py-3 text-base font-medium text-red-500 hover:bg-red-50 rounded-xl"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 