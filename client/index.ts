import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/index";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "https://miniature-lamp-75594grxgw5hpw64-3000.app.github.dev",
      headers: {
        "Content-Type": "application/json",
      },
    }),
  ],
});

async function main() {
    const users = await trpc.userList.query();
    console.log(users);
    //create user
    const user = await trpc.userCreate.mutate({ name: "Alice" });
    console.log(user);
    // list users
    const users2 = await trpc.userList.query();
    console.log(users2);
    // update user
    const updatedUser = await trpc.userUpdate.mutate({
      id: user.id,
      name: "Alice Updated",
    });
    console.log(updatedUser);
    // list users
    const users3 = await trpc.userList.query();
    console.log(users3);
    // find user by id
    const userById = await trpc.userById.query(user.id);
    console.log(userById);

    // delete user
    const deletedUser = await trpc.userDelete.mutate(user.id);
    console.log(deletedUser);

}

void main();