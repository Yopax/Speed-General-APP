import React from "react";
import { FcAddDatabase } from "react-icons/fc";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function AnaTool1() {
  return (
    <>
      <Dialog>
        <DialogTrigger className="flex flex-col border-r  items-center justify-center h-[70px] w-[70px] ">
          <div className="content-between h-full w-full">
            <div className="flex items-center justify-center hover:bg-[#B1D3F2] h-[70%]">
              <FcAddDatabase className="text-3xl" />
            </div>
            <div className="flex text-center border-y shadow-md justify-center h-[30%] text-[8px] items-center">
              Datos Generales
            </div>
          </div>

        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AnaTool1;
