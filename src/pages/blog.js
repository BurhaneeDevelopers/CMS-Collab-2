import dynamic from "next/dynamic";
import Link from "next/link";
// const Card = dynamic(() => import("./blog/components/card"));

const blog = () => {
  return (
    <>
      <div>
        <div className="w-full flex items-center justify-center h-[50vh]">
          <h1 className="text-5xl dark:text-white font-bold">
            Blogs
            <br />
            <br />
          </h1>
        </div>
        <div className="bg-white dark:bg-gray-800 w-full h-full min-h-[40vh] px-8 md:px-32 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <article className="group cursor-pointer bg-gray-200 dark:bg-gray-900 overflow-hidden rounded-2xl border border-gray-300 dark:border-gray-100/10 shadow-2xl shadow-gray-700/10 p-5 pb-8 space-y-4 hover:shadow-3xl hover:shadow-indigo-600/30 duration-300">
              <img
                alt="Office"
                // src={img}
                src="https://static.toiimg.com/photo/msid-95397427,width-96,height-65.cms"
                className="h-56 w-full object-cover rounded-xl border border-black/20 duration-300 group-hover:shadow-xl"
              />
              <div>
                <a href="#">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white capitalize">
                    {/* {title} */}
                    lorem ispum dolor sit amet.
                  </h3>
                </a>

                <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  {/* {excerpt} */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  hic quidem ducimus quas, labore architecto id libero dolore
                  voluptatum animi beatae ab perferendis commodi tempore?
                </p>

                <Link
                  // href={"/blog/" + slug}
                  href={"/blog/singlepage"}
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
            {/* <Card
              img={
                "https://static.toiimg.com/photo/msid-95397427,width-96,height-65.cms"
              }
              title={"lorem ispum dolor sit amet."}
              excerpt={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic quidem ducimus quas, labore architecto id libero dolore voluptatum animi beatae ab perferendis commodi tempore?"
              }
              slug={"random-slug"}
            />
            <Card
              img={
                "https://static.toiimg.com/photo/msid-95397427,width-96,height-65.cms"
              }
              title={"lorem ispum dolor sit amet."}
              excerpt={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic quidem ducimus quas, labore architecto id libero dolore voluptatum animi beatae ab perferendis commodi tempore?"
              }
              slug={"random-slug"}
            />
            <Card
              img={
                "https://static.toiimg.com/photo/msid-95397427,width-96,height-65.cms"
              }
              title={"lorem ispum dolor sit amet."}
              excerpt={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic quidem ducimus quas, labore architecto id libero dolore voluptatum animi beatae ab perferendis commodi tempore?"
              }
              slug={"random-slug"}
            />
            <Card
              img={
                "https://static.toiimg.com/photo/msid-95397427,width-96,height-65.cms"
              }
              title={"lorem ispum dolor sit amet."}
              excerpt={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic quidem ducimus quas, labore architecto id libero dolore voluptatum animi beatae ab perferendis commodi tempore?"
              }
              slug={"random-slug"}
            />
            <Card
              img={
                "https://static.toiimg.com/photo/msid-95397427,width-96,height-65.cms"
              }
              title={"lorem ispum dolor sit amet."}
              excerpt={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic quidem ducimus quas, labore architecto id libero dolore voluptatum animi beatae ab perferendis commodi tempore?"
              }
              slug={"random-slug"}
            />
            <Card
              img={
                "https://static.toiimg.com/photo/msid-95397427,width-96,height-65.cms"
              }
              title={"lorem ispum dolor sit amet."}
              excerpt={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic quidem ducimus quas, labore architecto id libero dolore voluptatum animi beatae ab perferendis commodi tempore?"
              }
              slug={"random-slug"}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default blog;
