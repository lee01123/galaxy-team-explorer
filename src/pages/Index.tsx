import { EmployeeGalaxy } from "@/components/EmployeeGalaxy";
import { GalaxyHeader } from "@/components/GalaxyHeader";
import { GalaxyInstructions } from "@/components/GalaxyInstructions";

const Index = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <GalaxyHeader />
      <EmployeeGalaxy />
      <GalaxyInstructions />
    </div>
  );
};

export default Index;
