// const path = require("path");

// module.exports = ({ env }) => {
//   console.log(env("DATABASE_HOST"));
//   console.log(env("DATABASE_PORT"));
//   return {
//     connection: {
//       client: "sqlite",
//       connection: {
//         filename: path.join(
//           __dirname,
//           "..",
//           env("DATABASE_FILENAME", ".tmp/data.db")
//         ),
//       },
//       useNullAsDefault: true,
//     },
//   };
// };

module.exports = ({ env }) => {
  return {
    connection: {
      client: "postgres",
      connection: {
        host: env(
          "DATABASE_HOST",
          "app-6b4fe47a-8a0f-44d2-bab9-0f01d928c193-do-user-5051522-0.b.db.ondigitalocean.com"
        ),
        port: env.int("DATABASE_PORT", 25060),
        database: env("DATABASE_NAME", "db"),
        user: env("DATABASE_USERNAME", "db"),
        password: env("DATABASE_PASSWORD", "96XFfG4aOxEB5O94"),
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        },
      },
      debug: false,
    },
  };
};
