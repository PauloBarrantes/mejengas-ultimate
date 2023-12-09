"use client";
import { cn } from "~/utils/utils";
import { motion } from "framer-motion";
import NewPlayer from "./NewPlayer";
import useDashboard from "../../store/useDashboard";
import { api } from "~/trpc/react";
import { useEffect } from "react";
interface PlayersProps {
  id: string;
}

const Players = ({ id }: PlayersProps) => {
  const { activeWindowId, setFullSize } = useDashboard();
  const open = activeWindowId === id;
  const { data: numbersPlayers, refetch } = api.player.getNumber.useQuery();

  useEffect(() => {
    if (activeWindowId === "") {
      refetch();
    }
  }, [activeWindowId]);
  const handleOpen = () => {
    setFullSize(id);
  };
  return (
    <motion.div
      layoutId={id}
      className={cn(
        `rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4`,
        open ? "col-span-12 row-span-10" : "col-span-4 row-span-2",
      )}
    >
      <h1
        className={cn(
          "font-display text-2xl font-bold leading-relaxed tracking-wide",
          open ? "hidden" : "block",
        )}
      >
        Players: {numbersPlayers}{" "}
      </h1>
      <NewPlayer open={open} />

      <div className={cn("flex justify-end", open ? "hidden" : "flex")}>
        <button
          onClick={handleOpen}
          className="border-2 border-ternary bg-neutral-100 px-5 py-2 tracking-wide shadow-primary transition-shadow hover:shadow-primary-hover "
        >
          Add Player
        </button>
      </div>
    </motion.div>
  );
};

export default Players;
