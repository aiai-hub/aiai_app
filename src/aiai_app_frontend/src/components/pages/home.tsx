import { TextGenerateEffect } from "../ui/text-generate-effect";
import { CardSpotlight } from "../ui/card-spotlight";

import { textfeature, textTagline, texttestimonial } from "@/stores/text-hero";
import { testimonials } from "@/stores/testimonials";
import { Link } from "react-router-dom";
import { InfiniteMovingCards } from "../ui/infinity-moving-card";
import { Button } from "../ui/button";
import { Highlight } from "../ui/hilight";

import { items } from "@/stores/dummy-card";

const Home = () => {
  return (
    <>
      <div className="md:container px-4">
        <div className="relative md:h-[90vh] flex flex-col md:flex-row items-center">
          <div className="md:basis-[40%]">
            <p className="ml-2 mb-4">AI & Blockchain</p>
            <h1 className="font-bold dark:text-white text-black md:text-7xl leading-[3rem] tracking-wider">
              Discover the Power of Ready-to-Use <Highlight>DeAI</Highlight> Solutions
            </h1>
          </div>
          <div className="md:basis-[60%] h-full">
            <img
              src="/images/hero-image.png"
              className=" h-full"
              alt="Hero Section"
            />
          </div>
        </div>

        <div className=" mt-52">
          <h1 className="text-center font-semibold tracking-widest text-2xl">
            WHAT WE DO
          </h1>

          <TextGenerateEffect
            className="mt-10 mb-8 text-center"
            words={textTagline}
          />

          <p className="text-center font-normal text-lg w-[85%] mx-auto tracking-widest">
            At aiai, we connect AI developers and businesses on a decentralized platform. Developers can easily sell their AI solutions, while users can discover and buy ready-to-use AI tools tailored to their needs. We simplify the exchange, making AI accessible and empowering innovation across industries.
          </p>
        </div>

        <div className=" mt-52 mb-28">
          <div className="flex justify-between items-center">
            <TextGenerateEffect className="mb-12" words={textfeature} />

            <Link to="/models">
              <Button
                size="default"
                className="me-14 bg-secondary text-black dark:text-white px-10 py-6 font-normal leading-4 tracking-wider text-lg hover:text-secondary"
              >
                See More
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.map((mdl) => (
              <Link
                key={mdl.id}
                to={`/models/details/${mdl.id}`}
                className="mb-8"
              >
                <CardSpotlight className="h-96 w-96">
                  <h1 className="text-xl font-bold relative z-20 mt-2 ">
                    {mdl.name}
                  </h1>
                  <p className="text-xl font-normal relative z-20 mt-2 ">
                    {mdl.description}
                  </p>
                </CardSpotlight>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-32 h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <TextGenerateEffect className="mb-12" words={texttestimonial} />

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
};

export default Home;
