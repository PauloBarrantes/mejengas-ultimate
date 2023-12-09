import { z } from "zod";

import {
  createTRPCRouter,
  // protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const playerObject = z.object({
  name: z.string().min(1),
  playerStats: z.object({
    physicalCondition: z.number().min(0).max(10),
    passes: z.number().min(0).max(10),
    power: z.number().min(0).max(10),
    dribbling: z.number().min(0).max(10),
    speed: z.number().min(0).max(10),
  }),
});
export const playerRouter = createTRPCRouter({
  getNumber: publicProcedure.query(({ ctx }) => {
    return ctx.db.player.count();
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.player.findMany();
  }),
  getPlayer: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db.player.findUnique({ where: { id: input.id } });
    }),
  create: publicProcedure
    .input(playerObject)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.player.create({
        data: {
          name: input.name,
          playerStats: {
            create: {
              physicalCondition: input.playerStats.physicalCondition,
              passes: input.playerStats.passes,
              power: input.playerStats.power,
              dribbling: input.playerStats.dribbling,
              speed: input.playerStats.speed,
            },
          },
        },
      });
    }),
});
