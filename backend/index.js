import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

// var cors = require('cors')
// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

//
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!",
    },
    {
      id: 2,
      title: "What do you call fake spaghetti?",
      content: "An impasta!",
    },
    {
      id: 3,
      title: "Why don’t scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 4,
      title: "Why did the bicycle fall over?",
      content: "Because it was two-tired!",
    },
    {
      id: 5,
      title: "What did one hat say to the other?",
      content: "Stay here, Im going on ahead!",
    },
    {
      id: 6,
      title: "Why did the tomato turn red?",
      content: "Because it saw the salad dressing!",
    },
    // Add more jokes as needed
  ];

  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});
