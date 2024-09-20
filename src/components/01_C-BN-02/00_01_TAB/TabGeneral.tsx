import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Analisis from "./01_02_Secciones/Analisis";

function TabGeneral() {
  return (
    <>
      <Tabs defaultValue="account" className="w-[100%]">
        <TabsList>
          <TabsTrigger value="Configuracion">Configuracion</TabsTrigger>
          <TabsTrigger value="Programación">Programación</TabsTrigger>
          <TabsTrigger value="Metrado">Metrado</TabsTrigger>
          <TabsTrigger value="Presupuesto">Presupuesto</TabsTrigger>
          <TabsTrigger value="Analisis">Estructural</TabsTrigger>
        </TabsList>
        <TabsContent value="Configuracion">
          Make changes to your Configuracion here.
        </TabsContent>
        <TabsContent value="Programación">
          Change your Programación here.
        </TabsContent>
        <TabsContent value="Metrado">
          Change your Metrado here.
        </TabsContent>
        <TabsContent value="Presupuesto">
          Change your Presupuesto here.
        </TabsContent>
        <TabsContent value="Analisis">
          <Analisis />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default TabGeneral;
