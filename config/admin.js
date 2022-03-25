module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1c3fbc44322fff473cca8db1ab9a62d5'),
  },
});
