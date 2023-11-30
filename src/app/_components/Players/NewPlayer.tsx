import React from "react";
import { cn } from "~/utils/utils";
import Image from "next/image";
import TeamLogo from "../../../../public/images/playerCard.svg";
import TextInput from "../Forms/TextInput";
import ImageInput from "../Forms/ImageInput";
import RangeInput from "../Forms/Range";

interface NewPlayerProps {
  open: boolean;
}

const NewPlayer = ({ open }: NewPlayerProps) => {
  return (
    <React.Fragment>
      <div>
        <h1
          className={cn(
            "font-display text-2xl font-bold leading-relaxed tracking-wide",
            open ? "block" : "hidden",
          )}
        >
          New Player
        </h1>
        <div className={cn("mt-5 flex-row", open ? "flex" : "hidden")}>
          <div>
            <Image src={TeamLogo} alt="First Team" width={200} height={100} />
          </div>
          <form className="mx-5 grid flex-grow grid-cols-2 gap-5 px-5">
            <TextInput />
            <ImageInput />
            <RangeInput />
            <RangeInput />
            <RangeInput />
            <RangeInput />
            <RangeInput />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewPlayer;
