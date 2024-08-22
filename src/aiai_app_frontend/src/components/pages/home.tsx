import { TextGenerateEffect } from "../ui/text-generate-effect";
import { CardSpotlight } from "../ui/card-spotlight";

import {
  textGenerate,
  textfeature,
  textTagline,
  texttestimonial,
} from "@/stores/text-hero";
import { testimonials } from "@/stores/testimonials";
import { Link } from "react-router-dom";
import { InfiniteMovingCards } from "../ui/infinity-moving-card";
import { Button } from "../ui/button";

const Home = () => {
  return (
    <div className="md:container px-4">
      <div className="relative md:h-[90vh] flex flex-col md:flex-row items-center">
        <div className="md:basis-[40%]">
          <TextGenerateEffect words={textGenerate} />
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          accusamus repellat assumenda! Eum velit cumque doloremque ex similique
          porro molestiae, ipsum provident? Id laudantium repellendus veniam
          quaerat enim corporis laborum.
        </p>
      </div>

      <div className=" mt-52 mb-28">
        <div className="flex justify-between items-center">
          <TextGenerateEffect className="mb-12" words={textfeature} />

          <Link to="/featured">
            <Button
              size="default"
              className="me-14 text-white px-10 py-6 font-normal leading-4 tracking-wider text-lg"
            >
              See More
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/" className="mb-8">
            <CardSpotlight className="h-96 w-96">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Authentication steps
              </p>
            </CardSpotlight>
          </Link>

          <Link to="/about" className="mb-8">
            <CardSpotlight className="h-96 w-96">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Authentication steps
              </p>
            </CardSpotlight>
          </Link>

          <Link to="/" className="mb-8">
            <CardSpotlight className="h-96 w-96">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Authentication steps
              </p>
            </CardSpotlight>
          </Link>

          <Link to="/" className="mb-8">
            <CardSpotlight className="h-96 w-96">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Authentication steps
              </p>
            </CardSpotlight>
          </Link>

          <Link to="/" className="mb-8">
            <CardSpotlight className="h-96 w-96">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Authentication steps
              </p>
            </CardSpotlight>
          </Link>
        </div>

        <div className="mt-24 h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <TextGenerateEffect className="mb-12" words={texttestimonial} />

          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
