import express from "express";
import cors from "cors";
const PORT = 3000;

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
