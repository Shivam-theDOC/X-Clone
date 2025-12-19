import { db } from "../firebase/firebase-config.js";

const createPost = async (req, res) => {
  try {
    const postData = req.body;
    const docRef = await db.collection("posts").add(postData);
    res.status(201).json({ id: docRef.id, ...postData });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Error creating post" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const snapshot = await db.collection("posts").get();
    const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error getting posts:", error);
    res.status(500).json({ message: "Error getting posts" });
  }
};

export { createPost, getAllPosts };
