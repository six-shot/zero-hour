"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Logo } from "./ui/icons";
import { useSound } from "@/lib/useSoundContext";
import { ShufflingText } from "./ShufflingText";

const menuItems = [
  { name: "About", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Success", href: "/sucess" },
];

export const HeroHeader = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const { playSound: playHoverSound } = useSound();

  const handleHoverSound = () => {
    console.log("Hover sound triggered!");
    playHoverSound();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex justify-center ">
      <nav
        className={`fixed flex items-center w-full z-[10000] h-[60px] transition-all duration-300   font-[family-name:var(--font-vt323)] md:px-[60px] px-5 ${
          isScrolled ? "bg-black/20 backdrop-blur-md " : "bg-transaparent"
        }`}
      >
        <div className="transition-all duration-300 flex justify-between w-full max-w-[1440px] mx-auto relative h-full">
          <div className="absolute top-0 left-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
          <div className="absolute top-0 left-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
          {/* Top-right corner */}
          <div className="absolute top-0 right-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
          <div className="absolute top-0 right-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
          {/* Bottom-left corner */}
          <div className="absolute bottom-0 left-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
          <div className="absolute bottom-0 left-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
          {/* Bottom-right corner */}
          <div className="absolute bottom-0 right-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
          <div className="absolute bottom-0 right-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
          <div className="relative flex flex-wrap items-center  w-full">
            {/* Logo */}

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:justify-between items-center lg:w-full px-[48px] ">
              {/* Left side - Last two items */}
              <ul className="flex gap-[64px] text-[28px] uppercase">
                {menuItems.slice(0, 2).map((item, index) => (
                  <li key={index + 2}>
                    <Link
                      href={item.href}
                      className={`hover:text-[#ffffff] block duration-150 font-medium ${
                        pathname === item.href
                          ? "text-[#ffffff]"
                          : "text-[#FFFFFF]"
                      }`}
                      onMouseEnter={handleHoverSound}
                    >
                      <ShufflingText
                        text={item.name}
                        className="block"
                        shuffleDuration={30}
                        restoreDuration={80}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <Logo />

              {/* Right side - First two items */}
              <ul className="flex gap-[64px] text-[28px] uppercase">
                {menuItems.slice(2).map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`hover:text-[#ffffff] block duration-150 font-medium ${
                        pathname === item.href
                          ? "text-[#ffffff]"
                          : "text-[#ffffff]"
                      }`}
                      onMouseEnter={handleHoverSound}
                    >
                      <ShufflingText
                        text={item.name}
                        className="block"
                        shuffleDuration={30}
                        restoreDuration={80}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex justify-between items-center w-full px-6">
              <div className="w-[80%]">
                <Logo width={40} height={40} />
              </div>
              <div className=" ">
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  className="relative z-20 block cursor-pointer lg:hidden"
                  data-state={menuState ? "active" : "inactive"}
                  onMouseEnter={handleHoverSound}
                >
                  <div className="flex flex-col gap-[4px]">
                    <div
                      className={`w-[30px] h-[2px] bg-white transition-all duration-300 ${
                        menuState ? "rotate-45 translate-y-[6px]" : ""
                      }`}
                    />
                    <div
                      className={`w-[30px] h-[2px] bg-white transition-all duration-300 ${
                        menuState ? "opacity-0 scale-0" : ""
                      }`}
                    />
                    <div
                      className={`w-[30px] h-[2px] bg-white transition-all duration-300 ${
                        menuState ? "-rotate-45 -translate-y-[6px]" : ""
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-[84px] left-0 right-0 bottom-0 z-[1000] bg-white/10 backdrop-blur-md transition-all duration-300 lg:hidden ${
            menuState ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMenuState(false)}
        >
          <div
            className={`absolute top-0 left-0 right-0 bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300 ${
              menuState ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <ul className="space-y-6 text-base">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`text-muted-foreground hover:text-accent-foreground block duration-150 ${
                        pathname === item.href ? "text-white" : "text-[#ffffff]"
                      }`}
                      onClick={() => setMenuState(false)}
                      onMouseEnter={handleHoverSound}
                    >
                      <ShufflingText
                        text={item.name}
                        className="block"
                        shuffleDuration={30}
                        restoreDuration={80}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
