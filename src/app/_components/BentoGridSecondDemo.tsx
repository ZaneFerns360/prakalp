import { cn } from "../../../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Car, Link } from "lucide-react";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="py-10 md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          link={item.link}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "I got the Logic!!",
    description: "Solve puzzles with logic and critical thinking skills.",
    header: "/Hero/fruitGame.png",
    link: "/logic",
    className: "md:col-span-2",
    icon: <Link className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Memory Mania",
    description: "Flip cards to match pairs and improve memory retention.",
    header: '/Hero/memcards.jpeg',
    link: '/memoryGame',
    className: "md:col-span-1",
    icon: <Link className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Scramble It Up!!",
    description: "Unscramble words to test vocabulary and spelling skills.",
    header: '/Hero/scramble.png',
    link: '/wordScramble',
    className: "md:col-span-1",
    icon: <Link className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Number Puzzle",
    description:
      "Understand the impact of effective communication in our lives.",
    header: '/Hero/NumbPuz.png',
    link: '/arrange',
    className: "md:col-span-2",
    icon: <Link className="h-4 w-4 text-neutral-500" />,
  },
];
