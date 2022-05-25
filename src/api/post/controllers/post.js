"use strict";

/**
 *  post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", () => ({
  async find(ctx) {
    const populate = ["titleImage", "category_posts"];
    // ctx.query = {
    //   ...ctx.query,
    //   populate: populate.reduce((a, v) => {
    //     if (v === "category_posts") {
    //       return {
    //         ...a,
    //         [v]: {
    //           populate: {
    //             data: {
    //               fields: ["Title"],
    //             },
    //           },
    //         },
    //       };
    //     }

    //     if (v === "titleImage") {
    //       return {
    //         ...a,
    //         [v]: {
    //           fields: ["url", "name"],
    //         },
    //       };
    //     }

    //     return {
    //       ...a,
    //       [v]: {
    //         populate: "*",
    //       },
    //     };
    //   }, {}),
    // };
    const res = await super.find(ctx);
    return res;
  },

  async findOne(ctx) {
    ctx.query = { ...ctx.query, populate: "*" };

    const res = await super.find(ctx);
    return res;
  },
}));
