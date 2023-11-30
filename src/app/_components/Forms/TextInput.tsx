const TextInput = () => {
  return (
    <div className="flex flex-col">
      <label>FullName</label>
      <input
        type="text"
        className="text-ternary border-ternary !focus:border-primary w-full border-2 bg-neutral-100 p-2 focus:rounded-none"
        placeholder="John Doe"
      />
    </div>
  );
};

export default TextInput;
