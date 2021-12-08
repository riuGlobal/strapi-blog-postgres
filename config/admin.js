module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e4b33ec1a112e753cf46d8a2ad5933f6'),
  },
});
