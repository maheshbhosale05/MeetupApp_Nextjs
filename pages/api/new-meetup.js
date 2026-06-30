import { MongoClient } from "mongodb";
import { connectToDatabase } from "../../utils/apiConnection";

async function handler(req, res) {
  if (req.method === "POST") {
    await connectToDatabase(async (meetupsCollection) => {
      const data = req.body;
      const result = await meetupsCollection.insertOne(data);
      res.status(201).json({ message: "Meetup inserted!" });
    });
  }
}

export default handler;
