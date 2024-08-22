import { Search } from "lucide-react";
import { Input } from "../ui/input";

import { textOurfeature } from "@/stores/text-hero";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { CardSpotlight } from "../ui/card-spotlight";
import { Link } from "react-router-dom";

import { items } from "@/stores/dummy-card";

const Models = () => {
  return (
    <div className="md:container px-4">
      <div className="mt-16">
        <TextGenerateEffect
          className="mt-10 mb-8 text-center"
          words={textOurfeature}
        />
      </div>
      <div className="mt-5">
        <div className="relative mx-auto  md:grow-0">
          <Search className="absolute left-[195px] top-[22px] h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-3/4 mx-auto rounded- rounded-full bg-background pl-14 py-7"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 mb-24">
        {items.map((mdl) => (
          <Link to={`/models/details/${mdl.id}`} className="mb-8">
            <CardSpotlight className="h-96 w-96">
              <h1 className="text-xl font-bold relative z-20 mt-2 text-white">
                {mdl.name}
              </h1>
              <p className="text-xl font-normal relative z-20 mt-2 text-white">
                {mdl.description}
              </p>
            </CardSpotlight>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Models;
