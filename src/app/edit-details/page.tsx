"use client";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Card, Divider, TextInput, NumberInput } from "@tremor/react";
import Image from "next/image";
import { changeUserDetails } from "../api/changeUser";
import { delay } from "framer-motion";

function Page() {
  const [age, setAge] = useState("");
  const [userClass, setUserClass] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Validate form input (you can add more validation logic here)

    // Call the changeUserDetails function
    const updatedUser = await changeUserDetails(parseInt(age), userClass);

    if (updatedUser) {
      // Handle success (e.g., show a success message)
      console.log("User details updated successfully!");
      router.push("/dashboard");
    } else {
      // Handle error (e.g., show an error message)
      console.error("Error updating user details.");
    }
  };

  return (
    <div>
      <div className="grid gap-3 md:grid-cols-2">
        <Card>
          <p>This Information Helps Us Better Your Experience</p>
          <Divider />
          <div className="sm:mx-auto sm:max-w-2xl">
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="mb-3">
                <label htmlFor="age">Age</label>
                <NumberInput
                  id="age"
                  name="age"
                  placeholder="Enter your age"
                  autoComplete="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>
              <div className="">
                <label htmlFor="userClass">Class</label>
                <TextInput
                  type="text"
                  id="userClass"
                  name="userClass"
                  placeholder="Enter a valid class"
                  autoComplete="first-name"
                  value={userClass}
                  onChange={(e) => setUserClass(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </Card>
        <Image
          src="/Eddie/eddieLove.png"
          className="my-10 ml-16"
          width={300}
          height={300}
          alt="Eddie"
        />
      </div>
    </div>
  );
}

export default Page;
