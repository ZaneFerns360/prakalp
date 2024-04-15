import Link from "next/link";
import Navbar from "../_components/sign";
import QuizHistory from "../_components/QuizHistory";

export default function HomePage() {
  return (
    <>
    <Navbar/>
    <QuizHistory/>
    </>
  );
}