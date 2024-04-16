import React from "react";
import Navbar from "../../_components/sign";
import CourseGen from "../../_components/CourseGen";

export default function page({ id }) {
  return (
    <div>
      <Navbar />
      <CourseGen id={id} />
    </div>
  );
}
