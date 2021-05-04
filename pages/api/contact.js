import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      return res.status(422).json({ message: 'Invalid input' });
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        'mongodb://lalla:sairam@cluster0-shard-00-00.0ajph.mongodb.net:27017,cluster0-shard-00-01.0ajph.mongodb.net:27017,cluster0-shard-00-02.0ajph.mongodb.net:27017/blog?ssl=true&replicaSet=atlas-7y2n4b-shard-0&authSource=admin&retryWrites=true&w=majority'
      );
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: 'Failed to connect to database' });
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = res.insertedId;
    } catch (error) {
      console.log(error);
      client.close();
      return res.status(500).json({ message: 'Storing message failed' });
    }

    client.close();

    res
      .status(200)
      .json({ message: 'Successfully store message!', data: newMessage });
  }
};

export default handler;
