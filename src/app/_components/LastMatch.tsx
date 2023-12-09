import Image from "next/image";
import TeamLogo from "../../../public/images/team.png";
import React from "react";
import { cn } from "~/utils/utils";
import { motion } from "framer-motion";

interface LastMatchProps {
  id: string;
}

const LastMatch = ({ id }: LastMatchProps) => {
  return (
    <motion.div
      layoutId={id}
      className={cn(
        "col-span-8 row-span-4 flex flex-row justify-between rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4",
      )}
    >
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="font-display text-4xl font-bold leading-relaxed tracking-wide text-ternary">
            Last Match
          </h1>
          <p>Date: 28/11/2023</p>
        </div>
        <div className="relative">
          <button className="border-2 border-ternary bg-neutral-100 px-5 py-2 tracking-wide shadow-secondary transition-shadow hover:shadow-secondary-hover ">
            Vote for MVP
          </button>
        </div>
      </div>
      <div className="flex flex-grow justify-end p-2">
        <Image
          src={"/images/team.png"}
          alt="First Team"
          width={200}
          height={100}
        />
        <Image src={TeamLogo} alt="First Team" width={200} height={100} />
      </div>
    </motion.div>
  );
};

export default LastMatch;
