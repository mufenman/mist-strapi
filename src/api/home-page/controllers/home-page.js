"use strict";

/**
 *  home-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::home-page.home-page", () => ({
  async find(ctx) {
    const populate = ["Events", "posts"];

    ctx.query = {
      ...ctx.query,
      populate: populate.reduce((a, v) => {
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
