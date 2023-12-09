import { useFormContext } from "react-hook-form";
import Badge from "./Badge";

interface BadgeWrapperProps {}

const BadgeWrapper = ({}: BadgeWrapperProps) => {
  const methods = useFormContext(); // retrieve those props
  const name = methods.watch("name");
  const physicalCondition = methods.watch("playerStats.physicalCondition");
  const passes = methods.watch("playerStats.passes");
  const power = methods.watch("playerStats.power");
  const dribbling = methods.watch("playerStats.dribbling");
  const speed = methods.watch("playerStats.speed");

  return (
    <div className="hidden md:flex">
      <Badge
        fullName={name}
        physicalCondition={physicalCondition}
        passes={passes}
        power={power}
        dribbling={dribbling}
        speed={speed}
      />
    </div>
  );
};

export default BadgeWrapper;
