import Image from "next/image";
import TeamLogo from "../../../public/images/team.png";
interface LastMatchProps {}

const LastMatch = ({}: LastMatchProps) => {
  return (
    <div
      className={`col-span-8 row-span-4 flex flex-row justify-between rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 `}
    >
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="font-display text-ternary text-4xl font-bold leading-relaxed tracking-wide">
            Last Match
          </h1>
          <p>Date: 28/11/2023</p>
        </div>
        <div className="relative">
          <button className="border-ternary shadow-secondary hover:shadow-secondary-hover border-2 bg-neutral-100 px-5 py-2 tracking-wide transition-shadow ">
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
    </div>
  );
};

export default LastMatch;
