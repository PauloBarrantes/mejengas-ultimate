"use client";
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "~/utils/utils";
import Players from "~/app/_components/Players";
import LastMatch from "~/app/_components/LastMatch";
import useDashboardDimensions from "../store/useDashboardDimensions";

const Dashboard = () => {
  const dashboardRef = useRef(null);

  const setDimensions = useDashboardDimensions(
    (state: { setDimensions: any }) => state.setDimensions,
  );

  useLayoutEffect(() => {
    if (typeof window === "undefined" || !dashboardRef.current) return;
    setDimensions({
      width: dashboardRef.current["offsetWidth"],
      height: dashboardRef.current["offsetHeight"],
      x: dashboardRef.current["offsetLeft"],
      y: dashboardRef.current["offsetTop"],
    });

    // Handle resizing dashboard
    window.addEventListener("resize", () => {
      if (!dashboardRef.current) return;
      setDimensions({
        width: dashboardRef.current["offsetWidth"],
        height: dashboardRef.current["offsetHeight"],
        x: dashboardRef.current["offsetLeft"],
        y: dashboardRef.current["offsetTop"],
      });
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [setDimensions]);

  return (
    <motion.div
      ref={dashboardRef}
      layout
      className="relative m-auto grid max-w-7xl auto-rows-[50px] grid-cols-12 gap-4"
    >
      <LastMatch />
      <div
        className={cn(
          `col-span-4 row-span-4 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 transition-all`,
        )}
      >
        <h1 className="font-display text-4xl font-bold leading-relaxed tracking-wide">
          MVP
        </h1>
      </div>
      <div
        className={cn(
          `col-span-4 row-span-6 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 transition-all`,
        )}
      >
        <h1 className="font-display text-4xl font-bold leading-relaxed tracking-wide">
          New Match
        </h1>
      </div>
      <div
        className={cn(
          `col-span-8 row-span-4 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 transition-all`,
        )}
      >
        <h1 className="font-display text-4xl font-bold leading-relaxed tracking-wide">
          Current Match
        </h1>
      </div>
      <Players />
      <div
        className={`col-span-3 row-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4`}
      >
        Players
      </div>
      <div
        className={`col-span-2 row-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4`}
      >
        Players
      </div>
    </motion.div>
  );
};

export default Dashboard;
