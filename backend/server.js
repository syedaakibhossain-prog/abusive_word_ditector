import express from "express";
import cors from "cors";
import { Filter } from "bad-words"; // Import the library for bad words detection

const port = 3000;

const app = express();
const filter = new Filter();

// Add custom Bengali keywords to the existing list
filter.addWords('bokachoda', 'khankirchala', 'madarchod', 'bara');

app.use(express.json());
app.use(cors());

app.post("/response", (req, res) => {
    const text = req.body.text || "";


    const isAbusive = filter.isProfane(text);

    if (isAbusive) {
        res.json({
            message: "This post contains abusive language.",
            cleanVersion: filter.clean(text) // This returns "Don't be a *********"
        });
    } else {
        res.json({ message: "This post is safe." });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});