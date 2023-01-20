import React from "react";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";

const Slug = ({ blog }) => {
  const client = createClient({
    projectId: "jwy5pzob",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });

  const builder = imageUrlBuilder(client);
  return (
    <>
      <section>
        <div className="w-full flex items-center justify-center h-[50vh] mb-10">
          <h1 className="text-5xl dark:text-white font-bold">{blog.title}</h1>
        </div>
        <div className="bg-white dark:bg-gray-900 px-7 sm:px-0 xl:px-28">
          <div className="container sm:px-6 py-10 mx-auto">
            <div className="lg:flex lg:-mx-6">
              <div className="lg:w-3/4 lg:px-6">
                <div
                  className="bg-cover bg-center w-full h-80 xl:h-[28rem] rounded-xl"
                  style={{
                    backgroundImage: `url(${builder
                      .image(blog.blogimage)
                      .width(2000)
                      .url()})`,
                  }}
                ></div>

                <div>
                  <p className="mt-6 text-sm text-blue-500 uppercase">
                    {blog.category}
                  </p>

                  <h1 className="max-w-lg mt-4 text-3xl xs:text-4xl font-semibold leading-tight text-gray-800 dark:text-white">
                    {blog.title}
                  </h1>

                  <PortableText
                    className="dark:text-white my-3 text-sm xs:text-md"
                    content={blog.content}
                    projectId="r6hwcp84"
                    dataset="production"
                    serializers={{
                      h1: (props) => (
                        <h1
                          style={{
                            marginTop: "1rem ",
                            marginBottom: "0.1rem",
                            fontSize: "2.3rem",
                            fontWeight: "bold",
                          }}
                          {...props}
                        />
                      ),
                      h2: (props) => (
                        <h2
                          style={{
                            marginTop: "1rem ",
                            marginBottom: "0.1rem",
                            fontSize: "1.9rem",
                            fontWeight: "bold",
                          }}
                          {...props}
                        />
                      ),
                      h3: (props) => (
                        <h3
                          style={{
                            marginTop: "1rem",
                            marginBottom: "0.1rem",
                            fontSize: "1.6rem",
                            fontWeight: "bold",
                          }}
                          {...props}
                        />
                      ),
                      h4: (props) => (
                        <h4
                          style={{
                            marginTop: "1rem ",
                            marginBottom: "0.1rem",
                            fontSize: "1.4rem",
                            fontWeight: "bold",
                          }}
                          {...props}
                        />
                      ),
                      h5: (props) => (
                        <h5
                          style={{
                            marginTop: "1rem ",
                            marginBottom: "0.1rem",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                          }}
                          {...props}
                        />
                      ),
                      h6: (props) => (
                        <h6
                          style={{
                            marginTop: "1rem ",
                            marginBottom: "0.1rem",
                            fontSize: "1rem",
                            fontWeight: "bold",
                          }}
                          {...props}
                        />
                      ),
                      li: ({ children }) => (
                        <li className="list-disc ml-7 mb-1">{children}</li>
                      ),
                      a: ({ children }) => (
                        <a className="underline text-indigo-500">{children}</a>
                      ),
                    }}
                  />

                  <div className="flex items-center mt-6">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        Amelia. Anderson
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Lead Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
                <h2 className="text-gray-100 capitalize text-2xl mb-5 border-b border-white w-1/2">
                  Key Points:
                </h2>
                <div>
                  <h3 className="text-blue-500 capitalize">Design instument</h3>

                  <a
                    href="#"
                    className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                  >
                    How to raise $100k+ by using blox ui kit on your design
                  </a>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <div>
                  <h3 className="text-blue-500 capitalize">UI Resource</h3>

                  <a
                    href="#"
                    className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                  >
                    Should you creat UI Product by using Blox?
                  </a>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <div>
                  <h3 className="text-blue-500 capitalize">
                    Premium Collection
                  </h3>

                  <a
                    href="#"
                    className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                  >
                    Top 10 Blocks you can get on Blox&apos;s collection.
                  </a>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <div>
                  <h3 className="text-blue-500 capitalize">Premium kits</h3>

                  <a
                    href="#"
                    className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                  >
                    Top 10 Ui kit you can get on Blox&apos;s collection.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----Related Blogs----- */}
        <section className="bg-white dark:bg-gray-900 px-7 sm:px-0 xl:px-28">
          <div className="container sm:px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              Explore our{" "}
              <code className="lowercase bg-slate-800 rounded-md px-1">
                related
              </code>{" "}
              blogs
            </h1>

            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
              <div className="lg:flex">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    How to use sticky note for problem solving
                  </a>

                  <span className="text-sm text-gray-500 dark:text-indigo-500">
                    On: 20 October 2019
                  </span>
                </div>
              </div>

              <div className="lg:flex">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    How to use sticky note for problem solving
                  </a>

                  <span className="text-sm text-gray-500 dark:text-indigo-500">
                    On: 20 October 2019
                  </span>
                </div>
              </div>

              <div className="lg:flex">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    Morning routine to boost your mood
                  </a>

                  <span className="text-sm text-gray-500 dark:text-indigo-500">
                    On: 25 November 2020
                  </span>
                </div>
              </div>

              <div className="lg:flex">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
                  alt=""
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    All the features you want to know
                  </a>

                  <span className="text-sm text-gray-500 dark:text-indigo-500">
                    On: 30 September 2020
                  </span>
                </div>
              </div>

              <div className="lg:flex">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80"
                  alt=""
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    Minimal workspace for your inspirations
                  </a>

                  <span className="text-sm text-gray-500 dark:text-indigo-500">
                    On: 13 October 2019
                  </span>
                </div>
              </div>

              <div className="lg:flex">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    What do you want to know about Blockchane
                  </a>

                  <span className="text-sm text-gray-500 dark:text-indigo-500">
                    On: 20 October 2019
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* -----Related Blogs----- */}
      </section>

      {/* ---contact-form--- */}
      <section className="">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-lg">
            <h2 class="text-3xl font-semibold text-gray-800 capitalize lg:text-5xl dark:text-white text-center">
              Dont be{" "}
              <code className="lowercase bg-slate-300 dark:bg-slate-800 rounded-lg px-1">
                left
              </code>{" "}
              out !
            </h2>

            <p class="mx-auto mt-4 max-w-md text-center text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati sunt dolores deleniti inventore quaerat mollitia?
            </p>

            <form
              action=""
              class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl hover:shadow-indigo-600/10 duration-300"
            >
              <p class="text-lg font-medium text-gray-100">
                Sign in to your account
              </p>

              <div>
                <label for="email" class="text-sm font-medium text-gray-200">
                  Email
                </label>

                <div class="relative mt-1">
                  <input
                    type="email"
                    id="email"
                    class="w-full rounded-lg border border-gray-300 p-4 pr-12 text-sm shadow-sm bg-transparent"
                    placeholder="Enter email"
                  />

                  <span class="absolute inset-y-0 right-4 inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label for="password" class="text-sm font-medium text-gray-200">
                  Password
                </label>

                <div class="relative mt-1">
                  <input
                    type="password"
                    id="password"
                    class="w-full rounded-lg border border-gray-300 p-4 pr-12 text-sm shadow-sm bg-transparent"
                    placeholder="Enter password"
                  />

                  <span class="absolute inset-y-0 right-4 inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="w-1/2 mx-auto">
                <button
                  type="submit"
                  class="block w-full rounded-full hover:bg-gradient-to-r from-indigo-600 to-cyan-600 border border-indigo-700 px-5 py-3 text-sm font-medium text-white"
                >
                  Sign in
                </button>
              </div>

              <p class="text-center text-sm text-gray-500">
                No account?
                <a class="underline" href="">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
      {/* ----contact-form---- */}
    </>
  );
};

export default Slug;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const client = createClient({
    projectId: "jwy5pzob",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const query = `*[_type == "blog" && slug.current == '${slug}'] [0]`;
  const blog = await client.fetch(query);
  return {
    props: {
      blog,
    },
  };
};
