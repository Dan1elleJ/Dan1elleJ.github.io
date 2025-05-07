'use client'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";

function Header() {
  return (
    <Navbar className="text-[#FA812F] bg-[#FEF3E2]">
      <NavbarBrand>
        <p className="font-bold">danielle jackson</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-inherit" href="#artwork">
            Gallery
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-inherit" href="#about">
            About Me
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Button isIconOnly aria-label="Instagram" className="rounded-full bg-[#FA812F] hover:bg-[#FEF32]" as="a" href="https://www.instagram.com">
            <svg width="150" height="100">
              <svg width="100%" height="100%" fill="#FEF3E2" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path>
                  <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path>
                </g>
              </svg>
            </svg>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly aria-label="LinkedIn" className="rounded-full bg-[#FA812F] hover:hover:bg-[#FEF32]"  as="a" href="https://www.linkedin.com">
          <svg width="200" height="100">
            <svg width="100%" height="100%" fill="#FEF3E2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"></path>
              </g>
            </svg>
          </svg>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
export default Header;