import { useParams } from "react-router-dom";

import { TracingBeam } from "../ui/tracking-bean";
import { Button } from "../ui/button";

import { aiai_app_backend } from "./../../../../declarations/aiai_app_backend";
import { useEffect, useState } from "react";

interface ModelDetails {
  url: string;
  description: string;
  author: string;
  modelname: string;
}

// Define allModels as an array of tuples [number, ModelDetails]
type ModelTuple = [number, ModelDetails];

import { DrawerDialogPayment } from "../ui/payment";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

const ModelDetails = () => {
  const { id } = useParams<{ id: any }>();
  const [url, setUrl] = useState("");

  // Use the defined tuple type
  let [allModels, setAllModels] = useState<ModelTuple[]>([]);

  async function getAllmodels() {
    const res: any = await aiai_app_backend.readAllModel();

    setAllModels(res);
  }

  async function getUrl() {
    allModels.map((mdl, index) => {
      if (mdl[1].modelname == id) {
        setUrl(mdl[1].url);
      }
    });
  }

  useEffect(() => {
    getAllmodels();
  }, []);

  return (
    <div className="md:container px-4 my-16 h-[90vh]">
      {allModels.map((mdl, index) =>
        mdl[1].modelname == id ? (
          <TracingBeam key={index} className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              <div className="mb-10">
                <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                  <div className="basis-[35%]">
                    <img
                      src="/images/hero-image.png"
                      alt="Models Details"
                      className="h-full w-full rounded-2xl shadow-lg shadow-slate-800 mb-10 object-cover"
                    />
                  </div>

                  <div className="basis-[65%] flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-4 tracking-widest">
                      {mdl[1].modelname}
                    </h1>

                    <p className="text-md font-normal tracking-wider mb-4">
                      {mdl[1].author}
                    </p>
                  </div>
                </div>

                <div className="mt-16 mb-7 border-b-2">
                  <h1 className="text-3xl font-bold mb-4 tracking-widest">
                    About Models
                  </h1>
                </div>

                <p className="text-sm prose prose-sm dark:prose-invert">
                  {mdl[1].description}
                </p>

                <div className="flex items-center gap-10 mt-10 mb-3 border-t-2 py-3">
                  <Button className="px-10 py-6 text-lg" onClick={getUrl}>
                    Get url
                  </Button>

                  <div className="w-3/4">
                    <Label className="mb-2 ps-3">Copy Endpoint Below: </Label>
                    <Input className="w-full py-6 ps-5" defaultValue={url} />
                  </div>
                </div>
              </div>
            </div>
          </TracingBeam>
        ) : (
          <div className="" key={index}></div>
        )
      )}
    </div>
  );
};

export default ModelDetails;
