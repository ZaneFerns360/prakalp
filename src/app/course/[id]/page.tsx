import React from "react";
import Navbar from "../../_components/sign";
import CourseGen from "../../_components/CourseGen";

export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Navbar />
      <CourseGen params={{ id: params.id }} />
    </div>
  );
}
