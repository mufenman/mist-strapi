"use strict";

/**
 *  invitation controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::invitation.invitation", () => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        address: {
          populate: "*",
        },
        titleImage: {
          fields: ["url", "name"],
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
