"use strict";

/**
 *  footer controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::footer.footer", ({ strapi }) => ({
  async find(ctx) {
    const populate = [
      "Social",
      "logo",
      "Menu",
      "Partner",
      "Contacts",
      "AntiCorruption",
    ];
    ctx.query = {
      ...ctx.query,
      populate: populate.reduce((a, v) => {
        if (v === "logo") {
          return {
            ...a,
            [v]: {
              fields: ["url", "name"],
            },
          };
        }
        return {
          ...a,
          [v]: {
            populate: {
              icon: {
                fields: ["url", "name"],
              },
              logo: {
                fields: ["url", "name"],
              },
            },
          },
        };
      }, {}),
    };

    const res = await super.find(ctx);
    return res;
  },
}));
