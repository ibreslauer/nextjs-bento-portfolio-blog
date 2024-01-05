"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { MaterialSymbolsClose, MaterialSymbolsMenu } from "../icons";
import resume from "../resume.json";

const MENU_ITEMS = [
  { href: "/", text: "home.", mobileOnly: true },
  { href: "/#work", text: "work." },
  { href: "/blog", text: "blog." },
  { href: "/#contact", text: "contact." },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { author } = resume;

  return (
    <>
      <div
        id="header"
        className="w-[1240px] max-w-full mx-auto container-bg rounded-full flex justify-between items-center py-3 px-8 text-lg font-medium"
      >
        <div>
          <Link href="/">{author.name.toLowerCase()}.</Link>
        </div>
        <div
          id="menu"
          className="hidden md:flex justify-end items-center gap-20"
        >
          {MENU_ITEMS.filter((item) => !item.mobileOnly).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/50 hover:text-white transition-colors duration-500 ease-in-out"
            >
              {item.text}
            </Link>
          ))}
        </div>

        <Dialog open={menuOpen} onClose={() => setMenuOpen(false)}>
          <div className="absolute top-0 left-0 py-28 pr-12 right-0 h-svh container-bg flex flex-col justify-evenly gap-6 items-end">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/50 hover:text-white transition-colors duration-500 ease-in-out"
                onClick={() => setMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}
          </div>
          <button
            className="absolute top-[1.625rem] right-11 flex justify-center items-center text-white w-6 h-6"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MaterialSymbolsClose />
          </button>
        </Dialog>

        <div id="menu-mobile" className="relative w-6 h-6 md:hidden">
          <button
            className="absolute top-0 right-0 flex justify-center items-center text-white w-6 h-6"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MaterialSymbolsMenu />
          </button>
        </div>
      </div>
    </>
  );
}
