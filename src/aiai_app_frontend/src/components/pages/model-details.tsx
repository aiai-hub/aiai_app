import { useParams } from "react-router-dom";

import { items } from "@/stores/dummy-card";
import { TracingBeam } from "../ui/tracking-bean";

const ModelDetails = () => {
  const { id } = useParams<{ id: string }>();
  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return <div>Item not found!</div>;
  }

  return (
    <div className="md:container px-4 my-16 h-[90vh]">
      <TracingBeam className="px-6">
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
                  {item.name}
                </h1>

                <p className="text-md font-normal tracking-wider mb-4">
                  tag line disini blablablablabla
                </p>
              </div>
            </div>

            <div className="mt-16 mb-7 border-b-2">
              <h1 className="text-3xl font-bold mb-4 tracking-widest">
                About Models
              </h1>
            </div>

            <p className="text-sm prose prose-sm dark:prose-invert">
              {item.description} Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Vitae sed similique ratione? Perspiciatis autem
              ut incidunt sed nulla architecto officia corrupti fugit deserunt
              excepturi tenetur perferendis, exercitationem totam vitae ex
              minima dolorum harum? Vel, labore.
            </p>
          </div>
        </div>
      </TracingBeam>
    </div>
  );
};

export default ModelDetails;
