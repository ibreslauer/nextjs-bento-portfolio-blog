import Link from "next/link";

export default function Footer() {
  return (
    <div
      id="footer"
      className="w-[1240px] max-w-full mx-auto container-bg rounded-full flex justify-between items-center py-3 px-8 text-base font-medium text-white/50"
    >
      <div>
        <Link href="https://github.com/ibreslauer" className="hover:text-white">
          Ivan Breslauer
        </Link>
      </div>
      <div id="copyright" className="flex justify-end items-center font-normal">
        all rights reserved. © {new Date().getFullYear()}
      </div>
    </div>
  );
}
