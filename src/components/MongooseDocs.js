// src/components/MongooseDocs.js

import React from 'react';

const MongooseDocs = () => {
    return (
        <div>
            <h1>Mongoose Setup and Validations</h1>
            <p>
                This section provides a guide on how to set up Mongoose and implement validations using Mongoose models.
            </p>
            <h2>Getting Started with Mongoose</h2>
            <p>
                First, ensure you have MongoDB and Node.js installed. Then, install Mongoose using npm:
            </p>
            <pre>
                {`npm install mongoose --save`}
            </pre>
            <p>
                Next, include Mongoose in your project and establish a connection to your MongoDB database:
            </p>
            <pre>
                {`const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to the database');
});`}
            </pre>

            <h2>Defining a Schema</h2>
            <p>
                In Mongoose, everything is derived from a Schema. Here’s how to define a simple schema for a Kitten:
            </p>
            <pre>
                {`const kittySchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 0 }
});`}
            </pre>

            <h2>Creating a Model</h2>
            <p>
                After defining a schema, compile it into a model:
            </p>
            <pre>
                {`const Kitten = mongoose.model('Kitten', kittySchema);`}
            </pre>

            <h2>Validations</h2>
            <p>
                You can add validations directly in your schema definition. For example:
            </p>
            <pre>
                {`const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, match: /.+\@.+\..+/ },
    password: { type: String, required: true, minlength: 6 }
});`}
            </pre>

            <h2>Saving Documents</h2>
            <p>To save a document to the database:</p>
            <pre>
                {`const fluffy = new Kitten({ name: 'Fluffy', age: 3 });
fluffy.save(function (err) {
    if (err) return console.error(err);
    console.log('Kitten saved!');
});`}
            </pre>

            <h2>Querying Documents</h2>
            <p>You can query documents using methods like `find()`:</p>
            <pre>
                {`Kitten.find({}, function(err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
});`}
            </pre>

        </div>
    );
};

export default MongooseDocs;

