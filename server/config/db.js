import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    const res = await mongoose.connect(
      "mongodb://127.0.0.1:27017/blog-mern-project"
    );

    if (res) {
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectToMongo;
