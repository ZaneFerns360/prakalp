import Image from "next/image";
import React from "react";
import { HeroScrollDemo } from "./HeroScrollDemo";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className='bg-white '>
      <HeroScrollDemo />

      <div className="my-10 w-[80%] mx-auto md:grid grid-cols-2 gap-3">
        <div className="my-auto text-black">
          <div className="md:text-4xl text-3xl font-bold mb-3">
            Unlock the Joy of Learning through Interactive Learning
          </div>
          <p className="">
            Discover the power of interactive education that engages children
            and makes learning fun. Our platform combines gamification with
            educational content to create an immersive experience that sparks
            curiosity and fosters a love for learning
          </p>
          <div className="px-5 py-2 rounded-md text-black border my-7 md:w-[30%] border-black hover:border-b-4 hover:bg-white hover:font-semibold hover:border-l-4 hover:rounded-lg hover:translate-x-1 hover:-translate-y-1">
            <a href='/dashboard'>
            Dashboard
            </a>
          </div>
        </div>

        <Image
          src="/Hero/newWorld.png"
          className=""
          width={500}
          height={500}
          alt="World"
        />
      </div>

      <div className="bg-[#CAEC9B] text-black grid md:grid-cols-2 gap-10 h-full">
        <div>
          <Image
            src="/Hero/rollercoaster.gif"
            height={1200}
            width={1200}
            alt="rollercoaster"
          />
        </div>
        <div className="lg:px-16 px-10 md:mb-0 mb-7 flex flex-col justify-center">
          <h1 className="md:text-4xl text-3xl font-bold mb-3">
            Join the Adventure at ThinkLabs!
          </h1>
          <p className="">
            Dive into a world of fun and creativity where learning is not only
            educational but also enjoyable.
          </p>
        </div>
      </div>

      {/* <div className="w-[80%] mx-auto py-10 text-black">
        <h1 className="md:text-4xl text-3xl font-bold mb-3 ">
          Rethink the way you Learn with the fun approach
        </h1>
        <p className="">
          Learning is never monotonous if you have the right motivation
        </p>
      </div> */}

      <Footer/>
    </div>
  );
};

export default Hero;
