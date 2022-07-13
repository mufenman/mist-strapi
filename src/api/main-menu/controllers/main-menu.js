"use strict";

/**
 *  main-menu controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::main-menu.main-menu", () => ({
  async find(ctx) {
    const populate = ["menu", "logo", "mobileLogo"];
    ctx.query = {
      ...ctx.query,
      populate: populate.reduce((a, v) => {
        if (v === "menu") {
          return {
            ...a,
            [v]: {
              populate: "*",
            },
          };
        }
        if (v === "logo") {
          return {
            ...a,
            [v]: {
              fields: ["url", "name"],
            },
          };
        }
        if (v === "mobileLogo") {
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
            populate: "*",
          },
        };
      }, {}),
    };

    const res = await super.find(ctx);
    return res;
  },
}));
