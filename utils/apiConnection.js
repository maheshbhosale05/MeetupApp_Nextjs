import { MongoClient } from "mongodb";

export const connectToDatabase = async (apiMethod) => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_DBNAME}:${process.env.MONGODB_PASSWORD}@cluster0.pjmngk9.mongodb.net/?appName=Cluster0`,
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const result = await apiMethod(meetupsCollection);
  await client.close();
  return result;
};
