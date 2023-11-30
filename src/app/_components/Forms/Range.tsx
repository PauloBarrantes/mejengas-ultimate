interface RangeInputProps {}

const RangeInput = ({}: RangeInputProps) => {
  return (
    <div className="relative col-span-2 row-span-2 flex flex-col">
      <label>Speed</label>
      <input
        type="range"
        min="0"
        step="1"
        max="10"
        className="text-ternary bg-primary border-ternary !focus:border-primary w-full border-2 bg-neutral-100 focus:rounded-none"
        placeholder="John Doe"
      ></input>
      <span className="text-ternary font-display absolute -bottom-4 start-0 text-xs">
        1
      </span>
      <span className="text-ternary font-displayabsolute -bottom-4 start-1/2 -translate-x-1/2 text-xs ">
        5
      </span>
      <span className="text-ternary font-display absolute -bottom-4 end-0 text-xs">
        10
      </span>
    </div>
  );
};

export default RangeInput;
