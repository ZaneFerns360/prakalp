"use client";
import Link from "next/link";
import Navbar from "../_components/sign";
import QuizHistory from "../_components/QuizHistory";
import QuizType1 from "../_components/QuizType1";
import { useRouter, useSearchParams } from "next/navigation";

export default function HomePage() {
  const router = useSearchParams();

  return (
    <>
      <Navbar />
      <QuizType1 params={{ q: router.get("q") || "default value"}} />
    </>
  );
}
