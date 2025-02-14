import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { z } from "zod";
import { Person } from "./db";
import { publicProcedure, router } from "./trpc";
const appRouter = router({
  userList: publicProcedure.query(async () => {
    const users = await Person.findMany();
    return users;
  }),
  userById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
    const user = await Person.findById(input);
    return user;
  }),
  userCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      const user = await Person.create(input);
      return user;
    }),
  userUpdate: publicProcedure
    .input(z.object({ id: z.string(), name: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      const user = await Person.update(input.id, { name: input.name });
      return user;
    }),
  userDelete: publicProcedure
    .input(z.string())
    .mutation(async (opts) => {
      const { input } = opts;
      const user = await Person.delete(input);
      return user;
    }),


});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
