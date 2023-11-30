"use client";
import { useRef, useState } from "react";
import { cn } from "~/utils/utils";
import useDashboardDimensions from "../store/useDashboardDimensions";
import { motion, useAnimationControls } from "framer-motion";
import NewPlayer from "./Players/NewPlayer";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PlayersProps {}

const Players = ({}: PlayersProps) => {
  const [open, setOpen] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const animation = useAnimationControls();

  const [dashboardWidth, dashboardHeight, dashboardX, dashboardY] =
    useDashboardDimensions((state) => [
      state.width,
      state.height,
      state.xPosition,
      state.yPosition,
    ]);
  async function sequence() {
    if (!playerRef.current) return;
    await animation.start(
      {
        transform: `translate(${
          dashboardX - playerRef.current.getBoundingClientRect().x
        }px, ${dashboardY - playerRef.current.getBoundingClientRect().y}px)`,
        width: dashboardWidth,
        height: dashboardHeight,
        padding: "3rem",
      },
      { duration: 0.2 },
    );
  }

  async function closeSequence() {
    await animation.start(
      { width: "100%", height: "100%", padding: "1rem" },
      { duration: 0.3, ease: "linear" },
    );
    if (!playerRef.current) return;
    await animation.start(
      {
        transform: `translate(${
          dashboardX - playerRef.current.getBoundingClientRect().x
        }px, ${dashboardY - playerRef.current.getBoundingClientRect().y}px)`,
      },
      { duration: 0.2, delay: 0.1, ease: "linear" },
    );
  }

  const handleOpen = () => {
    open ? closeSequence() : sequence();
    setOpen(!open);
  };
  return (
    <motion.div
      ref={playerRef}
      animate={animation}
      className={cn(
        `z-10 col-span-3 row-span-2 flex origin-center flex-col justify-between rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 transition-all`,
      )}
    >
      <h1
        className={cn(
          "font-display text-2xl font-bold leading-relaxed tracking-wide",
          open ? "hidden" : "block",
        )}
      >
        {" "}
        Players: {12}
      </h1>
      <NewPlayer open={open} />

      <div className="flex justify-end">
        <button
          onClick={handleOpen}
          className="border-ternary shadow-primary hover:shadow-primary-hover border-2 bg-neutral-100 px-5 py-2 tracking-wide transition-shadow "
        >
          Add Player
        </button>
      </div>
    </motion.div>
  );
};

export default Players;
