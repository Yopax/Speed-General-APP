import General01 from "@/components/00_C-BN-01/General01";
import General02 from "@/components/01_C-BN-02/General02";
import General03 from "@/components/03_BN-DG/General03";
import General04 from "@/components/04_BN-DE/General04";
import General05 from "@/components/05_LN/General05";
import General06 from "@/components/06_C-BN-03/General06";

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen">
        <div className="h-[20%]">
          <General01 />
          <General02 />
        </div>
        <div className="flex-col h-[80%]">
          <div className="flex h-[95%]">
            <General03 />
            <General05 />
            <General04 />
          </div>
          <div className="h-[5%]">
            <General06 />
          </div>
        </div>
      </main>
    </>
  );
}
