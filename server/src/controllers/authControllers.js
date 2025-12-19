import { db } from "../firebase/firebase-config.js";
import bcrypt from "bcrypt"; // 🔐 for password hashing
import jwt from "jsonwebtoken"; // 🔑 for JWT token generation

const getData = async (req, res) => {
  res.send("hello");
};

//*register controller

const register = async (req, res) => {
  try {
    const { name, email, dateOfBirth } = req.body;

    if (!name || !email || !dateOfBirth) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await db.collection("users").where("email", "==", email).get();

    if (!existingUser.empty) {
      return res.status(409).json({ message: "User with this email already exists" });
    }

    // Create user without password (will be added in next step)
    const userRef = await db.collection("users").add({
      name,
      email,
      dateOfBirth,
      createdAt: new Date().toISOString(),
    });

    return res.status(201).json({
      message: "User registered successfully",
      userId: userRef.id,
      user: { name, email },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

//*login controller

const login = async (req, res) => {
  try {
    const { credentials, password } = req.body;

    console.log(req.body);

    if (!credentials || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const userRef = db.collection("users");

    const [emailSnap, usernameSnap, phoneSnap] = await Promise.all([
      userRef.where("email", "==", credentials).get(),
      userRef.where("username", "==", credentials).get(),
      userRef.where("phone", "==", credentials).get(),
    ]);

    if (emailSnap.empty && usernameSnap.empty && phoneSnap.empty) {
      return res.status(404).json({ message: "User not found" });
    }

    const allDocs = [
      ...emailSnap.docs,
      ...usernameSnap.docs,
      ...phoneSnap.docs,
    ];

    if (allDocs.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const userDoc = allDocs[0];
    const userData = userDoc.data();
    const userId = userDoc.id;

    // 🔐 compare hashed password
    const isPasswordValid = await bcrypt.compare(password, userData.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 🔑 Generate JWT token
    const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-this-in-production";
    const token = jwt.sign(
      {
        userId: userId,
        email: userData.email,
        username: userData.username
      },
      JWT_SECRET,
      { expiresIn: "7d" } // Token expires in 7 days
    );

    // Return user data and token
    return res.status(200).json({
      message: "Login successful",
      token: token,
      user: {
        id: userId,
        username: userData.username,
        email: userData.email,
        name: userData.name
      },
    });
  } catch (error) {
    console.log("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export { register, getData, login };

//*! Important Note:
//*? Never mix Client SDK with Admin SDK inside firebase
//*? always use Admin SDK for server-side operations
//*? and Client SDK for client-side operations
