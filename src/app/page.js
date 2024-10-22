
"use client";
import Cards from './cards'

import Image from "next/image";
import adam from './images/adam.png';
import todo from '../photos/todo.png'
import calculator from '../photos/calculator.png'
import stylish from '../photos/stylish.png'
import country from '../photos/country.png'
import cinema from '../photos/cinemascore.png'
import recipe from '../photos/recipe.png'
import Skills from './skills';

import "@fontsource/poppins";
import { ContactUs } from "./mail";
import "./style.css"
import { Link } from "react-scroll";

function Home() {
  return (
    <div className="flex flex-col items-center sticky bg-gradient-to-r from-[#1c3661] to-[#164179] w-full h-full">

      <ul className="bg-[#192643] z-[99] sticky top-4 my-6 h-[80px] flex gap-3 px-[12px] justify-center items-center rounded-full py-3 shadow-2xl">
        <li >
          <Link activeClass="active" className="botton" smooth spy to="home">
            Home
          </Link>
        </li>
        <li>
          <Link activeClass="active" className="botton" smooth spy to="services">
            Services
          </Link>
        </li>
        <li>
          <Link activeClass="active" className="botton" smooth spy to="projects">
            Projects
          </Link>
        </li>
        <li>
          <Link activeClass="active" className="botton" smooth spy to="skills">
            Skills
          </Link>
        </li>
        <li>
          <Link activeClass="active" className="botton" smooth spy to="contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex flex-col gap-10">
        <section id="home" className=" h-[950px] m-[-100px]" >
          <div className="w-full flex flex-col items-center justify-center" >
            <Image src={adam} className="size-72 rounded-full shadow-2xl" alt="adam" />
            <p className="text-7xl font-semibold my-6 bg-gradient-to-r from-[#FF9900] to-[#FF6E00] inline-block text-transparent bg-clip-text">I'm Adam Hadhri</p>
            <p className="text-5xl font-semibold mb-5 text-white">Front End Developer</p>
            <p className="text-3xl font-medium mb-1 text-[#F28C1B]">"The only way to do great work is to love what you do."</p>
            <p className="text-2xl font-normal mb-5 text-[#E2C89E]">Steve Jobs</p>
          </div>
        </section>
        <section id="services">
          <div className="w-full flex flex-col items-center" >
            <p className="text-5xl font-semibold mb-10 text-[#E2C89E]">My Services</p>
            <div className="w-full flex gap-6 justify-center">
              <Cards />
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="flex flex-col gap-6 items-center">
            <p className="text-5xl font-semibold mb-4 text-[#E2C89E]">My Projects</p>

            <div className="w-full flex gap-6 justify-center">
              <a href="https://adamhadhri.github.io/epictastes/" target="_blank" className=" hover:scale-110 h-48 w-80 rounded-xl flex overflow-hidden	hover:contrast-150 cursor-pointer">
                <Image src={recipe} />
              </a>
              <a href="https://adamhadhri.github.io/cinemascore/" target="_blank" className=" hover:scale-110 h-48 w-80 rounded-xl flex overflow-hidden	hover:contrast-150 cursor-pointer">
                <Image src={cinema} />
              </a>
              <a href="https://adamhadhri.github.io/ecommerce/" target="_blank" className=" hover:scale-110 h-48 w-80 rounded-xl flex overflow-hidden hover:contrast-150 cursor-pointer">
                <Image src={stylish} />
              </a>
            </div>
            <div className="w-full flex gap-6 justify-center">
              <a href="https://adamhadhri.github.io/countries/" target="_blank" className=" hover:scale-110 h-48 w-80 rounded-xl flex overflow-hidden	hover:contrast-150 cursor-pointer">
                <Image src={country} />
              </a>
              <a href="https://adamhadhri.github.io/todo-list/" target="_blank" className="hover:scale-110 h-48 w-80 rounded-xl flex overflow-hidden	hover:contrast-150 cursor-pointer">
                <Image src={todo} />
              </a>
              <a href="https://adamhadhri.github.io/calculator/" target="_blank" className="hover:scale-110 h-48 w-80 rounded-xl flex overflow-hidden	hover:contrast-150 cursor-pointer">
                <Image src={calculator} />
              </a>
            </div>
          </div>
        </section>
        <section id="skills">

          <div className="flex flex-col gap-3 items-center">
            <p className="text-5xl font-semibold mb-4 text-[#E2C89E]">My Skills</p>
            <Skills />
          </div>
        </section>
        <section id="contact" >
          <div className="flex flex-col items-center">
            <p className="text-5xl font-semibold mb-3 text-[#E2C89E]">Get in touch</p>
            <ContactUs />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
