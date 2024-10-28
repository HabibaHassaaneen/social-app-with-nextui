import User from "../models/User";
import { connectToDatabase } from "@libs/mongodb/mongoose";

export const createorUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  username,
  email_addresses
) => {
  try {
    await connectToDatabase();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          email: email_addresses[0].email_address,
          username: username,
          profilePhoto: image_url,
        },
      },
      { upsert: true, new: true }
    );
    await user.save();
    return user;
  } catch (e) {
    console.error(e);
  }
};
export const deleteUser = async (id) => {
  try {
    await connectToDatabase();
    await User.findByIdAndDelete({ clerkId: id });
  } catch (e) {
    console.error(e);
  }
};

