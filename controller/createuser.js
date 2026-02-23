// Import User model
import User from "../models/user.js";

// Controller function to get users
export const displayUsers = async (req, res) => {
  try {
    // Fetch users from database
    const users = await User.find();

    res.status(200).json({
      success: true,
      message: "User data fetched successfully",
      data: users
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching users",
      error: error.message
    });
  }
};
export const createUser = async (req, res) => {
  try {
    const { name, email, id } = req.body;

    // Create new user instance
    const newUser = new User({ name, email, id });
    // Save user to database
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser
    }); 
  } catch (error) {
    res.status(500).json({
      success: false,

      message: "Error creating user",
      error: error.message
    });
  } 
};

