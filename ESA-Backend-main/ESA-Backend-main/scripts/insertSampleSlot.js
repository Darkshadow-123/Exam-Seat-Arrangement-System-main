const mongoose = require('mongoose');
const Slot = require('../models/Slot.js'); // Adjust the path if necessary

const uri = 'mongodb+srv://rishi:rishi@cluster0.lkiob7f.mongodb.net/';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    console.log("MongoDB connected.");

    const sampleSlots = [
        { branch: "EO", slot: "A", sem: 3, subcode: ["MAT203"] },
        { branch: "EO", slot: "B", sem: 3, subcode: ["CST201"] },
        { branch: "EO", slot: "C", sem: 3, subcode: ["CST203"] },
        { branch: "EO", slot: "D", sem: 3, subcode: ["CST205"] },
        { branch: "EO", slot: "E", sem: 3, subcode: ["HUT200"] },
        { branch: "EO", slot: "F", sem: 3, subcode: ["MCN201"] },
    ];

    try {
        const result = await Slot.insertMany(sampleSlots);
        console.log("Sample slots inserted:", result);
    } catch (error) {
        console.error("Error inserting sample slots:", error);
    } finally {
        mongoose.disconnect();
    }
}).catch(err => {
    console.error("MongoDB connection error:", err);
});
