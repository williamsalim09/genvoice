// src/mirage.js
import { createServer, Response } from 'miragejs';

// mock server to store username + password
export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    // username and pass
    seeds(server) {
      server.db.loadData({
        users: [
          { id: 1, username: "genvoice", password: "GenVoice123!" },
        ],
      });
    },

    routes() {
      this.namespace = "api";

      // get user data
      this.get("/users/1", (schema) => {
        let user = schema.db.users.find(1);
        return user ? user : new Response(404, {}, { message: "User not found!" });
      });

      // update user password
      this.patch("/users/1", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        let user = schema.db.users.find(1);

        // error handling
        if (user) {
          schema.db.users.update(1, { password: attrs.password });
          return { message: "Password updated successfully!" };
        } else {
          return new Response(404, {}, { message: "User not found!" });
        }
      });
    },
  });

  return server;
}
