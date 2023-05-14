import { getAbout } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function About() {
  const about = await getAbout();

  return (
    <div className="mt-8 container mx-auto container-max-width">
      {about.map((val) => {
        return (
          <>
            <h1 className="mb-4 text-3xl font-extrabold text-white dark:text-white md:text-5xl lg:text-6xl my-16">
              {val.heading}
            </h1>
            <section className="text-slate-50 text-xl my-10">
              <PortableText value={val.copy} />
            </section>
            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 container-max-width">
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <p className="my-4">{val.description1}</p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                  <img
                    className="rounded-full w-9 h-9"
                    src={val.image1}
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <div>{val.card1name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Developer at Open AI
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <p className="my-4">{val.description2}</p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                  <img
                    className="rounded-full w-9 h-9"
                    src={val.image2}
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <div>{val.card2name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {val.role2}
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <p className="my-4">{val.description3}</p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                  <img
                    className="rounded-full w-9 h-9"
                    src={val.image3}
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <div>{val.card3name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {val.role3}
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Efficient Collaborating
                  </h3>
                  <p className="my-4">
                    You have many examples that can be used to create a fast
                    prototype for your team.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                  <img
                    className="rounded-full w-9 h-9"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <div>Joseph McFall</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      CTO at Google
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </>
        );
      })}
    </div>
  );
}
