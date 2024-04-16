import {
  ArrowRight,
  Link,
  ScanText,
  Search,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import React from "react";
import Form from "./Form";

const CourseGallery = () => {
  const data = [{}];
  return (
    <div>
      <Form/>
      <section className="bg-white bg-[url('/Hero/bg.jpeg')] dark:bg-gray-900">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Personalized Courses made just for you
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:px-48 lg:text-xl dark:text-gray-200">
            All the best courses in one place!!!
          </p>
        </div>
        {/* <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900"></div> */}
      </section>

      <div className="mx-auto my-5 w-[80%]">
        <div className="my-2 flex-row justify-between md:flex">
          <form className="md:w-[80%]">
            <label
              htmlFor="default-search"
              className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Search
            </label>
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <Search />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full  rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                placeholder="  Search for latest products..."
                required
              />
              <button
                type="submit"
                className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          <div className="flex gap-3 p-5 md:p-1 ">
            <a href="#" className="rounded-full bg-yellow-500 p-3">
              <ShoppingCart />
            </a>
            <a href="#gallery" className="rounded-full bg-yellow-500 p-3">
              <Sparkles />
            </a>
            <a href="/user/scan" className="rounded-full bg-yellow-500 p-3">
              <ScanText />
            </a>
          </div>
        </div>

        <h2 className="pb-1 text-lg font-semibold text-gray-500">Products</h2>
        {/* <div className="grid md:grid-cols-3 gap-3">
          {data?.map((item) => (
            <div
              key={item.id}
              className="relative my-2 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
            >
              <div>
                <img
                  className="mx-auto aspect-square h-auto rounded-t-lg p-1"
                  src={item.picture}
                  alt={item.name}
                />
              </div>
              <div className="absolute w-full bottom-1">
              <div className="px-5 w-full">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                </a>
                <div className="mb-5 mt-1 flex items-center justify-between">
                  <p className="text-3xl font-semibold text-gray-900">
                  ₹{item.cost}
                  </p>
                  <Link
                   href={`/user/${item.id}`} className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </Link>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div> */}

        {data?.map((item) => (
          <div
            // key={item.id}
            className="group relative w-full max-w-sm rounded-lg bg-white shadow "
          >
            <div>
              <embed
                className="h-full w-full rounded-lg p-1 group-hover:opacity-40"
                // src={item.url}
              />
            </div>
            <span className="absolute right-1 top-1 rounded-l-lg rounded-t-none bg-yellow-500 p-2 px-4 text-sm text-white">
              {/* ₹{item.price} */}
            </span>
            <div className="bottom-1 w-full">
              <div className="w-full px-5">
                <div>
                  {/* <h5 className="flex flex-col text-lg font-semibold tracking-tight group-hover:text-white text-gray-900">
                      {item.name}
                      <span className="text-sm">{item.desc}</span>
                    </h5> */}
                </div>
                <div className="mb-5 mt-1 flex items-center justify-between">
                  <h5 className="flex flex-col text-lg font-semibold tracking-tight text-gray-900">
                    {/* {item.name} */}
                    Hello
                    {/* <span className="text-sm">{item.desc}</span> */}
                  </h5>
                  {/* <p className="text-3xl font-semibold group-hover:text-white text-gray-900">
                      ₹{item.cost}
                    </p> */}
                  <Link
                    // href={`/courses/${item.id}`}
                    className="rounded-full bg-yellow-500 p-3"
                  >
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="my-7">
          <h2 id="gallery" className="pb-4 text-lg font-semibold text-gray-500">
            Latest Products
          </h2>
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="grid gap-4">
              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>

              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>

              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="grid gap-4">
              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>

              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>

              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="grid gap-4">
              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>

              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>

              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="grid gap-4">
              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>

              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>

              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CourseGallery;
