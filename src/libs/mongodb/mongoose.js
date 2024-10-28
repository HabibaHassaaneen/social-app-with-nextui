import mongoose from "mongoose";
let isConnected = false;
export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);//That means that all the fields will be saved in the database, even if some of them are not specified in the schema model
  if (isConnected) {
    console.log("Moongo database is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "SocialMediaDB",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("woow Connected to SocialMediaDB");
  } catch (e) {
    console.log(e);
  }

};

