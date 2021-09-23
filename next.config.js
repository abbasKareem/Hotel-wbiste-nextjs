module.exports = {
  reactStrictMode: true,
  env: {
    DB_LOCAL_URI:
      "mongodb+srv://abbas:abbas123@cluster0.f63jg.mongodb.net/bookitDatabase?retryWrites=true&w=majority",
    CLOUDINARY_CLOUD_NAME: "abbas-orgs",
    CLOUDINARY_API_KEY: "213571268133569",
    CLOUDINARY_API_SECRET: "fGwnIb8J8kzIpCseo0kzfC-npp8",
    SMTP_HOST: "smtp.mailtrap.io",
    SMTP_PORT: "2525",
    SMTP_USER: "c05afa0e01a9c0",
    SMTP_PASSWORD: "338d91e647eff3",
    SMTP_FROM_NAME: "BookIT",
    SMTP_FROM_EMAIL: "noreply@bookit.com",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
