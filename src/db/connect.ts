import mongoose from "mongoose";
import seed from "./seed";

export default (db: string) => {
  const connect = () => {
    mongoose
      .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        return console.log("db connected");
      })
      .catch((err) => {
        console.log("Error on db " + err);
        return process.exit(1);
      });
  };

  connect();

  seed();

  mongoose.connection.on("disconnected", connect);
};
