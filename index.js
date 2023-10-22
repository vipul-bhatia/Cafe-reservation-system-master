const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB setup
const url = 'mongodb+srv://priyam:pqrs.123@cluster0.1uefwpt.mongodb.net/';
const dbName = 'Reservation'; // Replace with your database name
const client = new MongoClient(url, { useUnifiedTopology: true });

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // To serve static files

// POST route to handle form submission
app.post('/reserve', async (req, res) => {
    const reservation = {
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time,
        numberOfPeople: req.body.persons
    };

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Get the database
        const db = client.db(dbName);

        // Get the collection
        const collection = db.collection('reservations');

        // Insert the reservation
        const result = await collection.insertOne(reservation);
        console.log(`Reservation inserted with the following id: ${result.insertedId}`);

        // Send a success response or redirect
        res.send('Reservation successful!');

    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing reservation.');
    } finally {
        await client.close();
    }
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
