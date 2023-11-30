interface ImageInputProps {}

const ImageInput = ({}: ImageInputProps) => {
  return (
    <div className="flex flex-col">
      <label>Photo</label>
      <input
        type="file"
        className="text-ternary border-ternary  w-full  border-2 border-dashed bg-neutral-100 p-2 text-xs focus:outline-none"
        placeholder="John Doe"
      />
      <p className="text-ternary mt-1 text-sm" id="file_input_help">
        SVG, PNG, JPG or GIF (MAX. 800x400px).
      </p>
    </div>
  );
};

export default ImageInput;
