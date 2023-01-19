const Card = ({ img, title, excerpt, slug }) => {
  return (
    <article className="group cursor-pointer bg-gray-200 dark:bg-gray-900 overflow-hidden rounded-2xl border border-gray-300 dark:border-gray-100/10 shadow-2xl shadow-gray-700/10 p-5 pb-8 space-y-4 hover:shadow-3xl hover:shadow-indigo-600/30 duration-300">
      <img
        alt="Office"
        src={img}
        className="h-56 w-full object-cover rounded-xl border border-black/20 duration-300 group-hover:shadow-xl"
      />
      <div>
        <a href="#">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white capitalize">
            {title}
          </h3>
        </a>

        <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
          {excerpt}
        </p>

        <a
          href={"/blog/" + slug}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 bg-blue-100 dark:bg-gray-800 px-4 py-3 rounded-lg"
        >
          Find out more
          <span
            aria-hidden="true"
            className="block transition group-hover:translate-x-0.5"
          >
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
};

export default Card;
