"use strict";

/**
 *  exhibit controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::exhibit.exhibit", () => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        titleImage: {
          fields: ["url", "name", "width", "height"],
        },
      },
    };
    const res = await super.find(ctx);
    return res;
  },

  async findOne(ctx) {
    ctx.query = { ...ctx.query, populate: "*" };

    const res = await super.find(ctx);
    return res;
  },
}));
