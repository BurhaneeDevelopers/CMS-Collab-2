import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";

export default function Home({ blogs }) {
  const [menu, setmenu] = useState(0);
  const togglemenu = () => setmenu(!state);

  const client = createClient({
    projectId: "jwy5pzob",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });

  const builder = imageUrlBuilder(client);
  return (
    <>
      <Head>
        <title>Blogilicious</title>
        <meta
          name="description"
          content="Blog Created by Mustryy.com and Taheridevelopers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero section  */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 pt-32 lg:flex-col lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl lg:text-6xl">
              Understand User Flow.
              <span className="sm:block"> Increase Conversion. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed text-black dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="rounded-full bg-gradient-to-r hover:bg-gradient-to-l from-indigo-600 to-cyan-600 px-10 py-4 text-md font-medium text-white shadow"
                href="/get-started"
              >
                Get Started
              </a>
            </div>
          </div>
          <img
            src="/ss.png"
            className="mt-20 sm:w-5/6 mx-auto rounded-2xl shadow-2xl transition-all duration-300 ease-in-out hover:shadow-indigo-600/50 border border-white/20"
          />

          {/* ----Blog part---- */}
          <div className="w-full h-full min-h-[40vh] py-20 mt-10">
            <div class="text-center">
              <h2 class="text-3xl font-semibold text-gray-800 capitalize lg:text-5xl dark:text-white">
                Explore our{" "}
                <code className="lowercase bg-slate-300 dark:bg-slate-800 rounded-lg px-1">
                  latest
                </code>{" "}
                blogs
              </h2>

              <p class="max-w-lg mx-auto mt-4 text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
              {blogs.map((item) => {
                return (
                  <div key={item.slug.current}>
                    <article className="xsm:w-96 mx-auto md:w-full group cursor-pointer bg-gray-200 dark:bg-gray-900 overflow-hidden rounded-2xl border border-gray-300 dark:border-gray-100/10 shadow-2xl shadow-gray-700/10 p-5 pb-8 space-y-4 hover:shadow-3xl hover:shadow-indigo-600/30 duration-300 ">
                      <div
                        className="h-56 w-full bg-cover rounded-xl border border-black/20 duration-300 group-hover:shadow-xl bg-no-repeat bg-center"
                        style={{
                          backgroundImage: `url(${builder
                            .image(item.blogimage)
                            .width(1000)
                            .url()})`,
                        }}
                      ></div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white capitalize">
                          {/* {title} */}
                          {item.title}
                        </h3>

                        <PortableText
                          content={item.content}
                          projectId="jwy5pzob"
                          dataset="production"
                          className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3"
                          serializers={{
                            h1: (props) => <h1 {...props} />,
                            li: ({ children }) => (
                              <li className="list-disc ml-7 mb-1">
                                {children}
                              </li>
                            ),
                          }}
                        />

                        <Link
                          href={"/blog/" + item.slug.current}
                          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 bg-blue-100 dark:bg-gray-800 px-4 py-3 rounded-lg"
                        >
                          Find out more
                          <span
                            aria-hidden="true"
                            className="block transition group-hover:translate-x-0.5"
                          >
                            &rarr;
                          </span>
                        </Link>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
          {/* ----Blog part---- */}
        </div>
      </section>
      {/* Contact form part  */}
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
      {/* Contact form part  */}
    </>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "jwy5pzob",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const query = `*[_type == "blog"][0..5]`;
  const blogs = await client.fetch(query);
  return {
    props: {
      blogs,
    },
  };
}
