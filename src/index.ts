import express from 'express';

const app = express();
const PORT = 8000;

// JSON body parser middleware
app.use(express.json());

// Root route
app.get('/', (_req, res) => {
  res.send('Hello from Express + TypeScript!');
});

// Start server and log the URL
app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`Server is running at ${url}`);
});
