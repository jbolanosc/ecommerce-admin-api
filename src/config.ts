const config = {
  jwtSecretSalt: process.env.SECRET_JWT,
  devMongoUrl: process.env.MONGO_DEV
    ? process.env.MONGO_DEV
    : "mongodb://admin-db:27017/admin",
  prodMongoUrl: process.env.MONGO_PROD,
  testMongoUrl: process.env.MONGO_TEST,
};

export default config;
