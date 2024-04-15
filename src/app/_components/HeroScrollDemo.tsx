"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="bg-[url(/Hero/bg.jpeg)] flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="md:text-4xl text-lg md:font-bold text-white">
              Welcome to the future of <br />
              <span className="text-4xl lg:text-[7rem] md:text-[5rem] font-bold mt-5 leading-none">
                Fun Education
              </span>
            </h1>
          </>
        }
      >
        <video
          src={`/Hero/welcome.mp4`}
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          autoPlay
          loop
          muted
          />
      </ContainerScroll>
    </div>
  );
}