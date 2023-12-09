import React from "react";
import Image from "next/image";
import playerCard from "../../../../public/images/playerCard.svg";
import avatar from "../../../../public/images/avatar.png";

interface BadgeProps {
  fullName: string;
  physicalCondition: number;
  passes: number;
  power: number;
  dribbling: number;
  speed: number;
}

const Badge = ({
  fullName,
  physicalCondition,
  passes,
  power,
  dribbling,
  speed,
}: BadgeProps) => {
  return (
    <div className="relative self-center align-middle">
      <Image src={playerCard} alt="Player Badge" width={200} height={100} />
      <Image
        src={avatar}
        alt="Player Avatar"
        width={200}
        height={200}
        className="absolute left-0 top-[40px]"
      />
      <p className="absolute bottom-[82px] left-[5px] w-[200px] overflow-hidden text-ellipsis whitespace-nowrap text-center font-display text-xl font-bold">
        {fullName}
      </p>
      <p className="absolute bottom-[58px] left-[5px]">PHC</p>
      <p className="absolute bottom-[58px] left-[45px]">PAS</p>
      <p className="absolute bottom-[58px] left-[80px]">POW</p>
      <p className="absolute bottom-[58px] left-[125px]">DRB</p>
      <p className="absolute bottom-[58px] left-[165px]">SPE</p>
      {/* Points */}
      <p className="absolute bottom-[38px] left-[18px] font-display font-bold">
        {physicalCondition}
      </p>
      <p className="absolute bottom-[38px] left-[55px] font-display font-bold">
        {passes}
      </p>
      <p className="absolute bottom-[38px] left-[95px] font-display font-bold">
        {power}
      </p>
      <p className="absolute bottom-[38px] left-[135px] font-display font-bold">
        {dribbling}
      </p>
      <p className="absolute bottom-[38px] left-[173px] font-display font-bold">
        {speed}
      </p>
    </div>
  );
};

export default Badge;
