"use strict";

/**
 *  information controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::information.information", () => ({
  async find(ctx) {
    const populate = ["item", "image"];
    ctx.query = {
      ...ctx.query,
      populate: populate.reduce((a, v) => {
        return {
          ...a,
          [v]: {
            populate: {
              image: {
                fields: ["url", "name"],
              },
              dropDown: {
                populate: "*",
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
