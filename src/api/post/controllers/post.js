"use strict";

/**
 *  post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", () => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        titleImage: {
          fields: ["url", "name"],
        },
        category_post: {
          fields: ["title"],
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
