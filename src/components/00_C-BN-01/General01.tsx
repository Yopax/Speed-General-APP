import React from "react";
import Recs1 from "./00_01-RCS/Recs1";
import Recs2 from "./00_01-RCS/Recs2";
import Recs3 from "./00_01-RCS/Recs3";

function General01() {
  return (
    <>
      <div className="flex justify-between items-center px-4 h-[20%] bg-[#CDCDCD] text-center">
        <Recs1 />
        <Recs2/>
        <Recs3/>
      </div>
    </>
  );
}

export default General01;
