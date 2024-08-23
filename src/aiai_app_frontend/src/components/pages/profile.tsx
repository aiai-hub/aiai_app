import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { items } from "@/stores/dummy-card";
import { Link } from "react-router-dom";
import { CardSpotlight } from "../ui/card-spotlight";
import { RocketIcon } from "lucide-react";

import { aiai_app_backend } from "../../../../declarations/aiai_app_backend";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Profile = () => {
  const [modelname, setModelname] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [modelId, setModelId] = React.useState<number | null>(null);
  const [alert, setAlert] = React.useState<{
    type: string;
    message: string;
  } | null>(null);

  const createModel = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newModel = {
      modelname,
      url,
      author,
      description,
    };

    try {
      const res = await aiai_app_backend.createModel(newModel);

      setModelId(res);

      setModelname("");
      setAuthor("");
      setUrl("");
      setDescription("");
    } catch (error) {
      console.error("Failed to create model", error);
    }

    const data = JSON.stringify(newModel);

    console.log("ini data: ", data);
    return data;
  };

  return (
    <div className="md:container px-4 mt-5 mb-20">
      <div className="w-full ">
        <div className="relative h-36 w-full overflow-hidden rounded-lg sm:h-44 md:h-64 xl:h-80 2xl:h-96 3xl:h-[448px]">
          <img
            src="/images/banner-profile.jpg"
            className="h-full w-full object-cover"
            alt="Cover Image"
          />
        </div>
        <div className="mx-auto flex w-full shrink-0 flex-col md:px-4 xl:px-6 3xl:max-w-[1700px] 3xl:px-12 mb-[3rem]">
          <Avatar className="border w-44 h-44 -mt-[6rem] sm:-mt-14 md:mx-0 xl:mx-0">
            <AvatarImage
              className="object-cover"
              src="/images/avatar.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <Tabs defaultValue="collection" className="w-full">
          <TabsList className="grid w-2/4 grid-cols-2">
            <TabsTrigger value="collection">Collections</TabsTrigger>
            <TabsTrigger value="news">Create New</TabsTrigger>
          </TabsList>
          <TabsContent value="collection">
            <Card className="flex flex-col md:flex-row gap-5 items-center">
              {items.map((mdl) => (
                <Link
                  key={mdl.id}
                  to={`/models/details/${mdl.id}`}
                  className="mb-8 w-full justify-center flex items-center mt-6"
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
            </Card>
          </TabsContent>

          <TabsContent value="news">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make your new Models AI here. Click save when you're done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <form onSubmit={createModel}>
                  {alert && (
                    <Alert>
                      <RocketIcon className="h-4 w-4" />
                      <AlertTitle>
                        {alert.type === "success" ? "Success!" : "Error!"}
                      </AlertTitle>
                      <AlertDescription>{alert.message}</AlertDescription>
                    </Alert>
                  )}
                  <div className="space-y-2">
                    <Label className="ps-3" htmlFor="name">
                      Module Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="AI Name"
                      value={modelname}
                      onChange={(e) => setModelname(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="ps-3" htmlFor="url">
                      URL Name
                    </Label>
                    <Input
                      id="url"
                      type="text"
                      placeholder="https:example-url.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="ps-3" htmlFor="author">
                      Author Name
                    </Label>
                    <Input
                      id="author"
                      type="text"
                      placeholder="Jhon Doe"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="ps-3" htmlFor="desc">
                      Description
                    </Label>
                    <Input
                      id="desc"
                      type="text"
                      placeholder="Description..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  <Button className="mt-5 w-full" type="submit">
                    Create Model
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
