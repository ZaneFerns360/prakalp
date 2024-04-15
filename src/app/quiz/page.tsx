import Link from "next/link";
import Navbar from "../_components/sign";
import QuizHistory from "../_components/QuizHistory";
import QuizType1 from "../_components/QuizType1";

export default function HomePage() {
  return (
    <>
    <Navbar/>
    <QuizType1/>
    </>
  );
}