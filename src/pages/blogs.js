import React from "react";
import Link from "next/link";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";

const Blog = ({ blogs }) => {
  const client = createClient({
    projectId: "jwy5pzob",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });

  const builder = imageUrlBuilder(client);

  return (
    <>
      <div>
        {/* ----BreadCrumb---- */}
        <div className="w-full flex items-center justify-center h-[50vh]">
          <h1 className="text-5xl dark:text-white font-bold">
            Blogs
            <br />
            <br />
          </h1>
        </div>
        {/* ----BreadCrumb---- */}
        <div className="bg-white dark:bg-gray-800 w-full h-full min-h-[40vh] px-2 xs:px-8 md:px-10 lg:px-32 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogs.map((item) => {
              return (
                <div key={item.slug.current}>
                  <article className="xsm:w-96 mx-auto md:w-full group cursor-pointer bg-gray-200 dark:bg-gray-900 overflow-hidden rounded-2xl border border-gray-300 dark:border-gray-100/10 shadow-2xl shadow-gray-700/10 p-5 pb-8 space-y-4 hover:shadow-3xl hover:shadow-indigo-600/30 duration-300 ">
                    <div
                      className="h-56 w-full bg-cover rounded-xl border border-black/20 duration-300 group-hover:shadow-xl bg-no-repeat bg-center"
                      style={{
                        backgroundImage: `url(${builder
                          .image(item.blogimage)
                          .width(500)
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
                            <li className="list-disc ml-7 mb-1">{children}</li>
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
      </div>
    </>
  );
};

export default Blog;

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
