"use strict";

/**
 *  event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event", () => ({
  async find(ctx) {
    const populate = ["places", "events_category"];
    ctx.query = {
      ...ctx.query,
      populate: populate.reduce((a, v) => {
        if (v === "events_category") {
          return {
            ...a,
            [v]: {
              populate: {
                data: {
                  fields: ["Title"],
                },
              },
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
    // ctx.query = { ...ctx.query, populate: "*" };
    const res = await super.find(ctx);
    return res;
  },

  async findOne(ctx) {
    ctx.query = { ...ctx.query, populate: "*" };

    const res = await super.find(ctx);
    return res;
  },
}));
