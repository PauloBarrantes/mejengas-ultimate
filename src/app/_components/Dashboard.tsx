"use client";
import { motion } from "framer-motion";
import { cn } from "~/utils/utils";
import useDashboard, { type IWindow } from "../store/useDashboard";

/**
 * Renders the Dashboard component.
 *
 * @return {JSX.Element} The rendered Dashboard component.
 */
const Dashboard = () => {
  const { windows } = useDashboard((state) => state);

  return (
    <motion.div
      layout
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="relative m-auto grid max-w-7xl auto-rows-[50px] grid-cols-12 gap-4"
    >
      {windows.map((c: IWindow) =>
        c.component ? (
          <c.component key={c.id} {...c} />
        ) : (
          <motion.div key={c.id} className={cn(c.className)} />
        ),
      )}
    </motion.div>
  );
};

export default Dashboard;
