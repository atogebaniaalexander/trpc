type User = { id: string; name: string };

/**
 * [
 *  (2) { id: '1', name: 'Alice' },
 * { (1) id: '2', name: 'Bob' },
 *  { (0) id: '3', name: 'Charlie' }
 * ]
 */
const users: User[] = [];

export const Person = {
    findMany: async () => users,
    findById: async (id: string) => users.find((user) => user.id === id),
    create: async (data: { name: string }) => {
      const user = { id: String(users.length + 1), ...data };
      users.push(user);
      return user;
    },
    update: async (id: string, data: { name: string }) => {
      const user = users.find((user) => user.id === id);
      if (!user) {
        throw new Error("User not found");
      }
      user.name = data.name;


      return user;
    },
    delete: async (id: string) => {
      const index = users.findIndex((user) => user.id === id);
      if (index === -1) {
        throw new Error("User not found");
      }
      return users.splice(index, 1)[0];
    },
};

