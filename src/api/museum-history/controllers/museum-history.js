"use strict";

/**
 *  museum-history controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::museum-history.museum-history",
  () => ({
    async find(ctx) {
      const populate = ["pageStructure"];
      ctx.query = {
        ...ctx.query,
        populate: populate.reduce((a, v) => {
          if (v === "pageStructure") {
            return {
              ...a,
              [v]: {
                populate: "*",
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
  })
);
