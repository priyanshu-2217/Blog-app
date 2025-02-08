import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    const res = await mongoose.connect(
      "mongodb+srv://priyan90204:hello5@cluster0.2bqs9.mongodb.net/"
    );

    if (res) {
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectToMongo;
