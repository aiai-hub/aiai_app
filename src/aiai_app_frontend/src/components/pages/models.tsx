import { Search } from "lucide-react";
import { Input } from "../ui/input";

import { textOurfeature } from "@/stores/text-hero";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { CardSpotlight } from "../ui/card-spotlight";
import { Link } from "react-router-dom";
import { aiai_app_backend } from "./../../../../declarations/aiai_app_backend";

import { items } from "@/stores/dummy-card";
import { useEffect, useState } from "react";

interface ModelDetails {
  url: string;
  description: string;
  author: string;
  modelname: string;
}

// Define allModels as an array of tuples [number, ModelDetails]
type ModelTuple = [number, ModelDetails];

const Models = () => {
  // Use the defined tuple type
  let [allModels, setAllModels] = useState<ModelTuple[]>([]);

  async function getAllmodels() {
    const res: any = await aiai_app_backend.readAllModel();

    setAllModels(res);
  }

  useEffect(() => {
    getAllmodels();
  }, []);

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
        {allModels.map((mdl, index) => (
          <Link
            key={mdl[0]}
            to={`/models/details/${mdl[1].modelname}`}
            className="mb-8"
          >
            <CardSpotlight className="h-96 w-96">
              <h1 className="text-xl font-bold relative z-20 mt-2">
                {mdl[1].modelname}
              </h1>
              <p className="text-xl font-normal relative z-20 mt-6 line-clamp-6">
                {mdl[1].description}
              </p>
            </CardSpotlight>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Models;
