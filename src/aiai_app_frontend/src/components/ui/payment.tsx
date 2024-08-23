import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/lib/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { aiai_app_backend } from "./../../../../declarations/aiai_app_backend";

export function DrawerDialogPayment() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="mt-5 w-2/4 py-5 bg-primary" variant="default">
            Buy
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] py-20">
          <DialogHeader>
            <DialogTitle>Payment</DialogTitle>
            <DrawerDescription>
              Get your AI model after payment
            </DrawerDescription>
          </DialogHeader>
          <PaymentForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="mt-5 w-2/4 py-5 bg-primary" variant="default">
          Buy
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Pay Here</DrawerTitle>
          <DrawerDescription>Get your AI model after payment</DrawerDescription>
        </DrawerHeader>
        <PaymentForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

const PaymentForm = ({ className }: React.ComponentProps<"form">) => {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label className="ps-3" htmlFor="identity">
          Principal
        </Label>
        <Input id="identity" className="" placeholder="Enter your Principal" />
      </div>
      <Button type="submit">Pay</Button>
    </form>
  );
};
