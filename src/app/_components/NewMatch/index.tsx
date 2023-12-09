import { motion } from "framer-motion";
import { cn } from "~/utils/utils";

interface NewMatchProps {
  id: string;
}

const NewMatch = ({ id }: NewMatchProps) => {
  return (
    <motion.div
      layoutId={id}
      className="col-span-4 row-span-6 flex flex-col justify-between rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 transition-all"
    >
      <h1
        className={cn(
          "font-display text-2xl font-bold leading-relaxed tracking-wide",
        )}
      >
        New Match
      </h1>
      <h1>hola</h1>
      <div className={cn("flex justify-end")}>
        <button className="border-2 border-ternary bg-neutral-100 px-5 py-2 tracking-wide shadow-primary transition-shadow hover:shadow-primary-hover ">
          Create Match
        </button>
      </div>
    </motion.div>
  );
};

export default NewMatch;
