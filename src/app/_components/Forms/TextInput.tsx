import { useFormContext } from "react-hook-form";
import { cn } from "~/utils/utils";

interface TextInputProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}

const TextInput = ({ name, label, placeholder, required }: TextInputProps) => {
  const methods = useFormContext(); // retrieve those props

  const {
    register,
    formState: { errors },
  } = methods;

  console.log("error", errors);
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className={cn(
          "!focus:border-primary w-full border-2  bg-neutral-100 p-2 text-ternary focus:rounded-none",
          errors[name]?.message !== undefined
            ? "border-red-300"
            : "border-ternary",
        )}
        {...register(name, { required })}
      />

      <p
        className={cn(
          "mt-1 text-sm text-red-400",
          errors[name]?.message !== undefined ? "visible" : "invisible",
        )}
      >
        {`${errors[name]?.message}`}
      </p>
    </div>
  );
};

export default TextInput;
