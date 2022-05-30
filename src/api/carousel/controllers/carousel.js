"use strict";

/**
 *  carousel controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::carousel.carousel", () => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        slide: {
          populate: {
            image: {
              fields: ["url", "name", "width", "height"],
            },
          },
        },
      },
    };
    const res = await super.find(ctx);
    return res;
  },
}));
