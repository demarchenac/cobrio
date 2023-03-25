import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const contactRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.contact.findMany();
  }),
});
