import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../navbar"));
const Card = dynamic(() => import("./components/card"));

const blog = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="w-full flex items-center justify-center h-[50vh]">
          <h1 className="text-5xl dark:text-white font-bold">
            Blogs
            <br />
            <br />
          </h1>
        </div>
        <div class="bg-white dark:bg-gray-800 w-full h-full min-h-[40vh] px-8 md:px-32 py-20">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
