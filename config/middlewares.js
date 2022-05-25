module.exports = ({ env }) => [
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://mist-space.fra1.digitaloceanspaces.com/",
            "https://dl.airtable.com/",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://mist-space.fra1.digitaloceanspaces.com/",
            "https://dl.airtable.com/",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
