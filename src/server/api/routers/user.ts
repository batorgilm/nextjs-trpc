import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return "";
  }),

  create: publicProcedure
    .input(z.object({ email: z.string(), name: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.create({
        data: {
          email: input.email,
          name: input.name,
        },
      });
    }),
});
