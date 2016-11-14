import MongoClient from 'mongodb';

const exchangeCount = 10;

const events = [
    {
        name: 'Lollapalooza',
        tickets: []
    },
    {
        name: 'Mamby on the Beach',
        tickets: []
    },
    {
        name: 'Blues Festival',
        tickets: []
    }
];

MongoClient.connect("mongodb://localhost:27017/goku", function (err, db) {
    if (!err) {
        console.log("DB CONNECTED");
    }

    var ExchangeCollection = db.collection('Exchange');
    var TicketCollection = db.collection('Ticket');
    var EventCollection = db.collection('Event');

    ExchangeCollection.removeMany({});
    TicketCollection.removeMany({});
    EventCollection.removeMany({});

    EventCollection.insertMany(events);

    ExchangeCollection.insertOne({orders: []}, (err, result) => {
        let exchangeId = result.insertedId;
        TicketCollection.insertOne({exchanges: [exchangeId]}, (err, result) => {
            EventCollection.updateOne({"name": {$eq: "Lollapalooza"}}, {$addToSet: {"tickets": result.insertedId}});
        });
    });

    ExchangeCollection.insertOne({orders: []}, (err, result) => {
        let exchangeId = result.insertedId;
        TicketCollection.insertOne({exchanges: [exchangeId]}, (err, result) => {
            EventCollection.updateOne({"name": {$eq: "Mamby on the Beach"}}, {$addToSet: {"tickets": result.insertedId}});
        });
    });

    ExchangeCollection.insertOne({orders: []}, (err, result) => {
        let exchangeId = result.insertedId;
        TicketCollection.insertOne({exchanges: [exchangeId]}, (err, result) => {
            EventCollection.updateOne({"name": {$eq: "Blues Festival"}}, {$addToSet: {"tickets": result.insertedId}});
        });
    });

    console.log("DONE POPULATING DB");
});