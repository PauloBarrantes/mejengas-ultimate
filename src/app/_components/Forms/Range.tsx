"use client";
import { useFormContext } from "react-hook-form";

interface RangeInputProps {
  name: string;
  label: string;
}

const RangeInput = ({ name, label }: RangeInputProps) => {
  const methods = useFormContext(); // retrieve those props
  const value = methods.watch(name);
  const {
    register,
    formState: { errors },
  } = methods;

  console.log("error", errors);

  return (
    <div className="relative col-span-2 row-span-2 flex flex-col">
      <label className="text-ternary">
        {label} {value}
      </label>
      <input type="range" min="0" step="1" max="10" {...register(name)}></input>

      <div className="mt-1">
        <span className="absolute -bottom-4 start-0 font-display text-xs text-gray-400">
          0
        </span>
        <span className="absolute -bottom-4 end-0 font-display text-xs  text-gray-400">
          10
        </span>
      </div>
    </div>
  );
};

export default RangeInput;
